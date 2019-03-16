import {connect} from 'react-redux'
import DoctorProfile from '../components/DoctorProfile'
import {AgregarUbicacionAction} from '../actions/actions'

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
        doctor: findDoctor(state.doctors.doctors, ownProps.match.params.doctor_id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleBoton: (data) => {
            const doctor_id = ownProps.match.params.doctor_id
            // console.log(data)
            dispatch(AgregarUbicacionAction(doctor_id, data))
        }
    }
}

const DoctorProfileContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorProfile)

export default DoctorProfileContainer
