import { format, parseISO } from 'date-fns';

/**
 * StringのUTCからStringの日本時間に変換する
 * @param str UTC
 * @param formatTo 変換する形を指定する。デフォルトではyyyy-MM-dd
 *  */
export const convertUtcStr2JstStr = (str: string, formatTo = 'yyyy-MM-dd') => {
  return format(parseISO(str), formatTo);
};
