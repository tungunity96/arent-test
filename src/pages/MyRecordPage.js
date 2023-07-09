import "../styles/MyRecordPage.css";
import moment from "moment";
import LineChart from "../components/line-chart";
import { useState, useCallback } from "react";
import { Divider } from "@mui/material";

function MyRecord() {
  const buttons = [
    {
      title: "BODY RECORD",
      subtitle: "自分のカラダの記録",
      image: "MyRecommend-1.jpg",
      onClickCb: () => {},
    },
    {
      title: "MY EXERCISE",
      subtitle: "自分の運動の記録",
      image: "MyRecommend-2.jpg",
      onClickCb: () => {},
    },
    {
      title: "MY DIARY",
      subtitle: "自分の日記",
      image: "MyRecommend-3.jpg",
      onClickCb: () => {},
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
  const exercises = [
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
    {
      title: "家事全般（立位・軽い)",
      burnedCalo: 26,
      duration: "10 min",
    },
  ];

  const diary = [
    {
      createdAt: moment.now(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      createdAt: moment.now(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      createdAt: moment.now(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      createdAt: moment.now(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
  ];

  const [selectedButton, setSelectedButton] = useState(3);
  const changeSelectedButton = useCallback((index) => {
    setSelectedButton(index);
  }, []);

  const renderedButtons = buttons.map((button) => {
    const buttonBgImage = {
      backgroundImage: `url('/img/${button.image}')`,
      backgroundSize: "cover",
    };
    return (
      <div className="aspect-square bg-primary-300" key={button.title}>
        <div className="w-full h-full p-6 relative">
          <div className="w-full h-full bg-black">
            <div
              className="w-full h-full mix-blend-luminosity opacity-50"
              style={buttonBgImage}
            ></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <div className="text-2xl text-primary-300 tracking-wider">
              {button.title}
            </div>
            <div className="w-[160px] h-[24px] bg-primary-400 text-center mt-2 text-light">
              {button.subtitle}
            </div>
          </div>
        </div>
      </div>
    );
  });

  const renderedGraphButtons = graphButtons.map((button, index) => {
    return (
      <div
        className={`${
          selectedButton === index
            ? "bg-primary-300 text-light"
            : "bg-light text-primary-300"
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

  const renderedExercises = exercises.map((exercise, index) => {
    return (
      <div>
        <div className="flex justify-between" key={index}>
          <div className="flex">
            <div>●</div>
            <div className="ml-2">
              <div>{exercise.title}</div>
              <div className="text-primary-300">{exercise.burnedCalo}kcal</div>
            </div>
          </div>
          <div className="text-lg">{exercise.duration}</div>
        </div>
        <Divider sx={{ bgcolor: "gray" }} />
      </div>
    );
  });

  const renderedDiary = diary.map((action) => {
    const date = moment(action.createdAt).format("yyyy.MM.DD");
    const time = moment(action.createdAt).format("HH:mm");
    return (
      <div className="border-2 border-dark-600 aspect-square p-4 flex flex-col">
        <div className="text-lg">{date}</div>
        <div className="text-lg">{time}</div>
        <div>{action.title}</div>
        <div className="grow">{action.content}</div>
      </div>
    );
  });

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
        <LineChart />
        <div className="flex gap-4 mt-2">{renderedGraphButtons}</div>
      </div>
      <div
        className="bg-dark-600 text-light px-6 pt-4 pb-6 mt-12"
        id="my-exercise"
      >
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
      <div className="bg-gradient-to-r to-primary-400 from-primary-300 w-[296px] h-[56px] rounded-md flex justify-center items-center mx-auto mt-8 cursor-pointer">
        <div className="text-light">記録をもっと見る</div>
      </div>
    </div>
  );
}

export default MyRecord;
