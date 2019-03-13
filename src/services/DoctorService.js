import axios from 'axios'
const url = "http://localhost:3001/api"

export const registrarDoctor = (data) => {
    return axios.post(url + '/doctors', data)
}

export const getDoctorsApi = () => {
    return axios.get(url + '/doctors')
}

export const deleteDoctor = (id) => {
    return axios.delete(url+ '/doctors/'+ id)
}


export const UpdateDoctor = (doctor) => {
    return axios.put(url + '/doctors/' + doctor.id, doctor)
}
