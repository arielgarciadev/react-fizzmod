import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import store from "./api/store"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
)