import { BsChevronUp } from "react-icons/bs";
import { useState } from "react";

function ScrollButton() {
  const scrollYToDisplay = 300;
  const [display, setDisplay] = useState(false);

  const toggleScrollButton = () => {
    const scrollY = document.documentElement.scrollTop;
    if (scrollY > scrollYToDisplay) {
      setDisplay(true);
    } else if (scrollY <= scrollYToDisplay) {
      setDisplay(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleScrollButton);

  return (
    <div
      className="w-[48px] h-[48px] rounded-full border-[1px] border-dark-600 fixed right-[36px] bottom-[50%] cursor-pointer flex flex-col justify-center items-center z-50"
      style={{ display: display ? "flex" : "none" }}
      onClick={scrollToTop}
    >
      <BsChevronUp size={28} />
    </div>
  );
}

export default ScrollButton;
