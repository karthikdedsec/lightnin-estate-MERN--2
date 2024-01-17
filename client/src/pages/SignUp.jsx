import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //form data handler
  const handleChange = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  //handle submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(false);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  // console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
        <input
          onChange={handleChange}
          id="username"
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading.." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
export default SignUp;
