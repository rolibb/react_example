import {connect} from 'react-redux'
import DoctorList from '../components/DoctorList'
import { getDoctorsApi, deleteDoctor } from '../services/DoctorService'
import {CargarDoctores, DeleteDoctor} from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        doctors: state.doctors,
        direccion: 'en cochabamba'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDoctors: () => {
            getDoctorsApi().then(res => {
                dispatch(CargarDoctores(res.data))
            }).catch(err => {
                console.log(err)
            })
        },
        deleteDoctor: (doctor_id) => {
            deleteDoctor(doctor_id).then(res => {
                dispatch(DeleteDoctor(doctor_id))
            }).catch(err => {
                console.log(err)
            })
            //TODO eliminar doctor en el api
            // console.log(' todo implement delete doctor', doctor_id)
        }
    }
}

const DoctorListContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
