
import {Environment} from "./ienvironment";

const host = "http://13.60.32.20:8080"

export const environment: Environment = {
  production: false,
  apiHost: host,
  apiUrl: `${host}/api/`,
  login: `${host}/api/login`
}
