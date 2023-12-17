import React from 'react';
import { changeMode } from '@/features/user/userSlice';
import { Stack, Box, Typography, IconButton, TypographyVariant, SxProps, Theme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppDispatch, useAppSelector } from '@/app/store';
const TemplateTester = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.user.mode);

  const colors = [
    {
      type: 'primary',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'secondary',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'error',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'warning',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'info',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'success',
      colors: ['.light', '.main', '.dark'],
    },
    {
      type: 'grey',
      colors: [
        '.50',
        '.100',
        '.200',
        '.300',
        '.400',
        '.500',
        '.600',
        '.700',
        '.800',
        '.900',
        '.A100',
        '.A200',
        '.A400',
        '.A700',
      ],
    },
    {
      type: 'background',
      colors: ['.default', '.paper', '.opposite'],
    },
    {
      type: 'text',
      colors: ['.primary', '.secondary', '.disabled'],
    },
    {
      type: 'gradient',
      colors: ['bronze', 'silver', 'gold'],
    },
  ];
  const typographies = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'body3',
    'body4',
    'caption',
    'button',
    'overline',
  ];
  const themeTypes = (type: string, func: JSX.Element[]) => (
    <Stack
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: 5,
        position: 'relative',
        background: (theme: Theme) =>
          mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,

        backdropFilter: 'blur(10px)',
      }}
      gap={2}
    >
      <Typography variant="h3">{type}</Typography> {func}
      <IconButton onClick={() => dispatch(changeMode())} sx={{ position: 'absolute', top: 10, right: 10 }}>
        <Brightness4Icon
          sx={{
            transition: 'transform 0.4s',
            transform: mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        />
      </IconButton>
    </Stack>
  );

  const colorCards = colors.map((cat) => (
    <Stack key={cat.type} gap={1}>
      <Typography variant="h5">{cat.type}</Typography>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {cat.colors.map((color) => (
          <Stack key={color}>
            <Box
              sx={
                {
                  boxShadow: 2,
                  width: { xs: 62, sm: 100, md: 125 },
                  height: { xs: 62, sm: 100, md: 125 },
                  backgroundColor: cat.type + color,
                  background: (theme: Theme) => theme.palette.gradient[color],
                  borderRadius: 1,
                  p: 0.65,
                  '& p': {
                    fontSize: { xs: 10, sm: 14, md: 16 },
                    textShadow: mode === 'dark' ? '0px 0px 10px #000' : '0px 0px 10px #fff',
                  },
                } as SxProps
              }
            >
              <Typography fontWeight="bold">{color}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  ));

  const typoCards = typographies.map((typo) => (
    <Stack key={typo} gap={1}>
      <Typography variant={typo as TypographyVariant}>{typo}</Typography>
    </Stack>
  ));

  return (
    <Stack gap={5}>
      {themeTypes('#Colors', colorCards)}
      {themeTypes('#Typography', typoCards)}
    </Stack>
  );
};

export default TemplateTester;
