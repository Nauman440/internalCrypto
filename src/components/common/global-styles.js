import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

const theme = {
  colors: {
    primary: "#022A5D",
    secondary: "#5a8d52",
    dark: "#333333",
    black: "#000000",
    lightColor: "#d9d9d9",
    white: "#FFFFFF",
    background: "#F3F7FF",
    background2: "#464646",
    text: "rgba(51, 51, 51, 0.5)",
  },

  breakpoints: {
    xxs: "380px",
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },

  up: (breakpoint, vertical = false) =>
    `@media (min-${
      vertical ? "height" : "width"
    }: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
  between: (breakpointMin, breakpointMax, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpointMax}) and (min-${
      vertical ? "height" : "width"
    }: calc(${breakpointMin} + 0.02px))`,
}

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  body {
      font-family: 'Montserrat', sans-serif;
      scroll-behavior: smooth;
   }

`
export default function BaseLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
