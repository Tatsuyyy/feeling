---
to: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import { FC } from 'react';

type Props = {};

const <%= h.changeCase.pascal(name) %>: FC<Props> = ({ ...props }) => (
  <></>
)

export default <%= h.changeCase.pascal(name) %>