import { Box } from '@mui/material';
import Head from 'next/head';

export type LayoutBaseProps = {
  children: React.ReactNode;
  title?: string;
};

const SERVICE_NAME = 'EXAMPLE' as const;

/** レイアウトコンポーネントにて継承する */
export const LayoutBase: React.FC<LayoutBaseProps> = ({ children, title: pageTitle }) => {
  const title = `${pageTitle ? `${pageTitle} -` : ''} ${SERVICE_NAME} `;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>{children}</Box>
    </>
  );
};
