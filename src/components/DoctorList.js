import React, {Component}  from 'react'
import {Link} from 'react-router-dom'
import DoctorItem from './DoctorItem'

// const DoctorList = ({doctors, direccion}) => (
//     <div className="container">
//         <div className="col-12">
//             Cantidad de doctores: {doctors.length} {direccion}
//         </div>
//         {  doctors.map((doctor, i) => <DoctorItem key={i}  doctor={doctor} />) }
//     </div>
// )

class DoctorList extends Component {

    componentDidMount= () => {
        let {getDoctors} = this.props
        getDoctors()
    }

    render() {

        let { doctors, direccion, deleteDoctor } = this.props

        return (
            <div className="container">
                <div className="col-12">
                    <Link to="/crearDoctor/">Crear Doctor</Link>
                </div>
                <div className="col-12">
                    Cantidad de doctores: {doctors.length} {direccion}
                </div>
                {  doctors.map((doctor, i) => <DoctorItem key={i}  doctor={doctor} deleteDoctor={deleteDoctor} />) }
            </div>
        )
    }
}


export default DoctorList
