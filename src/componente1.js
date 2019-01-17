import React from 'react'
import Componente2 from './Componente2';

class Componente1 extends React.Component {

    constructor() {
        super()
        this.state = {
            mensaje: 'Bienvenido a ReacJS',
            mensaje2: 'Estamos aprendiendo Props & states'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
                <Componente2 mensajeProps={this.state.mensaje2} cambioEstado={this.changeState.bind(this)}/>
               
            </div>
        );
    }

    changeState() {
        this.setState({ mensaje: 'Este es el nuevo mensaje' });
    }

}

export default Componente1;