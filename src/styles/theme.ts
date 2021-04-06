import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#F5F8FA",
      75: "#DADADA",
      100: "#FFBA08",
      150: "#999999",
      200: "#47585B"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.50',
        color: 'brand.200'
      }
    }
  }
});