import { Routes, Route, Link } from "react-router-dom";

import "./App.scss";
import Layout from "./pages/Layout/Layout";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import PricePage from "./pages/PricePage/PricePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PreviewPage />} />
          <Route path="/price" element={<PricePage />} />
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
