import { useState } from 'react';
import { Box } from '@mui/material';
import styles from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount, incrementAsync, incrementByAmount } from '../../features/counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  console.log(count);
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Box
      className={styles.wrapper}
      sx={{
        py: 10,
        px: 2,
        mt: 3,
        boxShadow: 3,
        borderRadius: 5,
        backgroundColor: 'grey.100',
      }}
    >
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count} </span>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row2}>
        <input
          className={styles.textbox}
          type="number"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
      </div>
    </Box>
  );
}

export default Counter;
