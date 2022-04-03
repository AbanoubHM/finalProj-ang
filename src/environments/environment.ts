// import {audience,appUri} from '../auth_config.json'
import * as config from '../auth_config.json';
const { domain,clientId,audience,appUri }=config as {
  domain:string
  clientId:string
  audience:string,
  appUri:string
}
export const environment = {
  production: false,
  jsonServer : "http://localhost:3000",
  auth:{
    domain,
    clientId,
    redirectUri:window.location.origin,
    audience
  },
  dev:{
    appUri
  }
};

