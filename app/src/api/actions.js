import { toast } from "react-toastify";

export let pedirProductos = (genero) => dispatch => {
    fetch(`http://localhost:3001/${genero}`)
    .then(res=>res.json())
    .then(res=>dispatch({
        type:"PRODUCTS_TRAER_ALL",
        payload:res
    }))
    .catch(err=>dispatch({
        type:"PRODUCTS_ERROR",
        payload:"No pude traer los personajes"
    }))
}

export let filtrarProductos = (i,marca) => dispatch => {
    fetch(`http://localhost:3001/hombre?marca=Vans`)
    .then(res=>res.json())
    .then(res=>dispatch({
        type:"PRODUCTS_TRAER_ALL",
        payload:res
    }))
    .catch(err=>dispatch({
        type:"PRODUCTS_ERROR",
        payload:"No pude traer los personajes"
    }))
}

export let seleccionarProducto = payload => ({ type : "PRODUCTS_SELECCIONAR" , payload })

export let borrarProductosHombre = (payload,id,indice) => dispatch => {

    fetch(`http://localhost:3001/hombre/${id}`,{
        method : "DELETE"
    })
    .then(res=>{
        dispatch({type:"PRODUCTS_BORRAR",payload,id,indice})
        pedirProductos("hombre")
        toast.success("El producto ha sido eliminado.");
    })
    .catch(res=>{
        console.log(res)
        toast.warn("Ha ocurrido un error.");
    })
}