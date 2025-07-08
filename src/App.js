import { useEffect, useState } from "react";
function Hello() {
  const hi = () => {
    console.log("create");
    return bye;
  };

  const bye = (event) => {
    console.log("destroy");
  };

  useEffect(hi, []);

  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClick}>click</button>
      {show && <Hello />}
    </div>
  );
}

export default App;
