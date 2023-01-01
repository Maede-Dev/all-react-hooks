import { useState } from "react";
import s from "./style.module.scss";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [inputNameValue, setInputNameValue] = useState();
  const [inputLastNameValue, setInputLastNameValue] = useState();

  const changeName = (event) => {
    const newNameValue = event.target.value;
    setInputNameValue(newNameValue);
  };

  const changeLastName = (event) => {
    const newLastNameValue = event.target.value;
    setInputLastNameValue(newLastNameValue);
  };

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

      <div className={s.name}>
        <input
          type="text"
          placeholder="write your name"
          onChange={changeName}
          className={s.inputName}
        />
        {inputNameValue}
      </div>

      <div className={s.lastName}>
        <input
          type="text"
          placeholder="write your LastName"
          onChange={changeLastName}
          className={s.inputLastName}
        />
        {inputLastNameValue}
      </div>
    </div>
  );
};

export default UseState;
