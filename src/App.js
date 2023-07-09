import Router from "./router";
import LoadingOverlay from "./components/LoadingOverlay";
function App() {
  return (
    <section className="font-hiragino">
      <LoadingOverlay />
      <Router />
    </section>
  );
}
export default App;
