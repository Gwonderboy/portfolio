"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Custom color palette
const pallets = {
  primary: "#0a0a0a", // dark blackish color
  secondary: "#2c2c2c", // muted dark grey
  background: "#383737", // light grey background
  accent1: "#f2f2f2", // light grey
  accent2: "#3a4a72", // muted deep blue
  accent3: "#0a5fe4", // vibrant blue
  text: "#ffffff", // white text
  hover: "#70a7e8", // light blue for hover
  error: "#e74c3c", // error red
  success: "#27ae60", // success green
};

const themeConfig = {
  colors: {
    primary: pallets.primary,
    secondary: pallets.secondary,
    accent1: pallets.accent1,
    accent2: pallets.accent2,
    accent3: pallets.accent3,
    text: pallets.text,
    background: pallets.background,
    hover: pallets.hover,
    error: pallets.error,
    success: pallets.success,
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "primary", // Set background color to light grey
        color: "text", // Set text color to white
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "accent3", // Primary link color (blue)
        fontWeight: "semibold",
        _hover: {
          color: "text",
          textDecoration: "underline",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "full", // Rounded button style
        fontWeight: "medium",
        _hover: {
          bg: "hover", // Hover state using light blue
        },
        _active: {
          bg: "accent2", // Active state using muted blue
        },
      },
    },
    Box: {
      baseStyle: {
        boxShadow: "md", // Medium shadow for Box components
      },
    },
  },
};

const theme = extendTheme(themeConfig);

export default function Chakra({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
