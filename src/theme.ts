import { CSSVariablesResolver, createTheme } from '@mantine/core';

const theme = createTheme({
  other: {
    headerHeight: '5rem',
    footerHeight: '5rem',
    headerHeightMobile: '3rem',
    footerHeightMobile: '3rem',
  },
});

const themeResolver: CSSVariablesResolver = (baseTheme) => ({
  variables: {
    '--header-height': baseTheme.other.headerHeight,
    '--footer-height': baseTheme.other.footerHeight,
    '--header-height-mobile': baseTheme.other.headerHeightMobile,
    '--footer-height-mobile': baseTheme.other.footerHeightMobile,
  },
  dark: {},
  light: {},
});

export { theme, themeResolver };
