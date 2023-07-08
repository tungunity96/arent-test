import ProgressImage from "../assets/images/d01.jpg";
import LineChart from "../components/line-chart.js";
import ButtonBG from "../assets/components/button-bg.png";
import KnifeIcon from "../assets/icons/icon_knife.png";
import CupIcon from "../assets/icons/icon_cup.png";
import dishes from "../mock/dishes.json";

function Home() {
  const buttonStyle = {
    background: `url(${ButtonBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center center",
  };
  const categories = [
    {
      title: "Morning",
      icon: KnifeIcon,
    },
    {
      title: "Lunch",
      icon: KnifeIcon,
    },
    {
      title: "Dinner",
      icon: CupIcon,
    },
    {
      title: "Snack",
      icon: CupIcon,
    },
  ];
  const renderedDishes = dishes.map((dish) => {
    return (
      <div className="relative aspect-square" key={dish.image}>
        <img
          className="w-full h-full object-cover"
          src={require(`../assets/images/${dish.image}`)}
          alt={dish.type}
        />
        <div className="absolute bottom-0 left-0 bg-primary-300 w-[120px] py-1 px-2 text-light">
          <span className="capitalize">{dish.type}</span>.{dish.date}
        </div>
      </div>
    );
  });
  const renderedCategoryButtons = categories.map((category) => {
    return (
      <div
        style={buttonStyle}
        className="w-[136px] h-[136px] flex flex-col justify-center items-center cursor-pointer"
        key={category.title}
      >
        <img src={category.icon} alt="button" />
        <div className="text-light">{category.title}</div>
      </div>
    );
  });
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <div>
          <img className="w-full h-[312px] object-cover" src={ProgressImage} alt="bg" />
        </div>
        <div className="col-span-2 w-full h-[312px] bg-dark-600 flex flex-row justify-center py-6">
          <LineChart />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-10 py-6">{renderedCategoryButtons}</div>
      <div className="grid grid-cols-4 gap-4">{renderedDishes}</div>
      <div className="bg-gradient-to-r to-primary-400 from-primary-300 w-[296px] h-[56px] rounded-md flex justify-center items-center mx-auto mt-8 cursor-pointer">
        <div className="text-light">記録をもっと見る</div>
      </div>
    </div>
  );
}

export default Home;
