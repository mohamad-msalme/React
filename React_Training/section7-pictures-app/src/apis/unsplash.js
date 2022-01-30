import axios from "axios";

const baseURL = 'https://api.unsplash.com';
const Authorization = 'Client-ID XaL-SZA6AgwPB6TB_qwnOih6W4W3CwaJCcLSiD-CnQ4';
  
const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization,
    }
})
export const loadImages = async (query, defaultParams = {}) => axiosInstance.get('/search/photos', {params:{query, ...defaultParams}})