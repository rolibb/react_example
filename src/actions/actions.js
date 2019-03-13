import {registrarDoctor, getDoctorsApi, deleteDoctor, UpdateDoctor} from '../services/DoctorService'

export const UpdateFormulario = (name, value) => {
    return {
        type: 'UPDATE_FORMULARIO',
        payload: {
            name,
            value
        }
    }
}

export const RegistrarDoctor = (data) => {
    return {
        type: 'REGISTRAR_DOCTOR',
        payload: {
            ...data
        }
    }
}

export const CargarDoctores = (doctores) => {
    return {
        type: 'CARGAR_DOCTORES',
        payload: doctores
    }
}

export const CleanInputs = () => {
    return {
        type: 'CLEAN_INPUTS'
    }
}

export const DeleteDoctor = (doctor_id) => {
    return {
        type: 'DELETE_DOCTOR',
        payload: { id:doctor_id }
    }
}

export const ActualizarMedico = (name, value, doctor_id) => {
    return {
        type: 'ACTUALIZAR_MEDICO',
        payload: {name, value, doctor_id}
    }
}

export const registrarDoctorAction = (data) => {
    return dispatch => {
        registrarDoctor(data).then(res => {
            dispatch(RegistrarDoctor(res.data))
            dispatch(CleanInputs())

        }).catch(err => {
            console.log(err)
        })
    }
}

export const GetDoctorsAction = () => {
    return dispatch => {
        getDoctorsApi().then(res => {
            dispatch(CargarDoctores(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const DeleteDoctorAction = (doctor_id) => {
    return dispatch => {
        deleteDoctor(doctor_id).then(res => {
            dispatch(DeleteDoctor(doctor_id))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const UpdateDoctorAction = (doctor, history) => {
    return dispatch => {
        UpdateDoctor(doctor).then(res => {
            // console.log(res)
            history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }
}
