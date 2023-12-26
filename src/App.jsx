import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const baseUrl = "https://nathanjtye.com/taskManager/"
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage baseUrl={baseUrl} />} />
          <Route exact path="/boards" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
