import React from 'react';
import Edit from './edit.svg';
import Trash from './Trash.svg';
function Todo({text,id,todoTasks,setTodoTasks,todoTask,setEditing,setUpdateText})
{
    const deleteTaskHandler=()=>
    {
        setTodoTasks(todoTasks.filter((el)=>todoTask.id!==el.id));
        console.log(todoTask);
    };
    const editTaskHandler=()=>
    {
        setEditing(true);
        setUpdateText({text:todoTask.text, completed:todoTask.completed, id:todoTask.id });
        console.log(todoTask);
    }
    return(
        <div className='todos mb-1' id={id}>
            <li className="todo-item list-group-item">{text}</li>
                
            <button className='icons btn btn-success ml-auto' type="button" onClick={editTaskHandler}>
                <i><img className="icon edit"  src={Edit} width="16" height="16" alt='edit'/></i>
            </button> 
            <button className='icons btn btn-danger' type="button" onClick={deleteTaskHandler}>
                <i><img className="icon trash"  src={Trash} width="16" height="16" alt='edit'/></i>
            </button>
        </div>
    );
}

export default Todo;