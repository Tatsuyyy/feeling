import { setupServer } from 'msw/node';
import { serverHandlers } from './handlers/server';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...serverHandlers);
