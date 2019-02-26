import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList'

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

  render() {
    return (
      <div className="container-fluid">
            <DoctorList doctors={this.state.doctors}  direccion={'en cochabamba'} />
      </div>
    );
  }
}

export default App;
