import ActionTypes from "../actionType";

const ProductGet = (value) =>
    dispatch =>{
       
        return(
            
            fetch(`https://fakestoreapi.com/products/${value}`)
            .then(res=>res.json())
            .then(json=>dispatch({type:ActionTypes.getProduct.PRODUCT, payload:json}))
        )
}

export default ProductGet;