// import {audience,appUri} from '../auth_config.json'
import * as config from '../auth_config.json';
const { domain,clientId,audience,appUri,apiUri }=config as {
  domain:string
  clientId:string
  audience:string,
  appUri:string,
  apiUri:string
}
export const environment = {
  production: false,
  jsonServer : "http://localhost:3000",
  auth:{
    domain,
    clientId,
    useRefreshTokens: true,
    redirectUri:window.location.origin,
    audience
  },
  dev:{
    appUri
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },

};

