import ProgressImage from "../assets/images/d01.jpg";
import LineChart from "../components/LineChart.js";
import KnifeIcon from "../assets/icons/icon_knife.png";
import CupIcon from "../assets/icons/icon_cup.png";
import CategoryButton from "../components/HomeCategoryButton";
import DishBox from "../components/DishBox";
import ButtonLoadMore from "../components/ButtonLoadMore";
import { UserStore } from "../store/userStore";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

function Home() {
  const categories = [
    {
      title: "Morning",
      type: "morning",
      icon: KnifeIcon,
    },
    {
      title: "Lunch",
      type: "lunch",
      icon: KnifeIcon,
    },
    {
      title: "Dinner",
      type: "dinner",
      icon: CupIcon,
    },
    {
      title: "Snack",
      type: "snack",
      icon: CupIcon,
    },
  ];

  const [fetchDishes, fetchAchivement, dishes, dishesLoadMore, achivementRate] = UserStore(
    (state) => [
      state.fetchDishes,
      state.fetchAchivement,
      state.dishes,
      state.dishesLoadMore,
      state.achivementRate,
    ],
    shallow
  );
  const renderedDishes = dishes.map((dish, index) => <DishBox dish={dish} key={index} />);

  const fetchUserInfo = async () => {
    const promises = [await fetchDishes(), await fetchAchivement()];
    await Promise.all(promises);
  };
  const handleLoadMore = () => {
    fetchDishes();
  };
  const handleCategoryFilter = (type) => {
    fetchDishes(type);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const renderedCategoryButtons = categories.map((category, index) => {
    return (
      <CategoryButton category={category} key={index} buttonCb={() => handleCategoryFilter(category.type)} />
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
      {dishesLoadMore && (
        <div className="mt-8">
          <ButtonLoadMore buttonText="記録をもっと見る" buttonCb={handleLoadMore} />
        </div>
      )}
    </div>
  );
}

export default Home;
