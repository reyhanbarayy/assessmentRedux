import  ActionTypes from "../actionType"


const productsGet = (value) => 
dispatch =>{
    if (value == null) {
        return(
        
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>dispatch({type:ActionTypes.getProducts.PRODUCTS, payload:json}))
        )
    }
    return(
        fetch(`https://fakestoreapi.com/products/category/${value}`)
        .then(res=>res.json())
        .then(json=>dispatch({type:ActionTypes.getProducts.PRODUCTS, payload:json}))
    )
   
}   

export default productsGet;