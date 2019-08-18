import React from "react"
import { connect } from "react-redux"

class ProductoDetalle extends React.Component {
    render(){
        let {producto} = this.props

        return(
            <section id="detalle-producto">
                <div>
                    <img src={`/images/${producto.titulo}.jpg`} alt=""/>
                </div>
                <div className="texto-producto">
                    <h2>{producto.titulo}</h2>
                    <h5>Descripcion : {producto.descripcion}</h5>
                    <h5>Marca : {producto.marca}</h5>
                    <h5>$ {producto.precio}.00</h5>
                    <button>Comprar</button>
                </div>

                
            </section>
        )
    }
}

export default connect(store=>({
    producto : store.producto
}))(ProductoDetalle)