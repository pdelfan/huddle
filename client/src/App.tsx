import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./auth/protected-route";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import Space from "./pages/Space/Space";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/library"
          element={<ProtectedRoute component={Library} />}
        />
        <Route path="/space" element={<ProtectedRoute component={Space} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
