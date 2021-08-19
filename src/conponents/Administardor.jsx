import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContex from "../context/contex"
import TableDeporte from "./Table"
import Categoria from "./Categorias"
import { withRouter } from "react-router-dom";
import "./administrador.css"

class Administarcion extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            nombre: props.context.data.nombre,
            TipoDeusuario: props.context.data.TipoDeusuario,
            contentTabla: true,
            contentCategoria:false
        };
    }

    logaut = () => {
        const data = this.props.context.data
        data.nombre = ""
        this.props.context.setData(data)

        const data1 = this.props.context.data
        data.TipoDeusuario = ""
        this.props.context.setData(data1)
        this.props.history.push("/")
    }

    openTable = () => {
        this.setState({ contentTabla: true,contentCategoria:false });
    }

    openCategoria = () => {
        this.setState({ contentCategoria: true, contentTabla:false});
    }


    render() {
        return (
            <div className="container-fluids">
                <div className="content-main">
                  <div className="content-name">
                        <ul>
                            <li> {this.state.nombre} </li>
                            <li> {this.state.TipoDeusuario} </li>
                        </ul>
                    </div>
                    <div className="tablaText" onClick={this.openTable}>tabla de deportistas</div>

                    <div className="categoria" onClick={this.openCategoria}>Categorias</div>
                </div>
                {
                    this.state.contentTabla ?
                        <TableDeporte />
                        : null
                }
                                {
                    this.state.contentCategoria ?
                        <Categoria />
                        : null
                }
                <button  className="btn-logout" onClick={this.logaut}>Cerrar</button>
            </div>
        );
    }
}
export default props => (withRouter, <AppContex.Consumer>
    {state => <Administarcion context={state} {...props} />}
</AppContex.Consumer>)