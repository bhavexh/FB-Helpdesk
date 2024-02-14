import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { ConnectPage } from "./pages/connectPage";
import { DisconnectPage } from "./pages/DisconnectPage";
import { Messages } from "./pages/Messages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/disconnect" element={<DisconnectPage />} />
        <Route path="/messages" element={<Messages/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
