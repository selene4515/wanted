import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GaebalPage from "./pages/GaebalPage";
import GaebalDetailPage from "./pages/GaebalDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/gaebal" element={<GaebalPage />} />
      <Route path="/gaebalDetail" element={<GaebalDetailPage />} />
    </Routes>
  );
};

export default App;
