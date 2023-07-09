import moment from "moment";

function DiaryRecord({ record }) {
  const date = moment(record.createdAt).format("yyyy.MM.DD");
  const time = moment(record.createdAt).format("HH:mm");
  return (
    <div className="border-2 border-dark-600 aspect-square p-4 flex flex-col">
      <div className="text-lg">{date}</div>
      <div className="text-lg">{time}</div>
      <div>{record.title}</div>
      <div className="grow">{record.content}</div>
    </div>
  );
}

export default DiaryRecord;
