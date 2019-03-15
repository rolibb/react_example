import {connect} from 'react-redux'
import DoctorEditar from '../components/DoctorEditar'
import {ActualizarMedico, UpdateDoctorAction} from '../actions/actions'

const findDoctor = (doctors, id) => {
    console.log(id)
    console.log(doctors)

    const doctor = doctors.filter(doctor => doctor.id == id)

    if (doctor.length > 0) {
        console.log(doctor[0])
        return doctor[0]
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        doctor: findDoctor(state.doctors.doctors, ownProps.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInput: (ev) => {
            ev.preventDefault()
            let { name, value } = ev.target

            if (name == 'telefono') {
                value = Number.parseInt(value)
            }
            dispatch(ActualizarMedico(name, value, ownProps.match.params.id))
        },
        handleBoton: (doctor) => {
            dispatch(UpdateDoctorAction(doctor, ownProps.history))
        }
    }
}

const DoctorEditarContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorEditar);

export default DoctorEditarContainer
