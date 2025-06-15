
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-neutral-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-5">Oops! Page not found</p>
        <button
          className="bg-gold px-6 py-2 rounded text-neutral-900 font-bold hover:bg-gold/90 transition"
          onClick={() => navigate("/")}
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
