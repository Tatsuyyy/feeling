import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { addDecorator } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import ThemeConfig from 'styles/theme';
import { SnackBarProviderConfig } from 'lib/snackbar/wrapper';

// デコレータ追加
addDecorator(mswDecorator);

export const parameters = {
  // useRouterでエラーが出ないように
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

initialize();
const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <SnackBarProviderConfig>
          <Story />
        </SnackBarProviderConfig>
      </QueryClientProvider>
    </ThemeConfig>
  ),
];
// export const decorators = [mswDecorator];
