import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const RouteLayout = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav></nav>

      <Outlet />
    </>
  );
};
