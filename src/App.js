import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList'
// import DoctorForm from './components/DoctorForm'
import DoctorFormx from './components/DoctorFormx'
import {registrarDoctor} from './services/DoctorService'

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
            ],
            nombres: null,
            apellidos: null,
            telefono: null,
            data: {}
        }
    }




    // handleRegistro = (nombres, apellidos, telefono) => {
    //     console.log(nombres)
    //     console.log(apellidos)
    //     console.log(telefono)
    //     //TODO: enviar al rest api los datos POST
    // }

    handleInput = (ev) => {
        ev.preventDefault()
        // console.log(ev.target.value)
        // console.log(ev.target.name)
        let name = ev.target.name
        let value = ev.target.value
        // this.setState({[name]: value})

        // let data = {}
        let data = this.state.data
        data[name]=  value
        this.setState({data})
        // console.log(this.state.data)

        // if (name == 'nombres') {
        //     this.setState({nombres: value})
        // } else if (name == "apellidos") {
        //     this.setState({apellidos: value})
        // }  else if (name == "telefono") {
        //     this.setState({telefono: value})
        // }
    }

    handleBoton = (ev) => {
        ev.preventDefault()
        registrarDoctor(this.state.data)
    }

  render() {
    return (
      <div className="container-fluid">
            <DoctorFormx handleInput={this.handleInput} handleBoton={this.handleBoton} />
            <DoctorList doctors={this.state.doctors} direccion={'en cochabamba'} />
      </div>
    );
  }
}

// <DoctorForm handleRegistro={this.handleRegistro} />


export default App;
