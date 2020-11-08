import React from "react";

function Editform({setUpdateText,updateText,setEditing,setTodoTasks,todoTasks})
{
    const updateTextChange=(e)=>
    {
        setUpdateText({text:e.target.value,completed:updateText.completed,id:updateText.id});
    }

    const clickHandler=()=>
    {
        setTodoTasks(todoTasks.map((todoTask)=>(todoTask.id==updateText.id?updateText:todoTask)));
        setEditing(false);
    }
    return(
        <div className="form-div">
            <form className="mx-auto"> 
                <input type="text" className='mr-2 pl-2' onChange={updateTextChange} id='todo-text' value={updateText.text}/>
                
                <button type='button' className="btn btn-primary btn-sm" id='add-btn' onClick={clickHandler}>EDIT</button>
            </form>
        </div>
    );
}

export default Editform;