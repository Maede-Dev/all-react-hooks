import { useState } from "react";
import s from "./style.module.scss";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className={s.container}>
      {counter}
      <button onClick={increment} className={s.btn}>
        +
      </button>
    </div>
  );
};

export default UseState;
