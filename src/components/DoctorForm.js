import React from 'react'
import './DoctorForm.css'
const DoctorForm = ({handleRegistro}) => {

    let nombres
    let apellidos
    let telefono
    let form
    return  (
           <form ref = {(el) => { form = el }} className="row" onSubmit={(event) => {
               event.preventDefault()
               console.log('ejecucion del boton')
               handleRegistro(nombres.value,
                   apellidos.value,
                   telefono.value)

           }} >
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">Nombres:</div>
                       <input className="offset-1 col-10"
                             ref={(node) => nombres = node}
                             type="text" placeholder="Nombres" />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                       Apellidos:
                       </div>
                       <input className="offset-1 col-10 "
                           ref={(node) => apellidos = node}
                           type="text"
                           placeholder="Apellidos" />
                   </div>
               </div>
               <div className="col-4">
                   <div className="row">
                       <div className="col-12">
                           Telefono:
                       </div>

                       <input className="offset-1 col-10 "
                       ref={(node) => telefono = node}
                       type="number"
                       placeholder="Telefono"/>

                   </div>
               </div>
               <div className="col-12 ">
                   <div className="row">
                       <button type="submit"
                       className="col-4 btn btn-primary boton_registrar">
                       Registrar Medico
                       </button>
                   </div>
               </div>
           </form>
   )
}
export default DoctorForm
