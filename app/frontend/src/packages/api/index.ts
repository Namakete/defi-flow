import ApiCore from './core/api-core.ts';
import FetchAdapter from './http/fetch.ts';
import AxiosAdapter from './http/axios.ts';

const fetchApi = new ApiCore('http://localhost:3000', new FetchAdapter());
const axiosApi = new ApiCore('http://localhost:3000', new AxiosAdapter());

export { fetchApi, axiosApi };
