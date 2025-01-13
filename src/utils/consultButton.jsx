import { useNavigate } from "react-router-dom";

const ConsultButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/contact-us")}
      className="bg-blue-600 text-white transition duration-300 px-4 md:px-9 py-3 rounded-full shadow-md hover:bg-blue-700"
    >
      Consult Now
    </button>
  );
};

export default ConsultButton;
