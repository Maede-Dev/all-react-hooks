import { useContext } from "react";
import { ApppContext } from "../UseContext";
const UserName = () => {
  const { userName } = useContext(ApppContext);
  return (
    <div>
      <h1>User:{userName}</h1>
    </div>
  );
};

export default UserName;
