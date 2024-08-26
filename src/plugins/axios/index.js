import axios from 'axios';

import success from './response_success.js'
import error from './response_error.js'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Accept': 'application/json',
    },
});

instance.interceptors.response.use(success, error)

export default instance
