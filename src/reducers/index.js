import { combineReducers } from 'redux'
import ReducerDoctors from './ReducerDoctors'
import ReducerFomulario from './ReducerFormulario'

const Doctor = combineReducers({
formulario: ReducerFomulario,
doctors: ReducerDoctors
});

export default Doctor
