import { ZodType } from 'zod';
import { RequestQueryError } from 'lib/serverside/api/errorHandler';

const validateQuery = <T extends ZodType>(querySchema: T, query: Record<string, unknown>) => {
  /** []で終わるKeyを修正
   * ex) sentiment[] -> sentiment
   */
  const keys = Object.keys(query);
  keys.map((key) => {
    if (key.endsWith('[]')) {
      const newKey = key.slice(0, -2);
      console.log(key);
      query[newKey] = query[key];
      delete query[key];
    }
  });

  const result = querySchema.safeParse(query);
  if (!result.success) {
    const {
      error: { stack },
    } = result;
    // console.log(result);
    throw new RequestQueryError();
  }
  return result.data;
};

export default validateQuery;
