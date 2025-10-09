import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
