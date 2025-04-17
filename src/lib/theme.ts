import { extendTheme } from '@chakra-ui/react'

const pallets = {
  dark: "#1b1f24",
  blue: "#0a5fe4",
  grey: "#2b313c",
  white: "#ffffff",
};

const themeConfig = {
  colors: {
    primary: pallets.blue,
    secondary: pallets.grey,
    background: pallets.dark,
    foreground: pallets.white,
    text: pallets.white,
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "primary",
        fontWeight: "semibold",
        _hover: { color: "text", textDecoration: "underline" },
      },
    },
    Text: {
      baseStyle: {
        color: "text",
      },
    },
    Box: {
      baseStyle: {
        boxShadow: "md",
      },
    },
  },
};

export const theme = extendTheme(themeConfig);
