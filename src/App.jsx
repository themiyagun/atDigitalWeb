import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./Body";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
