import { FC } from 'react';
import { default as Component } from './SamplePage';
import { SampleColorTypes } from 'types/sample';

type Props = {
  data: SampleColorTypes[];
};

const Container: FC<Props> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = 'SamplePage';

export default Container;
