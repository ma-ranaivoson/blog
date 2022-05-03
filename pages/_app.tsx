import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../themes/customTheme';
import Layout from '../layout';
import 'react-calendar-heatmap/dist/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
