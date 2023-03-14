import s from "./style.module.scss";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
//decrase big comitation va baes mishe ke ba harbar render function ha dobare rednder nashn
const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; (i = comments.length); i++) {
      let currentName = comments[i].name;
      if ((currentName.length = longestName.length)) {
        longestName = currentName;
      }
    }
    console.log("this was computed");
    return longestName;
  };

  const getLongesName = useMemo(() => findLongestName(data), [data]);
  return (
    <div className={s.container}>
      <div>{getLongesName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {!toggle && <h1>toggle</h1>}
    </div>
  );
};

export default UseMemo;
