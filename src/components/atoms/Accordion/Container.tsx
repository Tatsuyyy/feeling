import { FC } from 'react';

import { default as Component } from './Accordion';

type Props = { summary: string; children: React.ReactNode };

const Container: FC<Props> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = 'Accordion';

export default Container;
