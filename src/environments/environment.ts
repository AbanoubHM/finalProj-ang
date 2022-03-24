

import {domain as domain , clientId as clientId} from '../auth_config.json'
export const environment = {
  production: false,
  auth:{
    domain,
    clientId,
    redirectUri:window.location.origin
  }
};


