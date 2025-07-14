import { useState } from "react";

export function ToDos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (todo === "") {
      return;
    }

    setTodos((current) => [todo, ...current]);
    inputReset();
  };

  const inputReset = () => {
    setTodo("");
  };

  return (
    <div>
      <h1>To Do 리스트 ({todos.length}개)</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="새 할일"
          value={todo}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
