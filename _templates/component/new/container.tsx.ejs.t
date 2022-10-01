---
to: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/Container.tsx
---
import { FC } from 'react';
import { default as Component } from './<%= h.changeCase.pascal(name) %>';

type Props = {}

const Container: FC<Props> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = '<%= h.changeCase.pascal(name) %>';

export default Container;