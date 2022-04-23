import Weather from "./Weather";

import Attribution from "./Attribution";
import Footer from "./Footer";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <Attribution />
      </div>
      <Footer />
    </div>
  );
}

export default App;
