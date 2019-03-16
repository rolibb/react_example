import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class DoctorProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direccion: '',
            horarios:'',
            center: {
              lat: -17.3938831,
              lng: -66.2339158
            },
            zoom: 11,
            ubicacion: {
            lat: 0,
            lng: 0
          },
        }
    }

    handleInput = (ev) => {
        ev.preventDefault()
        let {name, value} = ev.target
        this.setState({[name]: value})
    }

    _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

    render () {
        let  {doctor, handleBoton} = this.props

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
                    <input className="col-12" type="text" name="direccion" value={this.state.direccion} onChange={this.handleInput} />
                    <div className="col-12">Horarios</div>
                    <input className="col-12" type="text" name="horarios" value={this.state.horarios} onChange={this.handleInput} />

                    <div className="col-12">
                        <button onClick={(ev) => {
                            ev.preventDefault()
                            handleBoton({...this.state})

                        }} className="btn btn-primary">Agregar ubicacion consultorio</button>
                    </div>

                    <div className="col-12">
                     <div style={{ height: '100vh', width: '100%' }}>
                     <GoogleMapReact
                      bootstrapURLKeys={{ key: '' }}
                      defaultCenter={this.state.center}
                      defaultZoom={this.state.zoom}
                       onClick={this._onClick}
                     >
                     </GoogleMapReact>
                     </div>
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default DoctorProfile
