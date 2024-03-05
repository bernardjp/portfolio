import { CSSVariablesResolver, createTheme } from '@mantine/core';

const theme = createTheme({
  other: {
    headerHeight: '100px',
    footerHeight: '100px',
  },
});

const themeResolver: CSSVariablesResolver = (baseTheme) => ({
  variables: {
    '--header-height': baseTheme.other.headerHeight,
    '--footer-height': baseTheme.other.footerHeight,
  },
  dark: {},
  light: {},
});

export { theme, themeResolver };
