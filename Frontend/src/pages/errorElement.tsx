import {  useNavigate } from "react-router-dom";

const ErrorElement = ({goTo}:{goTo:string}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fadeIn">
        {/* Error Icon */}
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-red-500/20">
          <span className="text-red-500 text-3xl">⚠️</span>
        </div>

        {/* Message */}
        <h1 className="text-xl font-semibold text-red-400 mb-2">
          Invalid URL
        </h1>
        <p className="text-gray-300 mb-6">
          You have entered a wrong URL. Please go back to previous page.
        </p>

        {/* Button */}
        <button
          onClick={() => {
            navigate(goTo);
          }}
          className="w-full cursor-pointer py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;