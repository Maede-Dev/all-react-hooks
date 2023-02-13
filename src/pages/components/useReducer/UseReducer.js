// this is use when you want to use useState and use 2 diffrent useState but in useReducer u can use it simple

// import { useState } from "react";
// import s from "./style.module.scss";

// const UseReducer = () => {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(true);
//   return (
//     <div className={s.container}>
//       {/* //useReducer is replace for usestate */}
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setShowText(!showText);
//         }}
//       >
//         click
//       </button>
//       {showText && <p> this is text </p>}
//     </div>
//   );
// };

// export default UseReducer;

//this is use reducer

import { useReducer } from "react";
import s from "./style.module.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className={s.container}>
      {/* //useReducer is replace for usestate */}
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        click
      </button>
      {state.showText && <p> this is text </p>}
    </div>
  );
};

export default UseReducer;
