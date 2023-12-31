import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./routes/home";
import { AboutUs } from "./routes/aboutus";
import { Showcase } from "./routes/showcase";
import { Stock } from "./routes/stock";
import { Service } from "./routes/service";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/service"} element={<Service />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/showcase"} element={<Showcase />} />
        <Route path={"/stock"} element={<Stock />} />
      </Routes>
    </>
  );
}

export default App;
