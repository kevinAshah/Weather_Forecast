import Weather from "./Weather";
//import FutureWeather from "./FutureWeather";
import Attribution from "./Attribution";
import Footer from "./Footer";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        {/* <FutureWeather /> */}
        <Attribution />
      </div>
      <Footer />
    </div>
  );
}

export default App;
