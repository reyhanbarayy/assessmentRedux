import  ActionTypes from "../actionType"


const categoriesGet = () => 
dispatch =>{
    return(
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>dispatch({type:ActionTypes.get.CATEGORİES, payload:json}))
    )
   
} 
export default categoriesGet;