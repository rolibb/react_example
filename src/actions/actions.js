
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
