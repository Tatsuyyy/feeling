import { rest } from 'msw';
import color from 'mocks/api.my.backend-sample/color';

// methodとresolverの紐づけ
export const serverHandlers = [rest.get('https://my.backend-sample/color', color.get)];
