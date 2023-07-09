import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import moment from "moment";

function CircularProgressWithLabel(props) {
  const currentDate = moment().format("DD/MM");

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress sx={{ color: "#ffffff" }} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-light flex items-end">
          <div className="drop-shadow-lg drop-shadow-primary-400">{currentDate}</div>
          <div className="text-2xl ml-1">{Math.round(props.value)}%</div>
        </div>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
