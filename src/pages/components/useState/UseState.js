import { useState } from "react";
import s from "./style.module.scss";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   if (counter >= 1) {
  //     setCounter(counter - 1);
  //   }
  // };

  return (
    <div className={s.container}>
      <button onClick={() => setCounter(counter + 1)} className={s.btn}>
        +
      </button>
      {counter}
      <button
        onClick={() => setCounter(counter - 1)}
        className={s.btn}
        disabled={counter <= 1}
      >
        -
      </button>
    </div>
  );
};

export default UseState;
