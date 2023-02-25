import { useRef } from "react";
import s from "./style.module.scss";

//baraye in ke ro dokme click miknim harja mouse bashe miad focus mishe ro input va amade type va input ro clear kne bade type

const RefTutorial = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    // //baraye khali krdn input
    // inputRef.current.value = "";
  };
  return (
    <div className={s.container}>
      <h1>mayi</h1>
      <input placeholder="EX ..." ref={inputRef} />
      <button onClick={onClick}>change name</button>
    </div>
  );
};

export default RefTutorial;
