import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://ninette.herokuapp.com/"
})