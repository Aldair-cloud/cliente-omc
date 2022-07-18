import Axios from 'axios'

export const api = Axios.create({
  baseURL: "http://52.22.176.81/api",
});