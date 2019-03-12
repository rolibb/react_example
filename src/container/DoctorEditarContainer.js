import {connect} from 'react-redux'
import DoctorEditar from '../components/DoctorEditar'
import {UpdateFormulario, RegistrarDoctor, CleanInputs} from '../actions/actions'
import {registrarDoctor} from '../services/DoctorService'

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

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const DoctorEditarContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorEditar);

export default DoctorEditarContainer
