const INITIAL_STATE = {
    nombres:'',
    apellidos:'',
    telefono:'',
    error: ''
}

const ReducerFomulario= (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_FORMULARIO':
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }
        case 'CLEAN_INPUTS':
            return {
                ...INITIAL_STATE
            }
        case 'SHOW_ERROR':
            return {
                ...state,
                error: action.payload.message
            }
        default:
            return state
    }
}

export default ReducerFomulario
