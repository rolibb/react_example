import React from 'react'
import './DoctorForm.css'
const DoctorFormx = ({handleInput, handleBoton}) => {

    return  (
           <div className="row">
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">Nombres:</div>
                       <input className="offset-1 col-10" type="text" placeholder="Nombres" name="nombres" onChange={handleInput}  />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                       Apellidos:
                       </div>
                       <input className="offset-1 col-10 "  type="text" placeholder="Apellidos" name="apellidos" onChange={handleInput} />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                           Telefono:
                       </div>
                       <input className="offset-1 col-10 " type="number" name="telefono" placeholder="Telefono" onChange={handleInput}/>
                   </div>
               </div>
               <div className="col-12 ">
                   <div className="row">
                       <button type="button" onClick={handleBoton} className="col-4 btn btn-primary boton_registrar">
                       Registrar Medico
                       </button>
                   </div>
               </div>
           </div>
   )
}

export default DoctorFormx
