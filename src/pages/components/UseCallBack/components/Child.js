import { useEffect } from "react";

const Child = ({ returnComments }) => {
  useEffect(() => {
    console.log("function was called");
  }, [returnComments]);

  return <div>{returnComments(" `  super  ` ")}</div>;
};

export default Child;
