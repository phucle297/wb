import { Outlet } from "react-router-dom";
import NavigationProgress from "@ui/components/navigation-progress";
import DotsGridBg from "@ui/components/dots-grid-bg";
import Footer from "../footer";
import Header from "../header";

const Layout = () => {
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
