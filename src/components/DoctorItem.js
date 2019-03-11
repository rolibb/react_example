import React from 'react'
import './DoctorItem.css'

const DoctorItem = ({doctor, deleteDoctor}) => (
    <div className="col-12">
        <div className="row">
            <div className="col">{doctor.nombres}</div>
            <div className="col">{doctor.apellidos}</div>
            <div className="col">{doctor.telefono}</div>
            <button type="button"
            className="btn btn-danger col boton_eliminar"
                onClick={ (ev) =>{
                    ev.preventDefault()
                    deleteDoctor(doctor.id)
                }}
            >
                Eliminar
            </button>
        </div>
    </div>
)

export default DoctorItem
