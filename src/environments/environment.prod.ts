// import {audience,appUri} from '../auth_config.json'
import * as config from '../auth_config.json';
const { domain, clientId, audience, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  audience: string;
  apiUri: string;
  errorPath: string;
};
export const environment = {
  production: false,
  jsonServer: 'http://localhost:3000',
  auth: {
    domain: 'dev-vxrkxu-x.us.auth0.com',
    clientId: 'i8fVcQjbbcHMJzi4uelRAgS2k2UFeC9m',
    audience: 'https://localhost:7263/',
    redirectUri: window.location.origin,
    errorPath: '/error',
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
