// eslint-disable-next-line
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';
import { default as Component } from './TextField';

export type TextFieldProps = MuiTextFieldProps;

const Container: FC<TextFieldProps> = ({ ...props }) => {
  return <Component {...props} />;
};

Container.displayName = 'TextField';

export default Container;
