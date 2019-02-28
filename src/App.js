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
            data: {
                nombres: '',
                apellidos: '',
                telefono: '',
            }
        }
    }

    componentDidMount = () => {
        getDoctors().then(res => {
            this.setState({doctors: res.data})
        })
    }

    // componentDidMount(){
    //     getDoctors().then(res => {
    //         this.setState({doctors: res.data})
    //     })
    // }

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
            this.setState({data: { nombres:'', apellidos: '', telefono:'' }})
        }).catch(err => {
            //TODO implementar mesanje de error de registro de medico
        })
    }

  render() {
    return (
      <div className="container-fluid">
            <DoctorFormx handleInput={this.handleInput} handleBoton={this.handleBoton} data={this.state.data} />
            <DoctorList doctors={this.state.doctors} direccion={'en cochabamba'} />
      </div>
    );
  }
}

// <DoctorForm handleRegistro={this.handleRegistro} />


export default App;
