import '../styles/globals.css';
// eslint-disable-next-line
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { SnackBarProviderConfig } from 'lib/snackbar/wrapper';
import createEmotionCache from 'styles/createEmotionCache';
import ThemeConfig from 'styles/theme';
import { NextPageWithLayout } from 'types';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  /** react-queryの設定 */
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          staleTime: 600000, // 10分
        },
        mutations: {
          retry: false,
        },
      },
    }),
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeConfig>
        <QueryClientProvider client={queryClient.current}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydratedState}>
            <SnackBarProviderConfig>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </SnackBarProviderConfig>
          </Hydrate>
        </QueryClientProvider>
      </ThemeConfig>
    </CacheProvider>
  );
}
