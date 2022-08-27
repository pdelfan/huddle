import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./auth/protected-route";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/library"
          element={<ProtectedRoute component={Library} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
