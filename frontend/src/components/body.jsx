import React from "react";
import './body.css';

function Body() {
  return(
    <div>
      <h1>"Com organização e tempo, acha-se o segredo de fazer tudo e bem feito.” -Pitágoras</h1>
      <form>
        <label>
          <input type="text" placeholder="Adicione uma tarefa" />
        </label>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        <li>Item</li>
      </ul>
    </div>
  );
}

export default Body;
