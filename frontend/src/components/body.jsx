import React, { useState } from "react";
import './body.css';

function Body() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([])

  function handleChangeInput({ target: {value} }) {
    const inputTask = value
  
    setTask(inputTask)
  }

  function handleAddItemToList(event) {
    event.preventDefault();
    
    if(task) {
      setItemsList([...itemsList, task]);    
  
      setTask("")
    }
  }

  return(
    <div className="body">
      <h1>"Com organização e tempo, acha-se o segredo de fazer tudo e bem feito.” -Pitágoras</h1>
      <form>
        <label>
          <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
        </label>
        <button type="submit" onClick={handleAddItemToList}>Adicionar</button>
      </form>
      <ul className="list">
        {itemsList.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default Body;
