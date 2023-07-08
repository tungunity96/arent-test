import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import ScrollButton from "../components/ScrollButton";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <ScrollButton />
      <Header />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
