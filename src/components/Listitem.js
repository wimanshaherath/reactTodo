import React from 'react';
import Todo from './Todo';
function Listitem({todoTasks,setTodoTasks,setEditing,setUpdateText})
{

    return(
        <div className='todo mt-2'>
            <ul className="list-group">
                {todoTasks.map((todoTask)=>(
                    <Todo todoTasks={todoTasks} 
                    setTodoTasks={setTodoTasks} 
                    todoTask={todoTask} 
                    text={todoTask.text} 
                    key={todoTask.id} 
                    setEditing={setEditing} 
                    setUpdateText={setUpdateText}/>
                ))}
            </ul>
        </div>
    );
}

export default Listitem;