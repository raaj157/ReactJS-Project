import { useState } from "react";
import { BiMessageAdd } from 'react-icons/bi';

function AddToDo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange = (event)=>{
    setDueDate(event.target.value);
  }

  const handleButonClicked = () => {
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }
  return (
    <div className="container">
      <div className="row torow">
        <div className="col-6">
          <input type="text" placeholder="Enter To Do Here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success tobtn"
          onClick={handleButonClicked}>
          <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
