import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red',
      text: {
        default: '#fff',
        _dark: 'gray.50',
        _hover: 'blue'
      },
    },
  },
});
