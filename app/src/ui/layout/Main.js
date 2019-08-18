import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../pages/Home"
import Hombre from "../pages/Hombre" //personajes
import Mujer from '../pages/Mujer'; //mujer
import Niños from "../pages/Niños" //contacto
import Dashboard from "../pages/Dashboard"
import ProductoDetalle from '../pages/ProductoDetalle';


export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/hombre" exact component={Hombre}/>
                    <Route path="/hombre/:id" component={ProductoDetalle}/>
                    <Route path="/mujer" exact component={Mujer}/>
                    <Route path="/mujer/:id" component={ProductoDetalle}/>
                    <Route path="/niños" component={Niños}/>
                    <Route path="/Dashboard" component={Dashboard}/>
                </Switch>
            </main>
        )
    }
}
