import {connect} from 'react-redux'
import DoctorList from '../components/DoctorList'
import { getDoctorsApi } from '../services/DoctorService'
import {CargarDoctores} from '../actions/actions'

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
        }
    }
}

const DoctorListContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
