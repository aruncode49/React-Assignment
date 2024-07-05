import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <main>
      <Routes>
        {/* first page */}
        <Route index element={<Home />} />
        {/* second page */}
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
}

export default App;
