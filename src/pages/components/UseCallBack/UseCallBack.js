import { useCallback, useState } from "react";
import Child from "./components/Child";
import s from "./style.module.scss";

//similar to useMemo
//useMemo store value but useCallBack store function
const UseCallBack = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("hello honey Mayi");

  const returnComments = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className={s.container}>
      <Child returnComments={returnComments} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default UseCallBack;
