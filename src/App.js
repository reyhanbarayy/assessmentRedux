import React from 'react'
import SideBar from './companents/sidebar';
import { Row, Col, Container } from 'reactstrap';
import Products from './companents/Products';
import Product from './companents/Product';
import { Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        
        <Container >
            <Row style={{ backgroundColor: "lightblue", height: 120, margin: 5, textAlign: "center" }}>Üst Banner</Row>
            <Row>
                
                <Col xs="3"> 
                <SideBar />
                </Col>
                <Col xs="6">
                    <Routes>
                        <Route path='/Products' element={<Products />}></Route>
                         <Route path='/Product' element={<Product /> }></Route>
                    </Routes>
                    
                    
                </Col>
               
            </Row>
            <Row style={{ backgroundColor: "lightblue", height: 120, margin: 5, textAlign: "center" }}>Alt Banner</Row>
        </Container>
        
    )

}
export default App;