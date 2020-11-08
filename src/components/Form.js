import React from "react";

function Form({setInputText,inputText,setTodoTasks,todoTasks})
{
    const inputHandler=(e)=>
    {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const clickHandler=(e)=>
    {
        console.log(inputText); 
        
        setTodoTasks([
            ...todoTasks,
            {text:inputText, completed:false, id:Math.random()*1000}
        ])

        setInputText("");
        
    };

    return(
        <div className="form-div">
            <form className="mx-auto"> 
                <input type="text" onChange={inputHandler} value={inputText} className='mr-2 pl-2' id='todo-text' placeholder="Ender task to do"/>
                
                <button type='button' onClick={(inputText!=="")?clickHandler:null} className="btn btn-primary btn-sm" id='add-btn'>ADD</button>
            </form>
        </div>
    );
}

export default Form;