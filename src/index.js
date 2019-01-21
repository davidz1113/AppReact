import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import './index.css';
// import './index.html';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Componente1 from './Componente1'
import Home from './home'
import Lenguajes from './lenguajes'
import Usuarios from './usuarios'
// import {Router,Route,hashHistory} from 'react-router/Router';

render(
    <Router history={hashHistory}>
        {/* <Route path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/usuarios" component={Usuarios}/>
        <Route path="/lenguajes" component={Lenguajes}/> */}
        <Route path='/' component={App}>
            <IndexRoute  component={Home} />
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/lenguajes" component={Lenguajes} />
        </Route>
    </Router>,
    document.getElementById('root')

)

//  ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
