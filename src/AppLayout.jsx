import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./";
import ScrollToTop from "./components/common/ScrollToTop";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <main className="pt-[100px] relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
