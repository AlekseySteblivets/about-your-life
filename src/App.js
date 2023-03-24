import { Routes, Route, useParams, useLocation } from "react-router-dom";

import "./App.scss";
import Layout from "./pages/Layout/Layout";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import PricePage from "./pages/PricePage/PricePage";
import WeddingPage from "./pages/WeddingPage/WeddingPage";
import CouplesPage from "./pages/CouplesPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  // const qwe = useParams();
  // console.log("qwe", qwe);
  const location = useLocation();
  console.log("locationApp", location);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PreviewPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/couples" element={<CouplesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<PreviewPage />} />
//   <Route path="/price" element={<PricePage />} />
// </Routes>;
