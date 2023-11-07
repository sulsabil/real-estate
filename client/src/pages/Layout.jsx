import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  return (
    <div>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
