import { useNavigate } from "react-router-dom";
import { PATH_URL } from "../../constants/pathUrl";

const UserRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div className="text-2xl text-center">User Register Page</div>
      <button
        type="button"
        onClick={() => navigate(PATH_URL.LOGIN_URL)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Đi đến login
      </button>
    </div>
  );
};
export default UserRegister;
