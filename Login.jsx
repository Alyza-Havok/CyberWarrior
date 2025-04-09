import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const correctPasscode = "cyber2025";

  const handleLogin = () => {
    if (passcode === correctPasscode) {
      navigate("/dashboard");
    } else {
      setError("Invalid passcode.");
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-white flex flex-col items-center justify-center font-techno">
      <h1 className="text-3xl mb-6">Enter CyberWarrior Mode</h1>
      <input
        type="password"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
        placeholder="Enter Passcode"
        className="bg-black border border-cyber-neon text-cyber-neon p-3 rounded-md text-center"
      />
      <button
        onClick={handleLogin}
        className="mt-4 bg-cyber-neon text-black px-6 py-2 rounded hover:bg-white transition"
      >
        Unlock Access
      </button>
      {error && <p className="text-cyber-danger mt-3">{error}</p>}
    </div>
  );
};

export default Login;