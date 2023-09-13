import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo]= useState([]);
  let addList = (inputText) => {
    if(inputText!=='')
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])

  }

  return (
   <div className='main-container'>
       <div className='center-container'>
        <TodoInput addList={addList}/> 
        {/* listTodo ={listTodo}/> */}
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.length>0 ? listTodo.map((listItem,i)=>{
          return (
            <TodoList key= {i} items={listItem} index={i} deleteItem={deleteListItem}/>
          )
        }):<h2>Currently you have no items in your list!</h2>}
       </div>
   </div>
  )
}

export default App