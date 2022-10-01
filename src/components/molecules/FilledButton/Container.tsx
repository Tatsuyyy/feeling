// eslint-disable-next-line import/named
import { ButtonProps } from '@mui/material';
import { FC } from 'react';
import { default as Component } from './FilledButton';
export type FilledButtonProps = {
  /** #FFFFFF のような# + 16進数6桁のカラーコード */
  colorCode: string;
} & ButtonProps;

const isColorCode = (value: string): boolean => {
  return /^#[0-9A-Fa-f]{6}$/.test(value);
};

/**
 * 指定色で文字の周りを埋めたボタン。色に応じて文字色を黒か白かの見やすい方で表示する。
 * @param colorCode 埋めたい色(#付き6桁のカラーコード指定)
 */
const Container: FC<FilledButtonProps> = ({ colorCode, children, ...props }) => {
  colorCode = isColorCode(colorCode) ? colorCode : '#EEEEEE';
  const r = parseInt(colorCode.substring(1, 3), 16);
  const g = parseInt(colorCode.substring(3, 5), 16);
  const b = parseInt(colorCode.substring(5, 7), 16);
  const isWhite = (r * 299 + g * 587 + b * 114) / 1000 < 128 ? true : false;
  return (
    <Component colorCode={colorCode} isWhiteText={isWhite} {...props}>
      {children}
    </Component>
  );
};

Container.displayName = 'FilledButton';

export default Container;
