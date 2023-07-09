function ButtonLoadMore({ buttonText, buttonCb }) {
    const handleClick = () => {
        buttonCb()
    }
  return (
    <div className="bg-gradient-to-r to-primary-400 from-primary-300 w-[296px] h-[56px] rounded-md flex justify-center items-center cursor-pointer mx-auto " onClick={handleClick}>
      <div className="text-light">{buttonText}</div>
    </div>
  );
}

export default ButtonLoadMore;
