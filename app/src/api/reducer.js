let estadoInicial = {
    links : [ "Hombre" , "Mujer" , "Ninos", "Dashboard" ],
    marcas : [ "Adidas" , "Nike" , "Vans", "Otra" ],
    categorias : ["camperas", "remeras", "pantalon", "zapatillas"],
    productos_fetch : [],
    error : null,
    fetching : false,
    fetched : false,
    productos : [],
    producto : null,
    productos_fetched : false,
}

let reducer = (estado=estadoInicial,action) => {

    switch(action.type){
        case "PRODUCTS_FETCHING" :     
            return {...estado , fetching : true }
        case "PRODUCTS_FETCH" : 
            return {...estado , products_fetch : [...action.payload] , fetching : false , fetched : true }
        case "PRODUCTS_ERROR" :
            return {...estado , error : "Error en pedir Productos" , fetching : false}
        case "PRODUCTS_TRAER_ALL" :
            return {...estado , productos : action.payload , productos_fetched : true }
        case "PRODUCTS_SELECCIONAR" : 
            return {
                ...estado , 
                producto : {
                    ...estado.productos[action.payload],
                    indice : action.payload
                }
        }
        case "PRODUCTS_BORRAR" :
            return {
                ...estado,
                productos : [
                    ...estado.productos.slice(0,action.indice),
                    ...estado.productos.slice(action.indice+1)
                ]
        }
        case "FORM_SUBMIT" : 
            return {...estado , formulario : [...estado.formulario,estado.formulario]  }
        default : 
            return estado 
    }
}

export default reducer