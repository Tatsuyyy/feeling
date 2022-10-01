/** Switch文を書く場合は使用 */
export const assertUnreachable = (x: never): never => {
  throw new Error(`switch文で網羅されていない分岐があります。 ${x}`);
};
