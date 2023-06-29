import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <>
      navbar
      <Outlet />
      <p>footer</p>
    </>
  );
};

export default LayoutRoot;
