import { useState } from "react";
import HeadBar from "./HeadBar";
import LeftDrawerBar from "./LeftDrawerBar";

function MenuBars({ setData }) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <HeadBar setData={setData} toggleDrawer={toggleDrawer} />
      <LeftDrawerBar state={state} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default MenuBars;
