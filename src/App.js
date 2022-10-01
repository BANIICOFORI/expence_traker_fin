import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import  Navbar  from "./components/Navbar";

import './App.css';

import ExpenseTracker from './components/ExpenseTracker';

function App() {
    return (
            <>
                {/* <Navbar/> */}
             <Container>
            
                <Row>
                    <Col md={12}>
                        <ExpenseTracker />
                    </Col>
                </Row>
                
             </Container>
            </>

    );

   


    
}

export default App;