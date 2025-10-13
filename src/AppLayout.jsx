import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[100px] relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
