import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function Signup({ users, setUsers }) {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState();
    const [epassword, setEpassword] = useState();
      function handleUserInput(event) {
        setEusername(event.target.value)
    }
    function handlePasswordInput(event) {
        setEpassword(event.target.value)
    }
    function addUser() {
        setUsers([...users, { username: eusername, password: epassword }]);
        navigate("/");
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input placeholder="username" type="text" className="w-52 border border-black rounded-md p-1 bg-transparent " onChange={handleUserInput}></input>
                    <input placeholder="password" type="text" className="w-52 border border-black rounded-md p-1 bg-transparent " onChange={handlePasswordInput}></input>
                    <input placeholder="confirm password" type="text" className="w-52 border border-black rounded-md p-1 bg-transparent "></input>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link to="/" className="underline text-blue-600">Login</Link></p>
                </div>
            </div>
        </div>
    )
    
}
export default Signup;