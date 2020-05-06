import React, { useState } from 'react'
import Header from './components/Header'
import List from './components/List'
import Input from './components/Input'

const App = () => {

  const [TodoList, setTodoList] = useState([]);

  return (
    <div>
      <Header />
      <Input AddToList={setTodoList}/>
      <List arr={TodoList}/>
    </div>
    
  )
}


export default App
