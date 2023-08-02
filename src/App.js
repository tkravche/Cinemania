import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Routes>
      <Route path = "/" element={<WelcomePage/>}/>
      <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoute>
                  <SigninPage />
                </PublicRoute>
              }
            />
      <Route path = "/home" element={<HomePage/>}/>
      <Route path = "/catalog" element={<CatalogPage/>}/>
          </Routes>
  );
}

export default App;
