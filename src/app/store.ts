import userReducer from '../features/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
    user: userReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
