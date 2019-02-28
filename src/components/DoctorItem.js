import React from 'react'

const DoctorItem = ({doctor}) => (
    <div className="col-12">
        <div className="row">
            <div className="col-4">{doctor.nombres}</div>
            <div className="col-4">{doctor.apellidos}</div>
            <div className="col-4">{doctor.telefono}</div>
        </div>
    </div>
)

export default DoctorItem
