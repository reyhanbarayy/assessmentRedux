import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Actions from "../redux/action";


const Product = () => {
    const Products = useSelector(state => state.ProductsReducer) 
    console.log(Products)
    const dispatch=useDispatch();
    return (
        <Link to="/Products">
           <div className="ui link cards">
            {Products.map(data => {
                return ( 
                    <div key={data.id} style={{ margin: 15, height:400 }} className="card" onClick={()=>dispatch(Actions.ProductGet(data.id))}>
                        <div style={{}} className="image">
                            <img src={data.image} style={{ height:250, objectFit:"fill"}} />
                        </div>
                        <div style={{ height:100 }} className="content">
                            <div className="header">
                                {data.title}
                            </div>
                            <div className="meta">
                                <a>{data.category}</a>
                            </div>
                            <div className="description">
                                ${data.price}
                            </div>
                        </div>
                    </div>
                   
                )
              
            })}

        </div>
        </Link> 
    )
}
export default Product;
