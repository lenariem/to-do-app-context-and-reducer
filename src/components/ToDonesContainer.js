import React, { useContext } from 'react';
import { MyContext } from './App';
import ToDoneItem from './ToDoneItem';


export default function ToDonesContainer() {
    
    const {items} = useContext(MyContext);

    const toDones = items.filter((item) => item.done === true);
    
    const toDonesItems = toDones.map(task => {
        return (
            <ToDoneItem key ={task.id} taskProps={task} />
        );
    });

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDonesItems}
        </div>
    )
}
