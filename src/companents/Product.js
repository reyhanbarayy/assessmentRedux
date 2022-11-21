import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Product = () => {
    const Product = useSelector(state => state.ProductReducer)
    
    return (
        <Link to="/Product">
          
        <div className="ui link card" style={{display:"flex", width:500}}>
                    <div style={{  }}  >
                        <div style={{}} className="image">
                            <img src={Product.image} style={{height: 500, objectFit:"fill" }} />
                        </div>
                        <div style={{ height:100}} className="content">
                            <div className="header">
                                {Product.title}
                            </div>
                            <div className="meta">
                                <a>{Product.category}</a>
                            </div>
                            <div className="description">
                                ${Product.price}
                                
                            </div>
                        </div>
                    </div>
             

        </div>
      </Link>
    )
}

export default Product;