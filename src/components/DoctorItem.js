import React from 'react'
import {Link} from 'react-router-dom'
import './DoctorItem.css'

const DoctorItem = ({doctor, deleteDoctor}) => (
    <div className="col-12">
        <div className="row">
            <div className="col">
            <Link to={'/perfil/'+ doctor.id}> {doctor.nombres}</Link>
            </div>
            <div className="col">
             <Link to={'/perfil/'+ doctor.id}> {doctor.apellidos} </Link>
            </div>
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
            <Link className="col" to={'/editarDoctor/'+doctor.id} > Editar Doctor </Link>
        </div>
    </div>
)

export default DoctorItem
