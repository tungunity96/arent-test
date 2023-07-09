import Router from "./router";
import LoadingOverlay from "./components/LoadingOverlay";
function App() {
  return (
    <>
      <LoadingOverlay />
      <Router />
    </>
  );
}
export default App;
