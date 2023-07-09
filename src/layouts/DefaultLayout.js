import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import { Outlet } from "react-router-dom";

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
