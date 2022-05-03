import { InferGetServerSidePropsType } from 'next';
import { HomePage } from '../features';
import getContribution from '../services/getContribution';

export async function getServerSideProps(/* context: GetStaticPropsContext */) {
  return {
    props: {
      contributions: await getContribution(),
    },
  };
}

export default function Home(
  { contributions }: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return <HomePage contributions={contributions} />;
}
