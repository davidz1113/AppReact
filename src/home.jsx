import React from 'react';

class Home extends React.Component{
    constructor(){
        super()
        this.state ={mensaje :'Bienvenido a reacjs'}
    }

render(){
    return (
        <div>
        <h1>{this.state.mensaje}</h1>
        </div>
    )

    
}

}

export default Home;