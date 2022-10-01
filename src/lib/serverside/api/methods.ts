const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const;

export type HttpMethod = typeof httpMethods[number];

export const isHttpMethod = (method: string): method is HttpMethod => {
  return httpMethods.some((m) => m === method);
};
