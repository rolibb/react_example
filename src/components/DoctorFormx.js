import React from 'react'
import {Link} from 'react-router-dom'
import './DoctorForm.css'
const DoctorFormx = ({handleInput, handleBoton, formulario, match}) => {
        let show_error = null

        if (formulario.error.length > 0) {
            show_error = <div className="col-12"> {formulario.error} </div>
        }

    return  (
           <div className="row">
                {show_error}
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">Nombres:</div>
                       <input className="offset-1 col-10" type="text" placeholder="Nombres" name="nombres" onChange={handleInput} value={formulario.nombres}  />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                       Apellidos:
                       </div>
                       <input className="offset-1 col-10 "  type="text" placeholder="Apellidos" name="apellidos" onChange={handleInput} value={formulario.apellidos} />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                           Telefono:
                       </div>
                       <input className="offset-1 col-10 " type="number" name="telefono" placeholder="Telefono" onChange={handleInput} value={formulario.telefono}/>
                   </div>
               </div>
               <div className="col-12 ">
                   <div className="row">
                       <button type="button" onClick={(ev) => {
                           ev.preventDefault()
                           handleBoton(formulario)

                       }} className="col-4 btn btn-primary boton_registrar">
                       Registrar Medico
                       </button>

                       <Link className="col-4 " to="/">
                       <button className="btn btn-warning">
                        Cancelar
                        </button>
                       </Link>
                   </div>
               </div>
           </div>
   )
}

export default DoctorFormx
