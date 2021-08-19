import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  AppContex from "../context/contex"
import { withRouter} from "react-router-dom";
import image from "./images/mantenimiento.jpg";
import "./administrador.css"

class Cordinador extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
           nombre:props.context.data.nombre,
           TipoDeusuario:props.context.data.TipoDeusuario
         };
    }

    logaut = ()=>{
        const data = this.props.context.data
        data.nombre = ""
        this.props.context.setData(data)

        const data1 = this.props.context.data
        data.TipoDeusuario = ""
        this.props.context.setData(data1)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container-corrdinador">
                <div className="content-cor">
                        <h3> {this.state.nombre} </h3>
                        <h3> {this.state.TipoDeusuario} </h3>
                        <h3> En mantenimiento</h3>
                     </div>
                 <button  className="btn-logout" onClick={this.logaut}>Cerrar</button>
           </div>
        );
    }
}
export default  props =>(withRouter, <AppContex.Consumer>
    {state => <Cordinador context={state} {...props} /> }
</AppContex.Consumer>)