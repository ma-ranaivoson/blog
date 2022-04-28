import { extendTheme } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
export const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red',
      text: {
        default: '#fff',
        _dark: 'gray.50',
        _hover: 'blue',
      },
    },
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
});
