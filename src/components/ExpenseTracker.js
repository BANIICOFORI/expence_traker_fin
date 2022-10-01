import React, { useState, useEffect } from 'react';
//import { Container,Row,Col} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';

import { uniqueId } from '../utils';

import Card from 'react-bootstrap/Card';
    import Col from 'react-bootstrap/Col';
    import Row from 'react-bootstrap/Row';

// Aggregator component/container component

const transactionData = [
   
];

function ExpenseTracker() {

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState([]);
    
    const saveState = () => {
        localStorage.setItem('expenseTrackerState', 
            JSON.stringify(transactions));
    }

    const calculateExpenses = () => {
        let income = 0, expense = 0;
        
        transactions.forEach((data) => {
            if (data.type === 'income') {
                income += data.amount;
            } else if (data.type === 'expense') {
                expense += data.amount;
            }
        });

        saveState();

        setIncome(income);
        setExpense(expense);
    }

    const handleAddNewTransaction = item => {
        let newTransactions = [...transactions, item];
        setTransactions(newTransactions);
    }

    const handleDeleteTransaction = id => {
        const newTransactions = transactions.filter((item) => item.id != id);
        setTransactions(newTransactions);
    }

    useEffect(() => {
        let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
        if (localState) {
            setTransactions(localState);
        } else {
            calculateExpenses();
        }
    }, []);

    useEffect(() => {
        calculateExpenses();
    }, [transactions]);

    return (


    //     <Container>
    //          <h1>expense tracker</h1>
    //     <Row>
            
    //         <Col md={4}>
    //         <TransactionForm onNewTransaction={handleAddNewTransaction} />
    //         </Col>
    //        <div className='between'></div>
    //         <Col md={4}>
    //         <Expense income={income} expense={expense} />

    //        <TransactionHistory transactions={transactions}
    //      onDeleteTransaction={handleDeleteTransaction} />
    //         </Col>
    //     </Row>
        
    //  </Container>


   
    
    // function GridExample() {
    //   return (
        <>
        <CardGroup>
        <Card>
          
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <TransactionForm onNewTransaction={handleAddNewTransaction} />
          </Card.Body>
          
       
        </Card>
        <Card>
           
          <Card.Body>
            <Card.Title><Expense income={income} expense={expense} /></Card.Title>
           
          </Card.Body>
          

         <TransactionHistory transactions={transactions}
         onDeleteTransaction={handleDeleteTransaction} />
         
        </Card>
      
      </CardGroup>
      </>
      );
    }
    
  

        // <div>

        //     <h1>expense tracker</h1>
        //     <Expense income={income} expense={expense} />

        //     <TransactionHistory transactions={transactions}
        //         onDeleteTransaction={handleDeleteTransaction} />

        //     <TransactionForm onNewTransaction={handleAddNewTransaction} />
        // </div>
//     )
// }

export default ExpenseTracker;