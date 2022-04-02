import * as config from '../auth_config.json';
const { domain,clientId }=config as {
  domain:string
  clientId:string
}
export const environment = {
  production: false,
  jsonServer : "http://localhost:3000",
  auth:{
    domain,
    clientId,
    redirectUri:window.location.origin
  }
};


