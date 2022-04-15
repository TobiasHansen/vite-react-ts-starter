import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';

import Main from '~/app/main';
import { AuthProvider } from '~/contexts/authContext';

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <AuthProvider>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider withGlobalStyles theme={{ colorScheme: colorScheme }}>
          <Main />
        </MantineProvider>
      </ColorSchemeProvider>
    </AuthProvider>
  );
};
