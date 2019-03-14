import {connect} from 'react-redux'
import DoctorList from '../components/DoctorList'
import {CargarDoctores, DeleteDoctor, GetDoctorsAction, DeleteDoctorAction} from '../actions/actions'

const mapStateToProps = (state, ownprops) => {
    const match  = ownprops.match
    const id = match.params.id

    return {
        doctors: state.doctors,
        direccion: 'en cochabamba'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDoctors: () => {
            dispatch(GetDoctorsAction())
        },
        deleteDoctor: (doctor_id) => {
            dispatch(DeleteDoctorAction(doctor_id))
        }
    }
}

const DoctorListContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
