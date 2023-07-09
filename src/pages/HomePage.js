import LineChart from "../components/LineChart.js";
import KnifeIcon from "../assets/icons/icon_knife.png";
import CupIcon from "../assets/icons/icon_cup.png";
import CategoryButton from "../components/HomeCategoryButton";
import DishBox from "../components/DishBox";
import ButtonLoadMore from "../components/ButtonLoadMore";
import { UserStore } from "../store/userStore";
import { shallow } from "zustand/shallow";
import { useEffect, useCallback } from "react";
import CircularProgressWithLabel from "../components/CircularProgressWithLabel";

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
  const [fetchDishes, fetchAchivement, fetchTracker, dishes, dishesLoadMore, tracker] = UserStore(
    (state) => [
      state.fetchDishes,
      state.fetchAchivement,
      state.fetchTracker,
      state.dishes,
      state.dishesLoadMore,
      state.tracker,
    ],
    shallow
  );
  const renderedDishes = dishes.map((dish, index) => <DishBox dish={dish} key={index} />);

  const fetchUserInfo = useCallback(async () => {
    const promises = [await fetchDishes(), await fetchAchivement(), await fetchTracker()];
    await Promise.all(promises);
  }, [fetchDishes, fetchAchivement, fetchTracker]);

  const handleLoadMore = () => {
    fetchDishes();
  };
  const handleCategoryFilter = (type) => {
    fetchDishes(type);
  };

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const renderedCategoryButtons = categories.map((category, index) => {
    return (
      <CategoryButton category={category} key={index} buttonCb={() => handleCategoryFilter(category.type)} />
    );
  });

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="w-full h-[312px] home-progress-section flex flex-col justify-center items-center">
          <CircularProgressWithLabel value={75} size={180} thickness={1} />
        </div>
        <div className="col-span-2 w-full h-[312px] bg-dark-600 flex flex-row justify-center py-6 px-10">
          <LineChart tracker={tracker} />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-row justify-center gap-10 py-6">{renderedCategoryButtons}</div>
        <div className="grid grid-cols-4 gap-4">{renderedDishes}</div>
        {dishesLoadMore && (
          <div className="mt-8">
            <ButtonLoadMore buttonText="記録をもっと見る" buttonCb={handleLoadMore} />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
