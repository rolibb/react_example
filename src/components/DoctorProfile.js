import React from 'react'

const DoctorProfile = ({doctor}) => (
    <div className="row">
        <div className="col-4">
            <div className="row">
                <h1 className="col-12">
                Perfil del doctor
                </h1>
                <div className="col-12">Nombres: {doctor.nombres}</div>
                <div className="col-12">Apellidos: {doctor.apellidos}</div>
                <div className="col-12">Telefono: {doctor.telefono}</div>
            </div>
        </div>
        <div className="col-8">Formulario para agregar ubicaciones de consultorio</div>
    </div>
)

export default DoctorProfile
