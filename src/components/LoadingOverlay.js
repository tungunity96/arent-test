import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { UtilityStore } from "../store/utilityStore";

function LoadingOverlay() {
  const isLoading = UtilityStore((state) => state.isLoading);
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <div className="flex items-center">
        <CircularProgress color="inherit" />
        <div className="text-xl font-semibold ml-3">Loading...</div>
      </div>
    </Backdrop>
  );
}

export default LoadingOverlay;
