import { FC } from 'react';
import { default as Component } from './Main';

type Props = { children: React.ReactNode };

const Container: FC<Props> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = 'Main';

export default Container;
