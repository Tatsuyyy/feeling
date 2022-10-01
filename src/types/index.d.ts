import type { NextPage } from 'next';

/** ページごとにレイアウトを設定するためのプロパティを定義 */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
