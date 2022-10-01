// eslint-disable-next-line import/named
import { useQuery, UseQueryResult, QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

type Props<T> = {
  queryKey?: string;
  deps?: QueryKey;
  options?: UseQueryOptions;
  req: () => Promise<AxiosResponse<T>>;
};

export type TUseQueryOptions<T> = Partial<{
  params: T;
  options: UseQueryOptions;
}>;

/**
 * useQueryのラッパー
 * https://react-query.tanstack.com/reference/useQuery#_top
 * https://zenn.dev/brachio_takumi/articles/20210226-react-query
 * @param T api responseの型
 * @param queryKey キャッシュを特定するためのキーの一部（第1引数）
 * @param deps キャッシュを特定するためのキーの一部（第1引数）
 * @param options useQueryの第3引数に当たるoption
 * @param req リクエストに使用する非同期関数
 *
 */
const useQueryWrapper = <T>({ queryKey, deps = [], options, req }: Props<T>): UseQueryResult<T> => {
  const k = Array.isArray(deps) ? [queryKey, ...deps] : ([queryKey] as QueryKey);
  const result = useQuery(
    k,
    async () => {
      try {
        const res = await req();

        return res.data;
      } catch (e) {
        // ここでトースト出したり
        console.log('wrapper', e);
        throw e;
      }
    },
    options,
  ) as UseQueryResult<T>;

  return result;
};

export default useQueryWrapper;
