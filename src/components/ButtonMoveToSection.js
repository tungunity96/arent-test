function ButtonSection({ button }) {
  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const buttonBgImage = {
    backgroundImage: `url('/img/${button.image}')`,
    backgroundSize: "cover",
  };
  return (
    <div
      className="aspect-square bg-primary-300 cursor-pointer"
      onClick={() => handleClickScroll(button.elementId)}
    >
      <div className="w-full h-full p-6 relative">
        <div className="w-full h-full bg-black">
          <div className="w-full h-full mix-blend-luminosity opacity-50" style={buttonBgImage}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="text-2xl text-primary-300 tracking-wider font-inter">{button.title}</div>
          <div className="w-[160px] h-[24px] bg-primary-400 text-center mt-2 text-light">
            {button.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
