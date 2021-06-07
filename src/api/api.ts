import config from '../config';

const Api = {
getMethod(endpoint: string) {
return fetch(config.baseUrl + endpoint).then((res: any) => res.json())
}};
export default Api;