// eslint-disable-next-line
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';

type Props = MuiTextFieldProps;

const TextField: FC<Props> = ({ ...props }) => <MuiTextField {...props} />;

export default TextField;
