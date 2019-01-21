import React from 'react'
import Componente2 from './Componente2';

class Componente1 extends React.Component {

    constructor() {
        super()
        this.state = {
            mensaje: 'Bienvenido a ReacJS',
            mensaje2: 'Estamos aprendiendo Props & states'
        }
        console.log('Primera fase: metodo constructor');
        
    }

    render() {
        console.log('Tercera Fase: metodo rencer fase principal');
        var valor1 = 500;
        var valor2 = 450;
        var valor3 = valor1*valor2;
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
                <h1>El valor de la multiplicacion es {valor3}</h1>
                <Componente2 mensajeProps={this.state.mensaje2} cambioEstado={this.changeState.bind(this)} />
                <button onClick={this.pressButton.bind(this)}>Set state </button>
            </div>
        );
    }

    componentWillMount() {
        console.log('Bienvenido al metodo component will mount');
        console.log('Segunda fase: Component will mount');
        
    }
    
    componentDidMount(){
        console.log('Cuarta fase: Component did mount ultima fase de ciclo de montaje');
        this.setState({mensaje:'MEtodo did mount'})

    }

    changeState() {
        this.setState({ mensaje: 'Este es el nuevo mensaje' });
    }

    pressButton() {
        this.setState({ mensaje: 'Cambiando Mensaje con set state' })
    }

}

export default Componente1;