import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>
        {props.items}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" onClick={e=> {
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList