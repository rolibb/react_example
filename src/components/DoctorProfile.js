import React, {Component} from 'react'

class DoctorProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direccion: '',
            horarios:''
        }
    }

    handleInput = (ev) => {
        ev.preventDefault()
        //TODO
    }

    render () {
        let  {doctor} = this.props
        return (
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <h1 className="col-12">
                        Perfil del doctor
                        </h1>
                        <div className="col-12">
                        Nombres: {doctor.nombres}
                        </div>
                        <div className="col-12">
                        Apellidos: {doctor.apellidos}
                        </div>
                        <div className="col-12">
                        Telefono: {doctor.telefono}
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                    <div className="col-12">Direccion:</div>
                    <input className="col-12" type="text" value={this.state.direccion} onChange={this.handleInput()} />
                    <div className="col-12">Horarios</div>
                    <input className="col-12" type="text" value={this.state.horarios} onChange={this.handleInput()} />

                    </div>

                </div>
            </div>
        )
    }
}
// const DoctorProfile = ({doctor}) =>


export default DoctorProfile
