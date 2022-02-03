import axios from "axios";
const SEARCH_URL = '/w/api.php?action=query&list=search&format=json&origin=*';
const axiosInstance = axios.create({
    baseURL: 'http://en.wikipedia.org'
})

export const search = (query, options = {})  => axiosInstance.get(SEARCH_URL, {params:{srsearch: query, ...options}})  