import React from 'react'

const DoctorEditar= ({doctor, handleInput}) =>  {
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
                <button type="button" className="col-4 btn btn-primary">
                    Actualizar Medico
                </button>
                <button type="button" className="col-4 btn btn-primary">
                    Cancelar
                </button>
                </div>
            </div>
        </div>
    )
}

export default DoctorEditar
