import axios from "axios";
import { useEffect, useState } from "react";
import s from "./style.module.scss";

const UseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[2].email);
        // console.log(response.data);
        console.log("API IS LOADED");
      });
  }, []);

  return (
    <div className={s.container}>
      hello
      <h1> {data}</h1>
    </div>
  );
};

export default UseEffect;
