import Booking from "./components/Booking/Booking";
import HeaderPart from "./components/HeaderPart/HeaderPart";
import "bootstrap/dist/css/bootstrap.min.css";
import MainBody from "./components/MainBody/MainBody";

function App() {
  return (
    <div className="App">
      <HeaderPart />
      <Booking />
      <MainBody />
    </div>
  );
}

export default App;
