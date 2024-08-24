
import {Environment} from "./ienvironment";

const host = "http://13.60.227.54:8080"

export const environment: Environment = {
  production: false,
  apiHost: host,
  apiUrl: `${host}/api/`,
  login: `${host}/api/login`
}
