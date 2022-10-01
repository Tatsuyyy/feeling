// eslint-disable-next-line import/named
import { Theme } from '@mui/material';
import * as styles from '@mui/material/styles';

declare module '@mui/material' {
  interface Theme {
    customShadows: {
      z1: string;
      z4: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }
}

declare module '@mui/system' {
  interface Shape {
    borderRadiusSm: number;
    borderRadiusMd: number;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    customGrey: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      500_8: string;
      500_12: string;
      500_16: string;
      500_24: string;
      500_32: string;
      500_48: string;
      500_56: string;
      500_80: string;
    };
    gradients: {
      primary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
    chart: {
      violet: string[];
      blue: string[];
      green: string[];
      yellow: string[];
      red: string[];
    };
    sentiment: {
      positive: string;
      negative: string;
      neutral: string;
    };
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface PaletteOptions {
    customGrey: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      500_8: string;
      500_12: string;
      500_16: string;
      500_24: string;
      500_32: string;
      500_48: string;
      500_56: string;
      500_80: string;
    };
    gradients?: {
      primary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
    chart: {
      violet: string[];
      blue: string[];
      green: string[];
      yellow: string[];
      red: string[];
    };
    sentiment: {
      positive: string;
      negative: string;
      neutral: string;
    };
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}
