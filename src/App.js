import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <Routes>
      <Route path = "/home" element={<HomePage/>}/>
      <Route path = "/catalog" element={<CatalogPage/>}/>
          </Routes>
  );
}

export default App;
