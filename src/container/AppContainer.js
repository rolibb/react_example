import { connect } from 'react-redux'
import {GetDoctorsAction} from '../actions/actions'

import App from '../components/App'


const mapDispatchToProps = (dispatch) => {
    return {
        getDoctors: () => {
            dispatch(GetDoctorsAction())
        }
    }
}

const AppContainer = connect(
    null,
    mapDispatchToProps
)(App)

export default AppContainer
