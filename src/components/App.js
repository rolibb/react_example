import React, {Component} from 'react'
import { Route} from 'react-router-dom'
import DoctorFormContainer from '../container/DoctorFormContainer'
import DoctorListContainer from '../container/DoctorListContainer'
import DoctorEditarContainer from '../container/DoctorEditarContainer'
import DoctorProfileContainer from '../container/DoctorProfileContainer'

class App extends Component {
    componentDidMount = () => {
        const {getDoctors} = this.props
        getDoctors()
    }

    render () {
        return <div>
            <Route path="/" exact component={DoctorListContainer} />
            <Route path="/crearDoctor/" component={DoctorFormContainer} />
            <Route path="/editarDoctor/:id" component={DoctorEditarContainer} />
            <Route path="/perfil/:doctor_id" component={DoctorProfileContainer} />
        </div>
    }
}

export default App
