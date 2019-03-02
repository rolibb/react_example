const INITIAL_STATE = {
    nombres:'',
    apellidos:'',
    telefono:''
}

const ReducerFomulario= (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_FORMULARIO':
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }
        // case 'REGISTRAR_DOCTOR':
        //     return
        default:
            return state
    }
}

export default ReducerFomulario
