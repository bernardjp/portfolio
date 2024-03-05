import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme, themeResolver } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={themeResolver}>
      <Router />
    </MantineProvider>
  );
}
