import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const changeSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <BrowserRouter>
      <Header changeSidebar={changeSidebar} />
      {sidebar && <Sidebar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
