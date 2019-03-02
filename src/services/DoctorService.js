import axios from 'axios'
const url = "http://localhost:3001/api"

export const registrarDoctor = (data) => {
    return axios.post(url + '/doctors', data)
}

export const getDoctorsApi = () => {
    return axios.get(url + '/doctors')
}
