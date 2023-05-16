import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { decrement, increment } from '@/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/store';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  return (
    <Stack
      sx={{
        width: '100%',
        backgroundColor: 'grey.100',
        boxShadow: 1,
        mt: 2,
        p: 2,
        borderRadius: 8,
        fontSize: 20,
        button: {
          fontSize: 20,
        },
      }}
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Button variant="contained" aria-label="Decrement value" onClick={() => dispatch(decrement(1))}>
        -
      </Button>
      <Box
        sx={{
          borderRadius: 1,
          backgroundColor: 'grey.200',
          boxShadow: 3,
          p: 1,
          height: 47,
          minWidth: 47,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {count}{' '}
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'primary.main' }}
        aria-label="Increment value"
        onClick={() => dispatch(increment(1))}
      >
        +
      </Button>
    </Stack>
  );
};

export default Counter;
