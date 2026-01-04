import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Signup;
