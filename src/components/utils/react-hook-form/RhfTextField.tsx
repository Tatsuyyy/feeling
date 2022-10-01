import _ from 'lodash';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { TextField } from 'components/atoms';
import { TextFieldProps } from 'components/atoms/TextField';

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps & UseControllerProps<T>;

const RhfTextField = <T extends FieldValues>({
  name,
  control,
  helperText,
  ...props
}: RhfTextFieldProps<T>) => {
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <TextField
      inputRef={ref}
      {...rest}
      {...props}
      error={Boolean(_.get(errors, name))}
      helperText={
        _.get(errors, name)
          ? `${(_.get(errors, name) as DeepMap<FieldValues, FieldError>).message}`
          : helperText
      }
    />
  );
};

export default RhfTextField;
