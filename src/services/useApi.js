import axios from "axios";

const useApi = axios.create({
    baseURL: 'http://10.0.2.2:3000'
});

export default useApi;