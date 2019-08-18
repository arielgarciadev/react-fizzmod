import React , {Fragment} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import { filtrarProductos} from "../../api/actions"


class Filtros extends React.Component {

    render() {
        let {marcas} = this.props

        return (
            <Fragment>
                
                <div>
                {marcas.map((marca,i)=>
                    
                    <button onClick={filtrarProductos.bind(null,i,{marca})}>{marca}
                    </button>
                )}
                </div>
            </Fragment>
        )
    }
}


export default connect(
    store => ({
        marcas : store.marcas,
    }), 
    dispatch => ({
        filtrarProductos : bindActionCreators(filtrarProductos,dispatch)
    }) 
)(Filtros)

