import { ThemeProvider } from "styled-components"
import  theme  from "../src/theme"


export const decorators = [
  
  Story => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: {
//       light: theme,
//       dark: theme,
//     },
//     defaultTheme: "light",
//     Provider: ThemeProvider,
//   }),
// ]

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
