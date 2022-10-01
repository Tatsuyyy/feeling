import { rest } from 'msw';
import sample from 'mocks/api/sample';

// methodとresolverの紐づけ
export const clientHandlers = [rest.get('http://localhost:3000/api/sample', sample.get)];
