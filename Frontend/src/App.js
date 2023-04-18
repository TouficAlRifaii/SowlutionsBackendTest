import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/NavBar";
import Chats from "./components/Chats";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const baseURL = "http://127.0.0.1:8000/";
  const [users, setUsers] = useState();
  
  // useEffect(() => {
  //   getUsers();
  //   console.log(users);
  // }, [users]);
  // console.log(JSON.parse(localStorage.getItem("user")))
  return (
    <div className="App">
      <Router>
        {/* <MyNavbar user={user} users={users} />
        <Chats user={user} users={users} /> */}
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />

          <Route
            exact
            path="/"
            element={
              <Chats
                user={JSON.parse(localStorage.getItem("user"))}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
