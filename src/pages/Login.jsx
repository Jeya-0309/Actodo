import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ users, setUsers }) {
    const navigate = useNavigate();
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const [regUser, setRegUser] = useState(true);

  function handleUserInput(event) {
    setEusername(event.target.value);
  }
  function handlePasswordInput(event) {
    setEpassword(event.target.value);
  }
  function checkUser() {
    var userFound = false;
    users.forEach((item) => {
      if (item.username === eusername && item.password === epassword) {
        console.log("Login Successful");
          userFound = true;
          navigate("/landing",{state:{user:eusername}});
      }
    });
    if (userFound === false) {
        console.log("Login failed");
        setRegUser(false);
    }
  }
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {regUser ? (
          <p>I help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-600">Please Sign up Before you Login!</p>
        )}
        <div className="flex flex-col gap-2 my-2">
          <input
            placeholder="username"
            type="text"
            className="w-52 border border-black rounded-md p-1 bg-transparent "
            onChange={handleUserInput}
          ></input>
          <input
            placeholder="password"
            type="text"
            className="w-52 border border-black rounded-md p-1 bg-transparent "
            onChange={handlePasswordInput}
          ></input>
          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="underline text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
