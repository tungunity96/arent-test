import moment from "moment";
import { useState, useCallback, useEffect } from "react";
import { UserStore } from "../store/userStore";
import { shallow } from "zustand/shallow";
import LineChart from "../components/line-chart";
import ButtonSection from "../components/ButtonMoveToSection";
import Excersise from "../components/Excersise";
import DiaryRecord from "../components/DiaryRecord";
import ButtonLoadMore from "../components/ButtonLoadMore";

function MyRecord() {
  const buttons = [
    {
      title: "BODY RECORD",
      subtitle: "自分のカラダの記録",
      image: "MyRecommend-1.jpg",
      elementId: "body-record",
    },
    {
      title: "MY EXERCISE",
      subtitle: "自分の運動の記録",
      image: "MyRecommend-2.jpg",
      elementId: "my-exercise",
    },
    {
      title: "MY DIARY",
      subtitle: "自分の日記",
      image: "MyRecommend-3.jpg",
      elementId: "my-diary",
    },
  ];

  const graphButtons = [
    {
      title: "日",
      onClickCb: () => {
        changeSelectedButton(0);
      },
    },
    {
      title: "週",
      onClickCb: () => {
        changeSelectedButton(1);
      },
    },
    {
      title: "月",
      onClickCb: () => {
        changeSelectedButton(2);
      },
    },
    {
      title: "年",
      onClickCb: () => {
        changeSelectedButton(3);
      },
    },
  ];

  const [fetchDiary, fetchExercises, fetchTracker, diary, exercises, tracker, diaryLoadMore] = UserStore(
    (state) => [
      state.fetchDiary,
      state.fetchExercises,
      state.fetchTracker,
      state.diary,
      state.exercises,
      state.tracker,
      state.diaryLoadMore,
    ],
    shallow
  );
  useEffect(() => {
    const fetchUserInfo = async () => {
      const promises = [await fetchDiary(), await fetchExercises(), await fetchTracker()];
      await Promise.all(promises);
    };
    fetchUserInfo();
  }, []);

  const handleLoadMore = () => {
    fetchDiary();
  };

  const [selectedButton, setSelectedButton] = useState(3);
  const changeSelectedButton = useCallback((index) => {
    setSelectedButton(index);
  }, []);

  const renderedGraphButtons = graphButtons.map((button, index) => {
    return (
      <div
        className={`${
          selectedButton === index ? "bg-primary-300 text-light" : "bg-light text-primary-300"
        } w-[56px] text-center rounded-xl cursor-pointer`}
        key={index}
        onClick={() => {
          button.onClickCb();
        }}
      >
        {button.title}
      </div>
    );
  });
  const renderedButtons = buttons.map((button, index) => <ButtonSection button={button} key={index} />);
  const renderedExercises = exercises.map((exercise, index) => <Excersise exercise={exercise} key={index} />);
  const renderedDiary = diary.map((action, index) => <DiaryRecord record={action} key={index} />);

  const currentDate = moment().format("yyyy.MM.DD");
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-3 gap-10">{renderedButtons}</div>
      <div className="bg-dark-600 text-light px-6 py-4 mt-12" id="body-record">
        <div className="flex items-center">
          <div className="uppercase">
            Body <br />
            Record
          </div>
          <div className="text-2xl ml-6">{currentDate}</div>
        </div>
        <LineChart tracker={tracker} />
        <div className="flex gap-4 mt-2">{renderedGraphButtons}</div>
      </div>
      <div className="bg-dark-600 text-light px-6 pt-4 pb-6 mt-12" id="my-exercise">
        <div className="flex items-center">
          <div className="uppercase">
            My <br />
            Exercise
          </div>
          <div className="text-2xl ml-6">{currentDate}</div>
        </div>
        <div className="grid grid-cols-2 mt-2 gap-x-10 gap-y-2 overflow-y-scroll max-h-[220px] pr-10">
          {renderedExercises}
        </div>
      </div>
      <div className="mt-12" id="my-diary">
        <div className="text-2xl">MY DIARY</div>
        <div className="grid grid-cols-4 mt-2 gap-4">{renderedDiary}</div>
      </div>
      {diaryLoadMore && (
        <div className="mt-8">
          <ButtonLoadMore buttonText="記録をもっと見る" buttonCb={handleLoadMore} />
        </div>
      )}
    </div>
  );
}

export default MyRecord;
