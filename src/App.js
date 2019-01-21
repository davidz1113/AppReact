import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
class App extends Component {
    // render() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   );
    // }

    render() {
      return (
        <div>
          <ul>
            <li><Link to="/home"> Home</Link></li>
            <li><Link to="/usuarios">Usuarios </Link></li>
            <li><Link to="/lenguajes">Lenguajes</Link></li>
          </ul>
          <div>{this.props.children}</div>
        </div>
      )
    }
  }

export default App;
