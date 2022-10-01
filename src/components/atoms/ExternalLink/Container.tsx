import { FC } from 'react';
import { default as Component } from './ExternalLink';

type Props = {
  href: string;
  children: React.ReactElement;
};

const Container: FC<Props> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = 'ExternalLink';

export default Container;
