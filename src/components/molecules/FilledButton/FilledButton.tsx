// eslint-disable-next-line import/named
import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

type Props = { colorCode: string; isWhiteText: boolean } & ButtonProps;

const FilledButton: FC<Props> = ({ colorCode, isWhiteText, children, ...props }) => (
  <>
    {isWhiteText ? (
      <Button sx={{ backgroundColor: colorCode, color: '#FFFFFF' }} {...props}>
        {children}
      </Button>
    ) : (
      <Button sx={{ backgroundColor: colorCode, color: '#000000' }} {...props}>
        {children}
      </Button>
    )}
  </>
);

export default FilledButton;
