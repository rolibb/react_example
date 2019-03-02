
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
