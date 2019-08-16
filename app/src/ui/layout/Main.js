import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Home from "../paginas/Home"
import Personajes from "../paginas/Personajes"
import Personaje from "../paginas/Personaje"
import Memes from "../paginas/Memes"
import Contacto from "../paginas/Contacto"

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/personajes" exact component={Personajes}/>
                    <Route path="/personajes/:id" component={Personaje}/>
                    <Route path="/memes" component={Memes}/>
                    <Route path="/contacto" component={Contacto}/>
                </Switch>
            </main>
        )
    }
}
