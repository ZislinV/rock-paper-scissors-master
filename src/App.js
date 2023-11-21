import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<FirstStep />} />
            <Route exact path="/secondStep" element={<SecondStep />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
