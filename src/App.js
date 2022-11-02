import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GaebalPage from "./pages/GaebalPage";
import GaebalDetailPage from "./pages/GaebalDetailPage";
import GaebalDetailGiwonPage from "./pages/GaebalDetailGiwonPage";
import SearchPage from "./pages/SearchPage";
import { useState } from "react";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            onChangeKeyword={onChangeKeyword}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        }
      />
      <Route
        path="/gaebal"
        element={
          <GaebalPage
            onChangeKeyword={onChangeKeyword}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        }
      />
      <Route
        path="/gaebal/:id"
        element={
          <GaebalDetailPage
            onChangeKeyword={onChangeKeyword}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        }
      />
      <Route
        path="/gabalDetailGiwon"
        element={
          <GaebalDetailGiwonPage
            onChangeKeyword={onChangeKeyword}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        }
      />
      <Route
        path="/search"
        element={
          <SearchPage
            onChangeKeyword={onChangeKeyword}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        }
      />
    </Routes>
  );
};

export default App;
