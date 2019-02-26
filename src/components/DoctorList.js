import React  from 'react'
import DoctorItem from './DoctorItem'

const DoctorList = ({doctors, direccion}) => (
// const DoctorList = ({...data}) => (
    <div className="container">
        <div className="col-12">
            Cantidad de doctores: {doctors.length} {direccion}
        </div>
        {  doctors.map((doctor, i) => <DoctorItem key={i}  doctor={doctor} />) }
    </div>
)

// const DoctorList = ({doctors}) => {
//     let count = doctors.length
//     return (
//         <div className="container">
//             <div className="col-12">
//                 Cantidad de doctores: {count}
//             </div>
//             {  doctors.map((doctor, i) => <div key={i} className="col-12">{doctor.nombre}</div> ) }
//         </div>
//     )
// }

export default DoctorList
