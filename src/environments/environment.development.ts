
import {Environment} from "./ienvironment";

const host = "http://51.20.6.105:8080"

export const environment: Environment = {
  production: false,
  apiHost: host,
  apiUrl: `${host}/api/`,
  login: `${host}/api/login`
}
