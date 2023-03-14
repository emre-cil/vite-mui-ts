/* eslint-disable @typescript-eslint/ban-types */
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  // TODO: move to dev and prod env localhost for dev and prod url for prod
  baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await baseQuery(args, api, extraOptions);
  // === 401 Unauthorized === //
  // TODO: Refresh token

  // wait api.getState().user.refreshPending to be false to avoid multiple refresh token requests but accept the first one
  // while (
  //   api.getState().user.refreshPending === true &&
  //   !extraOptions?.initialRefresh &&
  //   !extraOptions?.noToken &&
  //   api.getState().user.user
  // ) {
  //   // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
  //   await new Promise((resolve) => setTimeout(resolve, 50));
  // }
  // let result = await baseQuery(args, api, extraOptions);
  // // if the response is 401, send refresh token to get new access token
  // if (result?.error?.status === 401 && !extraOptions?.noToken) {
  //   const token = api.getState().user.mobileRefreshToken;
  //   // send refresh token to get new access token
  //   const refreshResult = await baseQuery(
  //     {
  //       url: window?.ReactNativeWebView
  //         ? `/Authentication/refresh-token?OutRefreshToken=${encodeURIComponent(token)}`
  //         : '/Authentication/refresh-token',
  //       method: 'GET',
  //       withCredentials: true,
  //       credentials: 'include',
  //     },
  //     api,
  //     extraOptions,
  //   );
  //   if (refreshResult?.data) {
  //     api.dispatch(setToken(refreshResult?.data?.accessToken));
  //     result = await baseQuery(args, api, extraOptions);
  //   } else {
  //     return { error: { status: 401 } };
  //   }
  // }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
