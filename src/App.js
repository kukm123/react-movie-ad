import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
  <div className="root-wrap">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
  </div>
  );
}

export default App;
