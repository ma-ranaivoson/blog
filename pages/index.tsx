import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import { HomePage } from '../features';

type Data = {
  message: string;
}

export async function getServerSideProps(context: GetStaticPropsContext) {
  return {
    props: {
      message: 'Hello',
    },
  };
}

export default function Home({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <HomePage />;
}
