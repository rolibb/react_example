const INITIAL_STATE = []

const ReducerDoctors = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTRAR_DOCTOR':
            return [...state,{
                ...action.payload
            }]
        case 'CARGAR_DOCTORES':
            return [
                ...action.payload
            ]
        case 'DELETE_DOCTOR':
            // let doctores = state
            return state.filter(doctor => doctor.id != action.payload.id)
            // return doctores.filter(doctor => {
            //     if (doctor.id != action.payload.id) {
            //         return doctor
            //     }
            // })
        case 'ACTUALIZAR_MEDICO':
            //TODO actualizar medico
        default:
            return state
    }
}

export default ReducerDoctors
