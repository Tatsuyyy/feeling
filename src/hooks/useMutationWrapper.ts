// eslint-disable-next-line import/named
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

type Props<T, TVariables> = {
  options?: UseMutationOptions<T, unknown, TVariables>;
  req: (params: TVariables) => Promise<AxiosResponse<T>>;
};

/**
 * useMutationのラッパー
 * https://react-query.tanstack.com/reference/useMutation#_top
 * @param T api responseの型
 * @param TVariables api requestに必要なプロパティの型
 *  @param options useMutaionの第2引数に当たるoption
 * @param req リクエストを送信する非同期関数
 */
const useMutationWrapper = <T, TVariables>({
  options,
  req,
}: Props<T, TVariables>): UseMutationResult<T, unknown, TVariables> => {
  const mutation = useMutation(async (params: TVariables) => {
    try {
      const res = await req(params);
      return res.data;
    } catch (e) {
      throw e;
    }
  }, options);

  return mutation;
};

export default useMutationWrapper;
