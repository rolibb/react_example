import React from 'react'

const DoctorItem = ({doctor}) => (
    <div className="col-12">
        <div className="row">
            <div className="col-6">{doctor.nombre}</div>
            <div className="col-6">{doctor.telefono}</div>
        </div>
    </div>
)

export default DoctorItem
