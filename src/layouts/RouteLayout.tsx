import { Outlet } from "react-router-dom";

export const RouteLayout = () => {
  return (
    <>
      <nav></nav>

      <Outlet />
    </>
  );
};
