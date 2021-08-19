import React, { Component } from "react";
import {  Form,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import  AppContex from "./context/contex"
import "./login.css"

class IniciarSesion extends Component {
    constructor(props) {
        console.log(props)
        super(props);
    this.state = {
           user1: props.context.data.usuarioAministrador,
           user2: props.context.data.usuarioCoordinador,
         };
    }

    sendMessage(e) {
        e.preventDefault();
        const params = {
            user: this.inputName.value,
            putPassword: this.inputPassword.value,
        };
        if (params.user  === this.state.user1 && params.putPassword) {
            const data = this.props.context.data
            data.nombre = "carlos baute"
            this.props.context.setData(data)

            const data1 = this.props.context.data
            data.TipoDeusuario = "Administrador"
            this.props.context.setData(data1)
            this.props.history.push("/administarcion")

        } else if(params.user  === this.state.user2 && params.putPassword){
            const data = this.props.context.data
            data.nombre = "luis cuello"
            this.props.context.setData(data)
            
            const data1 = this.props.context.data
            data.TipoDeusuario = "coordinador"
            this.props.context.setData(data1)
            this.props.history.push("/coordinador")
        }else{
            alert("diligencia el formulario")
        }
    }

    render() {
        return (
            <div className="container-login">
                <div className="content">
                  <h4 >Iniciar sesión</h4>
                    <Form onSubmit={(e) => this.sendMessage(e)} ref="contacForm" >
                        <Form.Group className="mb-3" >
                            <label >Usuario</label>
                            <Form.Control type="text" id="user" ref={user => this.inputName = user} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <label >Contraseña</label>
                            <Form.Control type="password" id="putPassword" ref={putPassword => this.inputPassword = putPassword} />
                        </Form.Group>
                        <div className="contentButton">
                            <button className="btn btn-warning" type="submit" id="buttonSesion">
                                Ingresar
                         </button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
export default  props => <AppContex.Consumer>
    {state => <IniciarSesion context={state} {...props} /> }
</AppContex.Consumer>