import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-0 lg:pt-[75px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
