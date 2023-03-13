import { forwardRef } from "react";
import { useImperativeHandle, useState } from "react";

//baraye in ke ro dokme click miknim harja mouse bashe miad focus mishe ro input va amade type va input ro clear kne bade type
//dastresi be elementhaye safhe(DOM)
const ChildUseRef = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>child</button>
      {toggle && <span>toggle</span>}
    </div>
  );
});

export default ChildUseRef;
