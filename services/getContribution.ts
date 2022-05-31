import formatDate from '../utils/formatDate';

export type formatedDateType = {
  date: string | undefined;
  count: number;
};

interface dataType {
  created_at: string;
}

function toCalendarHeatmapFormat(
  data: dataType[],
  arr: formatedDateType[],
): formatedDateType[] {
  const formatedDates: formatedDateType[] = [...arr];

  if (data.length === 0) {
    return formatedDates;
  }

  if (formatedDates.length === 0) {
    formatedDates.push({
      date: formatDate(data?.pop()?.created_at as string),
      count: 1,
    });

    return toCalendarHeatmapFormat(data, formatedDates);
  }

  const currentDate = formatDate(data?.pop()?.created_at as string);
  const lastDate = formatedDates[formatedDates.length - 1];

  if (currentDate === lastDate.date) {
    formatedDates[formatedDates.length - 1].count++;
    return toCalendarHeatmapFormat(data, formatedDates);
  }

  formatedDates.push({
    date: currentDate,
    count: 1,
  });

  return toCalendarHeatmapFormat(data, formatedDates);
}

export default async function getContribution() {
  const res1 = await fetch(
    'https://api.github.com/user/55329621/events?page=1',
    {
      headers: {
        Authorization: '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',
      },
    },
  );
  const data1 = await res1.json();
  const res2 = await fetch(
    'https://api.github.com/user/55329621/events?page=2',
    {
      headers: {
        Authorization: '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',
      },
    },
  );
  const data2 = await res2.json();

  return toCalendarHeatmapFormat([...data1, ...data2], []);
}
