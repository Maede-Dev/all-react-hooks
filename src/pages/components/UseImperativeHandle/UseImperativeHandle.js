import { useRef } from "react";
import ChildUseRef from "./components/childUseRef";
import s from "./style.module.scss";

//dstresi be child az parent
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
