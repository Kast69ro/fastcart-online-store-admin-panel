import login from "#/div.MuiBox-root.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { logIn } from "../../entities/api/log-in/log-in";
import {resetStatus} from '../../entities/slices/log-in/log-in'


export default function LogIn() {
  const statusCode = useSelector((state) => state.login.statusCode);
  const errorStatus = useSelector((state) => state.login.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (statusCode === 200) {
      navigate("/");
      dispatch(resetStatus());
    } else if (statusCode && statusCode !== 200) {
      setShowError(true);
      toast.error("Invalid credentials");
    }
  }, [statusCode, navigate, dispatch]);

  const handleAdd = () => {
    if (!userName || !userPassword) {
      toast.warning("Please fill all fields");
      return;
    }
    dispatch(logIn({ userName, password: userPassword }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl items-center ">
        <div className="md:w-1/2 hidden md:block">
          <img src={login} alt="Login visual" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In</h2>

          <div className="space-y-4">
            <input
              type="email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          

          <div className="flex justify-center items-center mt-4">
            <p  className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Log In
          </button>

          <Toaster richColors position="bottom-right" />
        </div>
      </div>
    </div>
  );
}
