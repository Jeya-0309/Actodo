import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([
    {
      username: "jeya",
      password: "123",
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login users={users} setUsers={setUsers} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup users={users} setUsers={setUsers} />}
        ></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
