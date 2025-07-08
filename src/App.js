import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    console.log("count render");
  }, [count]);

  useEffect(() => {
    console.log("keyword render");
  }, [keyword]);

  return (
    <div>
      <h1>count: {count}</h1>
      <h1>Keyword: {keyword}</h1>
      <button onClick={onClick}>click</button>
      <input type="text" onChange={onChange} />
    </div>
  );
}

export default App;
