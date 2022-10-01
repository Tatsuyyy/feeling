// eslint-disable-next-line import/named
import { Theme } from '@mui/material';

export const addTheme = (theme: Theme) => {
  return {
    // 追加で当てたいスタイルを記述する例
    // MUIはMui〇〇と記述する。
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#009be5',
    //     },
    //   },
    // },
  };
};
