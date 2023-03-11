import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import s from "./style.module.scss";

const UseLayout = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "mayi";
  }, []);

  return (
    <div className={s.container}>
      {/* //very similar to use effect but use layout is called before use effect (this is ereast state in rendering) */}
      <input
        ref={inputRef}
        value="karimi"
        style={{ width: 300, height: 200, textAlign: "center" }}
      />
    </div>
  );
};

export default UseLayout;
