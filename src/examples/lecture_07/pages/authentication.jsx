import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>This is a simple authentication page</h1>
      <Outlet />
    </div>
  );
};

export default Authentication;
