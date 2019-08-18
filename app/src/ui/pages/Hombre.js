import React , {Fragment} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import { filtrarProductos, pedirProductos , seleccionarProducto } from "../../api/actions"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup"
class Hombre extends React.Component {    

    componentDidMount(){
        if(this.props.productos_fetch) return
        this.props.pedirProductos("hombre")
    }
    //el filtro lo podria hacer: creando links  con los nombres de las marcas, y agregarle una funcion a cada uno.
    render(){
        let {categorias,marcas,productos,pedirProductos,seleccionarProducto} = this.props
        return (
            <Fragment>
                <h2 id="titulo-hombre">Hombres</h2>
                <ButtonGroup className="grupoBotones" fullWidth aria-label="full width outlined button group">

                    {marcas.map((marca,i)=>
                        
                        <Button key={i} variant="outlined" size="medium" color="primary" onClick={pedirProductos.bind(null,`hombre?marca=${marca}`)}>{marca}
                        </Button>
                    )}
                </ButtonGroup>
                <ButtonGroup className="grupoBotones" fullWidth aria-label="full width outlined button group">

                    {categorias.map((categoria,i)=>
                        
                        <Button key={i} variant="outlined" size="medium" color="primary" onClick={pedirProductos.bind(null,`hombre?categoria=${categoria}`)}>{categoria}
                        </Button>
                    )}
                </ButtonGroup>
                <div>
                
                </div>
                <div className="contenedor-productos" >
                    {productos.map((producto,i)=>
                        
                        <Link key={i} to={`/hombre/${producto.id}`} onClick={seleccionarProducto.bind(null,i)}>
                            <div className="productCard" key={i}>
                                <img src={`/images/${producto.titulo}.jpg`} alt=""/>
                                    <h3>{producto.titulo}</h3>
                                <div className="card-bottom"><span className="marca-card">{producto.marca}</span> <span className="precio-card">${producto.precio}</span> </div>
                            </div>
                        </Link>
                    )}
                </div>
            </Fragment>
        )
    }
} 

export default connect(
    store => ({
        categorias : store.categorias,
        marcas : store.marcas,
        productos : store.productos,
        productos_fetched : store.productos_fetched
    }), 
    dispatch => ({
        pedirProductos : bindActionCreators(pedirProductos,dispatch),
        seleccionarProducto : bindActionCreators(seleccionarProducto,dispatch),
        filtrarProductos : bindActionCreators(filtrarProductos,dispatch)
    }) 
)(Hombre)

