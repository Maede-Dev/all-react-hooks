import { createContext, useState } from "react";
import Login from "./components/Login";
import UserName from "./components/UserName";
import s from "./style.module.scss";

//manage state esily (dont call state just useContext)

export const ApppContext = createContext(null);
const UseContext = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className={s.container}>
      <ApppContext.Provider value={{ userName, setUserName }}>
        <Login />
        <UserName />
      </ApppContext.Provider>
    </div>
  );
};

export default UseContext;
