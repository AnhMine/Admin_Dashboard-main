import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_Color,

    timeout: 30000
});
instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {

    }
);

export default instance;