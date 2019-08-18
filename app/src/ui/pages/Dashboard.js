import React , {Fragment} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import { pedirProductos, borrarProductosHombre } from "../../api/actions"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup"

class Dashboard extends React.Component {

    componentDidMount(){
        if(this.props.productos) return
        this.props.pedirProductos("hombre")
    }

    render(){
        let {productos,borrarProductosHombre, pedirProductos} = this.props;
        let generos = ["hombre", "mujeres", "ninos"]
        return (
            <Fragment>

                <h2 id="titulo-dashboard" >Dashboard</h2>

                <ButtonGroup className="grupoBotones" fullWidth aria-label="full width outlined button group">

                    {generos.map((genero,i)=>
                        
                        <Button key={i} variant="outlined" size="medium" color="primary" onClick={pedirProductos.bind(null,`${genero}`)}>{genero}
                        </Button>
                    )}
                </ButtonGroup>

                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover={false}
                    />

                <table>
                    <thead>
                        <tr>
                            <th>Eliminar Productos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto,i)=>
                        <tr key={i}>
                            <td>{producto.titulo}
                                <span className="span-eliminar" onClick={borrarProductosHombre.bind(null,i,producto.id,i)}> X</span>

                            </td>
                        </tr>


                        )}
                    </tbody>
                </table>

            </Fragment>
        )
    }
}

export default connect(store=>({
    productos : store.productos,
    productos_fetched : store.productos_fetched
}),dispatch=>({
    pedirProductos : bindActionCreators(pedirProductos,dispatch),
    borrarProductosHombre : bindActionCreators(borrarProductosHombre,dispatch)
}))(Dashboard)