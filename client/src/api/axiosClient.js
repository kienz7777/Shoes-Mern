import axios from 'axios';
import queryString from 'query-string';
import cookie from 'js-cookie';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-type":"application/json"
    },
    paramsSerializer: (param) => queryString.stringify(param)// transform object params to string params : ?...&... 
});

axiosClient.interceptors.request.use( async (req,res) => {
    // Handle token here ...
    // const token = await cookie.get('token');
    // config.headers.Authorization = `Bearer ${token}`;
    // return config
})

axiosClient.interceptors.response.use(
    (response) => {

        return response;
    }
    ,
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;