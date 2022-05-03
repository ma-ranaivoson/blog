import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { HomePage } from '../features';
import getContribution from '../services/getContribution';

export async function getServerSideProps(context: GetStaticPropsContext) {
  getContribution();

  return {
    props: {
      message: 'Hello',
    },
  };
}

export default function Home({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(message);

  return <HomePage />;
}
