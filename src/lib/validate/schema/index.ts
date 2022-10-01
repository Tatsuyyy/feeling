import { z } from 'zod';

export const schemaForType =
  <T>() =>
  <S extends z.ZodType<T, any, any>>(arg: S) => {
    return arg;
  };

/** エラーメッセージ */
export const errorMessages = {
  required: (label: string) => `${label}は必須です。`,
  minLength: (label: string, minValue: number) =>
    `${label}は${minValue}文字以上で入力してください。`,
  maxLength: (label: string, maxValue: number) =>
    `${label}は${maxValue}文字以下で入力してください。`,
  minmaxLength: (label: string, minValue: number, maxValue: number) =>
    `${label}は${minValue}文字以上${maxValue}文字以下で入力してください。`,
};
