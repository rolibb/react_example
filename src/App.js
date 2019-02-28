import React, { Component } from 'react';
import './App.css';
import DoctorList from './components/DoctorList'
// import DoctorForm from './components/DoctorForm'
import DoctorFormx from './components/DoctorFormx'
import {registrarDoctor, getDoctors} from './services/DoctorService'

class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            doctors: [],
            nombres: null,
            apellidos: null,
            telefono: null,
            data: {}
        }
    }

    componentDidMount = () => {
        getDoctors().then(res => {
            this.setState({doctors: res.data})
        })
    }

    handleInput = (ev) => {
        ev.preventDefault()

        let name = ev.target.name
        let value = ev.target.value

        let data = this.state.data
        data[name]=  value
        this.setState({data})
    }

    handleBoton = (ev) => {
        ev.preventDefault()
        registrarDoctor(this.state.data).then(res => {
            let aux_doctors = this.state.doctors
            aux_doctors.push(res.data)
            this.setState({doctors: aux_doctors})
        })
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
