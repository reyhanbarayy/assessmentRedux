import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { ListGroupItem, ListGroup, Row, Col } from "reactstrap";
import Actions from "../redux/action";



const SideBar = () => {
    
    useEffect(() => {
        {dispatch(Actions.categoriesGet())}
     });

     const dispatch=useDispatch();
     const category = useSelector(state => state.categoriesReducer)
    
    return (
       
        <Row>
            <Col >
                <ListGroup>
                 
                    <ListGroupItem onClick={() =>dispatch(Actions.productsGet())}>Tüm Ürünler</ListGroupItem>
                    
                    {category.map(data => {
                        return (
                            <ListGroupItem key={data.id} onClick={() =>dispatch(Actions.productsGet(data))}>
                                {data}
                            </ListGroupItem> 
                        )
                    })
                }
                        
                </ListGroup>
            </Col>
        </Row>
      
    );
}


export default SideBar;
