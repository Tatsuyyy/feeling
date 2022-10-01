import { Theme } from '@mui/material';

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.customGrey[800],
        },
        arrow: {
          color: theme.palette.customGrey[800],
        },
      },
    },
  };
}
