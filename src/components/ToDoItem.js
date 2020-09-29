import React, { useContext } from 'react'
import { MyContext } from './App'


export default function ToDoItem({taskProps}) {
    const {dispatch} = useContext(MyContext) 

    return (
        <div className="todo-item">
            <p>{taskProps.text}</p>
            <div className="action">
                <button className="btn" onClick={() => dispatch({type: "updateItem", payload: taskProps.id})}>&#10004;</button>
                <button className="btn" onClick={() => dispatch({type: "deleteItem", payload: taskProps.id})}>&#128465;</button>
            </div>
        </div>
    )
}
