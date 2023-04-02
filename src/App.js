import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import PricePage from "./pages/PricePage/PricePage";
import PortpholioPage from "./pages/PortpholioPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFound from "./components/NotFound/NotFound";

import { portpholioList } from "./utils/portpholioList";

import "./App.scss";

function App() {
  const location = useLocation();
  const [pathNamePortpholio, setPathNamePortpholio] = useState("");

  // console.log("location", location);
  const curPathNamePortpholio = () => {
    if (portpholioList.includes(location.pathname.slice(1)))
      return setPathNamePortpholio(location.pathname.slice(1));
  };

  useEffect(() => {
    curPathNamePortpholio();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PreviewPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path={pathNamePortpholio}
            element={<PortpholioPage pathNamePortpholio={pathNamePortpholio} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
