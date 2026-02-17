import "./App.css";
import AppRouter from "./routes/AppRouter";
import ToursState from "./context/Tours/ToursState";
function App() {
  return (
    <ToursState>
      <AppRouter />
    </ToursState>
  );
}

export default App;
