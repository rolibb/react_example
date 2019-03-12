import {connect} from 'react-redux'
import DoctorFormx from '../components/DoctorFormx'
import {UpdateFormulario, RegistrarDoctor, CleanInputs} from '../actions/actions'
import {registrarDoctor} from '../services/DoctorService'
import {Redirect} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        formulario: state.formulario
    }
}

const mapDispatchToProps = (dispatch,  ownProps) => {
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
            registrarDoctor(data).then(res => {
                dispatch(RegistrarDoctor(res.data))
            }).catch(err => {
                console.log(err)
            })

            dispatch(CleanInputs())
            ownProps.history.push('/')
        }
    }
}

const DoctorFormContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorFormx);

export default DoctorFormContainer
