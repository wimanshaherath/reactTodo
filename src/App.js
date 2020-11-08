import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import Editform from './components/Editform';
import Listitem from './components/Listitem';
function App() {
  const [inputText,setInputText]=useState("");
  const [todoTasks,setTodoTasks]=useState([]);

  const intialState={text:"", completed:false, id:null}
  const [editing,setEditing]=useState(false);
  const [updateText,setUpdateText]=useState(intialState);
  
  return (
    
    <div className="App App-header">
      <div className="todo-container">
        {editing?
        <Editform setEditing={setEditing} updateText={updateText} setUpdateText={setUpdateText} setTodoTasks={setTodoTasks} todoTasks={todoTasks}/>:
        <Form inputText={inputText} setInputText={setInputText} setTodoTasks={setTodoTasks} todoTasks={todoTasks}/>
      }
        {/* <h3>{inputText}</h3> */}
        <Listitem todoTasks={todoTasks} setTodoTasks={setTodoTasks} setEditing={setEditing} setUpdateText={setUpdateText}/>
      </div>
     
    </div>
  );
}

export default App;
