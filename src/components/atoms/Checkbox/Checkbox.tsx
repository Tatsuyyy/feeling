import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
// eslint-disable-next-line
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { FC } from 'react';

type Props = MuiCheckboxProps & {
  /** チェックボックスの横に表示されるラベル */
  label?: string;
  /** エラー時に表示されるテキスト */
  helperText?: string;
  /** エラーがあるかどうか */
  error?: boolean;
};

/** ボタンコンポーネント */
const Checkbox: FC<Props> = ({ label = 'ラベルだよ', helperText, error, ...props }) => {
  return (
    <FormControl>
      {label ? (
        <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
      ) : (
        <MuiCheckbox {...props} />
      )}
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Checkbox;
