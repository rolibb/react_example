import React from 'react'
import {Link} from 'react-router-dom'

const DoctorEditar= ({doctor, handleInput, handleBoton}) =>  {
    console.log(doctor)

    return (
        <div className="row">
            <div className="col-4">
                <div className="row">
                    <div className="col-12">Nombres</div>
                    <input className="offset-1 col-10" type="text" value={doctor.nombres} name="nombres" onChange={handleInput} />
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">Apellidos </div>
                    <input className="offset-1 col-10" type="text"  value={doctor.apellidos} name="apellidos" onChange={handleInput} />
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">Telefono</div>
                    <input className="offset-1 col-10" type="number" value={doctor.telefono} name="telefono" onChange={handleInput} />
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                <button type="button" className="col-4 btn btn-primary" onClick={(ev) => {
                    ev.preventDefault()
                    handleBoton(doctor)
                }}>
                    Actualizar Medico
                </button>
                <Link className="col-4 btn btn-warning" to="/">
                 Cancelar
                </Link>
                </div>
            </div>
        </div>
    )
}

export default DoctorEditar
