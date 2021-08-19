import React, { Component } from "react";
import "./administrador.css"
import { FaMedal } from "react-icons/fa";
import { Button, Modal } from 'react-bootstrap';

class Categoria extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            contentOro: false,
            contentModalPlata: false,
            contentModalBronce: false,
        };
    }


    handleShowOro = () => {
        this.setState({
            contentOro: true,
            contentModalPlata: false,
            contentModalBronce: false,
        })
    };

    handleClose = () => {
        this.setState({
            contentOro: false,
            contentModalPlata: false,
            contentModalBronce: false,
        })
    };

    handleShowPlata = () => {
        this.setState({
            contentOro: false,
            contentModalPlata: true,
            contentModalBronce: false,
        })
    };

    handleShowBronce = () => {
        this.setState({
            contentOro: false,
            contentModalPlata: false,
            contentModalBronce: true,
        })
    };


    render() {
        return (
            <div className="container-categoria">
                <div className="categoria-1">
                    <div className="oro" 
                     onClick={this.handleShowOro}>Oro <span>suma total 500 medallas</span><span><FaMedal /></span></div>
                    <div className="plata"
                     onClick={this.handleShowPlata}>Plata <span>suma total 1200 medallas</span><span><FaMedal /></span></div>
                    <div className="bronce"
                     onClick={this.handleShowBronce}>Bronce <span>suma total 3000 medallas</span><span><FaMedal /></span></div>
                </div>
                {
                    this.state.contentOro ?
                        <Modal show={true} onHide={() => this.handleClose()} animation={true}>
                            <Modal.Body><p className="warning"></p></Modal.Body>
                            <div className="success-box" >
                                <p>
                                    Uno de los motivos por los que se comenzaron a entregar medallas en las Olimpiadas fue por la tradición militar de aquel entonces.

                                    Las mayores distinciones castrenses de la época eran preseas circulares.
                                    En Estados Unidos, por ejemplo, el comandante de tropa recibía una medalla dorada mientras que sus subalternos eran condecorados con insignias de plata.

                                    El COI precisa que la primera medalla de oro olímpica vería la luz en 1904, en los juegos de San Luis, Misuri, Estados Unidos.
                                    Desde entonces, las medallas olímpicas tienen la siguiente jerarquía: oro al primer lugar, plata al segundo y bronce para el tercer puesto.
                             </p>
                            </div>
                            <Modal.Footer>
                                <button className="btn btn-danger" onClick={() => this.handleClose()}>
                                    Cerrar
                              </button>
                            </Modal.Footer>
                        </Modal>
                        : null
                }
                {
                    this.state.contentModalPlata ?
                        <Modal show={true} onHide={() => this.handleClose()} animation={true}>
                            <Modal.Body>
                                <div className="success-box" >
                                   <p> Una medalla de plata es una medalla que se otorga al competidor o competidora que queda en segunda posición de una competición. En los primeros Juegos Olímpicos modernos el campeón recibía la medalla de plata y el subcampeón, la de bronce.</p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-danger" onClick={() => this.handleClose()}>
                                    Cerrar
                            </button>
                            </Modal.Footer>
                        </Modal>
                        : null
                }
                {
                    this.state.contentModalBronce ?
                        <Modal show={true} onHide={() => this.handleClose()} animation={true}>
                            <Modal.Body>
                                <div className="success-box" >
                                    <p>Se trata de las preseas que obtienen los deportistas que logran alcanzar el podio en una competencia de Juego Olímpico. Mientras que el ganador recibe una medalla de oro, quien finaliza en el segundo lugar consigue una medalla de plata. Aquel que termina en tercer puesto, en tanto, gana una medalla de bronce.</p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-danger" onClick={() => this.handleClose()}>
                                    Cerrar
                    </button>
                            </Modal.Footer>
                        </Modal>
                        : null
                }
            </div>
        );
    }
}
export default Categoria