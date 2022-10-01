// eslint-disable-next-line
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { FC } from 'react';
import { default as Component } from './Checkbox';

type Props = MuiCheckboxProps & {
  label?: string;
  helperText?: string;
  error?: boolean;
};

const Container: FC<Props> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = 'Checkbox';

export default Container;
