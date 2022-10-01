import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Queries from '@testing-library/dom/types/queries';
// eslint-disable-next-line import/named
import { render as defaultRender, RenderResult } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import { SnackBarProviderConfig } from 'lib/snackbar/wrapper';

export function render(children: React.ReactElement): RenderResult<typeof Queries, HTMLElement> {
  // useRouterをモックする
  const mockRouter: NextRouter = {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    basePath: '/',
    isLocaleDomain: true,
    isReady: true,
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isPreview: false,
  };

  // react-query用
  const queryClient = new QueryClient();

  return defaultRender(
    <RouterContext.Provider value={mockRouter}>
      <QueryClientProvider client={queryClient}>
        <SnackBarProviderConfig>{children}</SnackBarProviderConfig>
      </QueryClientProvider>
    </RouterContext.Provider>,
  );
}
