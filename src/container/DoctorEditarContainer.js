import {connect} from 'react-redux'
import DoctorEditar from '../components/DoctorEditar'
import {ActualizarMedico} from '../actions/actions'
import {UpdateDoctor} from '../services/DoctorService'

// const getDoctor= (doctors, props) => {
//     console.log(props.match.params.id)
//     return doctors
// }

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
        doctor: findDoctor(state.doctors, ownProps.match.params.id)
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
            // console.log(name)
            // console.log(value)
            dispatch(ActualizarMedico(name, value, ownProps.match.params.id))
        },
        handleBoton: (doctor) => {
            UpdateDoctor(doctor).then(res => {
                // console.log(res)
                ownProps.history.push('/')
            }).catch(err => {
                console.log(err)
            })
        }
    }
}

const DoctorEditarContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorEditar);

export default DoctorEditarContainer
