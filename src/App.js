import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GaebalPage from "./pages/GaebalPage";
import GaebalDetailPage from "./pages/GaebalDetailPage";
import GaebalDetailGiwonPage from "./pages/GaebalDetailGiwonPage";
import SearchPage from "./pages/SearchPage";
import BookmarkPage from "./pages/BookmarkPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/gaebal" element={<GaebalPage />} />
      <Route path="/gaebal/:id" element={<GaebalDetailPage />} />
      <Route path="/gabalDetailGiwon" element={<GaebalDetailGiwonPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
    </Routes>
  );
};

export default App;
