import React, {useState, useEffect} from 'react'

import AskForBudget from './AskForBudget'
import ExpenseForm from './ExpenseForm'
import List from './List'
import BudgetControl from './BudgetControl'

function App() {

  // States
  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [updatedExpense, setUpdatedExpense] = useState(false)
  const [divBudget, showDivBudget] = useState(true)
  
  // Manage state changes
  useEffect(() => {

    if (updatedExpense) {

      // Add a new expense
      setExpenses([
        ...expenses,
        expense
      ])

      // Update the rest
      const available = rest - expense.expenseQuantity
      setRest(available)

      setUpdatedExpense(false)
    }
  }, [expense, expenses, rest, updatedExpense])

  return (
    <div className='container'>
      <header>
        <h1>Weekly Expense</h1>

        <div className='main-content content'>
          {divBudget ? 
            (
            <AskForBudget
              setBudget={setBudget}
              setRest={setRest} 
              showDivBudget={showDivBudget}
            />
            ) : (
            <div className='row'>
              <div className='one-half column'>
                  <ExpenseForm
                    setExpense={setExpense} 
                    setUpdatedExpense={setUpdatedExpense}
                    />
              </div>
              <div className='one-half column'>
                  <List expenses={expenses} />
                  <BudgetControl 
                    budget={budget}
                    rest={rest}
                  />
              </div>
            </div>
            )
          }
        </div>

      </header>
    </div>
    
  )
}

export default App
