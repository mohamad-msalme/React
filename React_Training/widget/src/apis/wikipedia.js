import axios from "axios";
const SEARCH_URL = '/w/api.php';
const axiosInstance = axios.create({
    baseURL: 'http://en.wikipedia.org'
})

export const search = (query, options = {})  => {
    const params = {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: query,
        ...options
    }
    debugger;
    return axiosInstance.get(SEARCH_URL,{params})
}  