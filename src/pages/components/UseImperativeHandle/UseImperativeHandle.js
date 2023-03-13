import { useRef } from "react";
import ChildUseRef from "./components/childUseRef";
import s from "./style.module.scss";

//baraye in ke ro dokme click miknim harja mouse bashe miad focus mishe ro input va amade type va input ro clear kne bade type
//dastresi be elementhaye safhe(DOM)
const UseImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div className={s.container}>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        parents
      </button>
      <ChildUseRef ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle;
