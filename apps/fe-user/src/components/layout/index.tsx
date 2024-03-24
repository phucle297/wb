import DotsGridBg from "@ui/components/dots-grid-bg";
import NavigationProgress from "@ui/components/navigation-progress";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <NavigationProgress className="absolute inset-x-0 bottom-0 translate-y-1" />
      <DotsGridBg />

      <Header />

      <main className="relative z-10 mt-[56px] min-h-[calc(100dvh_-_56px_-_276px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
