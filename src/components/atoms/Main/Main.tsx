import { FC } from 'react';

type Props = { children: React.ReactNode };

/**
 * role=main を付与するためのコンポーネント。Template内で必ず1つ使用。
 */
const Main: FC<Props> = ({ children, ...props }) => <main {...props}>{children}</main>;

export default Main;
