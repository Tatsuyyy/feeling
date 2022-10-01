import { SnackbarProvider } from 'notistack';
import React, { FC } from 'react';
import { SnackMessage } from 'components/utils';

type Props = { children: React.ReactNode };

export const SnackBarProviderConfig: FC<Props> = ({ children }) => (
  <SnackbarProvider
    maxSnack={3}
    preventDuplicate
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    Components={{
      default: SnackMessage,
      info: SnackMessage,
      success: SnackMessage,
      error: SnackMessage,
      warning: SnackMessage,
    }}
  >
    {children}
  </SnackbarProvider>
);
