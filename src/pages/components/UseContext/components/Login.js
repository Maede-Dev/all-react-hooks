import { useContext } from "react";
import { ApppContext } from "../UseContext";

const Login = () => {
  const { setUserName } = useContext(ApppContext);
  return (
    <div>
      <input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
