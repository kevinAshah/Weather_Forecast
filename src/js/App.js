import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import Attribution from "./Attribution";
import Footer from "./Footer";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentWeather />
        <FutureWeather />
        <Attribution />
      </div>
      <Footer />
    </div>
  );
}

export default App;
