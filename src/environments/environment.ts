import * as config from '../auth_config.json';
const { domain,clientId }=config as {
  domain:string
  clientId:string
}
export const environment = {
  production: false,
  auth:{
    domain,
    clientId,
    redirectUri:window.location.origin
  }
};


