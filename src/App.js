import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList'
import DoctorForm from './components/DoctorForm'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            doctors: [
                {nombre: "Luis Arce 1", telefono: 734343436},
                {nombre: "Luis Arce 2", telefono: 734343433},
                {nombre: "Luis Arce 3", telefono: 734343436},
                {nombre: "Luis Arce 4", telefono: 734343436},
                {nombre: "Luis Arce 5", telefono: 734343436},
                {nombre: "Luis Arce 6", telefono: 734343436},
                {nombre: "Luis Arce 7", telefono: 734343436},
                {nombre: "Luis Arce 8", telefono: 734343436},
                {nombre: "Luis Arce 9", telefono: 734343436},
                {nombre: "Luis Arce 10", telefono: 734343436},
                {nombre: "Luis Arce 11", telefono: 734343436},
                {nombre: "Luis Arce 12", telefono: 734343436},
                {nombre: "Luis Arce 13", telefono: 734343436},

            ]
        }
    }

    handleRegistro = (nombres, apellidos, telefono) => {
        console.log(nombres)
        console.log(apellidos)
        console.log(telefono)
        //TODO: enviar al rest api los datos POST
    }


  render() {
    return (
      <div className="container-fluid">
            <DoctorForm handleRegistro={this.handleRegistro} />
            <DoctorList doctors={this.state.doctors}  direccion={'en cochabamba'} />
      </div>
    );
  }
}

export default App;
