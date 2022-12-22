import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { selectMode } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { PaletteMode } from '@mui/material';
import * as React from 'react';
type Props = {
  children?: React.ReactNode;
};

//children with ReactNode type
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const mode = useSelector(selectMode);

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
          paper: mode === 'dark' ? '#131313' : '#fcfcfc',
          //   opposite: mode === 'dark' ? '#FCFBFA' : '#1F1F1F',
          //   light: '#FCFBFA',
        },
        grey: {
          50: mode === 'dark' ? 'hsl(0, 0%, 9%)' : 'hsl(0, 10%, 97%)',
          100: mode === 'dark' ? 'hsl(0, 0%, 15%)' : 'hsl(0, 0%, 92%)',
          200: mode === 'dark' ? 'hsl(0, 0%, 25%)' : 'hsl(0, 0%, 83%)',
          300: mode === 'dark' ? 'hsl(0, 0%, 35%)' : 'hsl(0, 0%, 80%)',
          400: mode === 'dark' ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 70%)',
          500: mode === 'dark' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 50%)',
          600: mode === 'dark' ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 35%)',
          700: mode === 'dark' ? 'hsl(0, 0%, 83%)' : 'hsl(0, 0%, 25%)',
          800: mode === 'dark' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 15%)',
          900: mode === 'dark' ? 'hsl(0, 10%, 97%)' : 'hsl(0, 0%, 9%)',
        },
      },

      //   text: {
      //     primary: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
      //     disabled: '#C3C1BD',
      //     secondary: '#999999',
      //   },

      typography: {
        fontFamily: 'Lato, sans-serif',
        // fontstyle: 'normal',
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
        //subtitle1
        //subtitle2
        //button
        //caption
        //overline
      },
      components: {
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
