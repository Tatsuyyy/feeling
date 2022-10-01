import { Theme } from '@mui/material/styles';
import { merge } from 'lodash';
import Autocomplete from './Autocomplete';
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';
import IconButton from './IconButton';
import Input from './Input';
import Lists from './Lists';
import Paper from './Paper';
import Tooltip from './Tooltip';
import Typography from './Typography';
import { addTheme } from './additional';

const ContainerOverrides = {
  MuiContainer: {
    styleOverrides: {
      maxWidthLg: {
        maxWidth: '1680px !important',
      },
      maxWidthXl: {
        maxWidth: '1920px !important',
      },
    },
  },
};

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    ContainerOverrides,
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    addTheme(theme),
  );
}
