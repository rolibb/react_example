// const INITIAL_STATE = []
const INITIAL_STATE = {
    loading_doctors: true,
    doctors: []
}

const ReducerDoctors = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTRAR_DOCTOR':
            // return [...state,{
            //     ...action.payload
            // }]
            return {
                ...state,
                doctors: [...state.doctors, {...action.payload}]
            }

        case 'CARGAR_DOCTORES':
            return {
                loading_doctors: false,
                doctors: [...action.payload]
            }

        case 'DELETE_DOCTOR':
            // return state.filter(doctor => doctor.id != action.payload.id)
            return {
                ...state,
                doctors: state.doctors.filter(doctor => doctor.id != action.payload.id)
            }
        case 'ACTUALIZAR_MEDICO':
            // return state.map(doctor => {
            //     if (doctor.id != action.payload.doctor_id) {
            //         return doctor
            //     }
            //
            //     return {
            //         ...doctor,
            //         [action.payload.name]: action.payload.value
            //     }
            // })
            return {
                ...state,
                doctors: state.doctors.map(doctor => {
                    if (doctor.id != action.payload.doctor_id) {
                        return doctor
                    }

                    return {
                        ...doctor,
                        [action.payload.name]: action.payload.value
                    }
                })
            }

        default:
            return state
    }
}

export default ReducerDoctors
