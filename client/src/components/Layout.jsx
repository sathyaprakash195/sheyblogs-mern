/* eslint-disable react/prop-types */
import {Toaster} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Layout(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-800 text-white p-5">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          SheyBlogs - MERN
        </h1>
      </div>
      <div className="p-5">{props.children}</div>
    </div>
  );
}

export default Layout;
