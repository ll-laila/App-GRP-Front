
import {Environment} from "./ienvironment";

//const host = "https://production-host"
const host = "http://13.60.32.20:8080"

export const environment: Environment = {
  production: true,
  apiHost: host,
  apiUrl: `${host}/api/`,
  login: `${host}/api/login`
}
