import {connect} from 'react-redux'
import DoctorFormx from '../components/DoctorFormx'
import {UpdateFormulario, RegistrarDoctor, CleanInputs} from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        formulario: state.formulario
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (ev) => {
            ev.preventDefault()

            let name = ev.target.name
            let value = ev.target.value

            if (name == 'telefono') {
                value = Number.parseInt(value)
            }

            dispatch(UpdateFormulario(name, value))
        },
        handleBoton: (data) => {
            dispatch(RegistrarDoctor(data))
            dispatch(CleanInputs())
        }
    }
}

const DoctorFormContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorFormx);

export default DoctorFormContainer
