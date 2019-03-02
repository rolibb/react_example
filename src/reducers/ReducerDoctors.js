const INITIAL_STATE = []

const ReducerDoctors = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTRAR_DOCTOR':
            return [...state,{
                ...action.payload
            }]
        case 'CARGAR_DOCTORES':
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

export default ReducerDoctors
