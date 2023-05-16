import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useAppSelector } from '@/app/store';
import { PaletteMode } from '@mui/material';
import * as React from 'react';
type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  // index signature typegradients

  interface TypeGradient {
    [key: string]: string;
  }

  interface Palette {
    gradient: TypeGradient;
  }
  interface PaletteOptions {
    gradient: TypeGradient;
  }

  interface TypeBackground {
    opposite: string;
  }
}

//children with ReactNode type
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const mode = useAppSelector((state) => state.user.mode);

  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: mode as PaletteMode,
        primary: {
          main: '#DD3333',
        },
        secondary: {
          main: '#222489',
        },
        background: {
          default: mode === 'dark' ? '#1F1F1F' : '#FCFBFA',
          opposite: mode === 'dark' ? '#FCFBFA' : '#1F1F1F',
          paper: mode === 'dark' ? '#131313' : '#FCFCFC',
        },
        grey: {
          50: mode === 'dark' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 5%, 95%)',
          100: mode === 'dark' ? 'hsl(0, 0%, 20%)' : 'hsl(0, 0%, 90%)',
          200: mode === 'dark' ? 'hsl(0, 0%, 30%)' : 'hsl(0, 0%, 80%)',
          300: mode === 'dark' ? 'hsl(0, 0%, 40%)' : 'hsl(0, 0%, 70%)',
          400: mode === 'dark' ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 60%)',
          500: mode === 'dark' ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 50%)',
          600: mode === 'dark' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 40%)',
          700: mode === 'dark' ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 30%)',
          800: mode === 'dark' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 20%)',
          900: mode === 'dark' ? 'hsl(0, 5%, 95%)' : 'hsl(0, 0%, 10%)',
        },
        gradient: {
          bronze: 'linear-gradient(180deg, #9C6D3E 0%, #E8C8A9 100%)',
          silver: 'linear-gradient(180deg, #808080 0%, #DFDFDF 100%)',
          gold: 'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',
        },
      },

      typography: {
        fontFamily: 'Lato, sans-serif',
        body1: {
          lineHeight: '20px',
        },
        body2: {
          lineHeight: '18px',
        },
        // body3: {
        //   fontSize: '12px',
        //   lineHeight: '16px',
        //   display: 'block',
        // },
        // body4: {
        //   fontSize: '10px',
        //   lineHeight: '14px',
        //   display: 'block',
        // },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: '1/1',
            },
          },
        },
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
