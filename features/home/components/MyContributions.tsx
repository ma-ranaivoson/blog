import {
  Heading, Link,
} from '@chakra-ui/react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { formatedDateType } from '../../../services/getContribution';

interface MyContributionsProps {
  contributions: unknown
}

export default function MyContributions({ contributions }: MyContributionsProps) {
  const contribs = contributions as formatedDateType[];

  return (
    <>
      <Heading as="h3" color="#38B2AC">
        My contributions on
        {' '}
        <Link href="https://www.github.com/ma-ranaivoson" isExternal>GitHub</Link>
        {' '}
        this year
      </Heading>
      <CalendarHeatmap
        startDate={new Date('2022-01-01')}
        endDate={new Date('2022-12-31')}
        values={contribs}
      />
    </>
  );
}
