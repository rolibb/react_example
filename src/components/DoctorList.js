import React, {Component}  from 'react'
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
    render() {

        // let doctors = this.props.doctors
        // let direccion = this.props.direccion

        let { doctors, direccion } = this.props

        return (
            <div className="container">
                <div className="col-12">
                    Cantidad de doctores: {doctors.length} {direccion}
                </div>
                {  doctors.map((doctor, i) => <DoctorItem key={i}  doctor={doctor} />) }
            </div>
        )
    }
}


export default DoctorList
