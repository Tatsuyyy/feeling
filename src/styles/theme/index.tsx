// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import React, { useMemo } from 'react';
import componentsOverride from './overrides';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import shape from './shape';
import typography from './typography';

const ThemeConfig = ({ children }: { children: React.ReactNode }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
    }),
    [],
  );

  const theme = createTheme(themeOptions);
  // const theme = addTheme(baseTheme);
  theme.components = componentsOverride(theme);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default ThemeConfig;
