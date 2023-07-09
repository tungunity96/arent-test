import Divider from "@mui/material/Divider";

function Excersise({ exercise }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="text-xs">●</div>
          <div className="ml-4">
            <div>{exercise.title}</div>
            <div className="text-primary-300 font-inter">{exercise.burnedCalo}kcal</div>
          </div>
        </div>
        <div className="text-lg text-primary-300 font-inter">{exercise.duration}</div>
      </div>
      <Divider sx={{ bgcolor: "gray" }} />
    </div>
  );
}

export default Excersise;
