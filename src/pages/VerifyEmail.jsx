import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/verify.png";
import { BounceLoader } from "react-spinners";
import { MdCancel } from "react-icons/md";

const VerifyEmail = () => {
  const { token } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("verifying");
  const checkToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setErrorMsg("Email Verification Failed");
      setStatus("error");
    }
  };

  useEffect(() => {
    // checkToken();
  }, []);
  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <BounceLoader className="mx-auto my-2" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3 font-mona">
            Email Verifying....
          </h1>
          <p className="text-[#666] font-mona">please wait</p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <img src={icon} alt="verify" className="block mx-auto" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3 font-mona">
            Verification succesful
          </h1>
          <p className="text-[#666] mb-4 font-mona">
            Your account has been verified succesfully
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl text-white bg-[#0c0c0c] h-[56px] font-mona">
              Proceed to login
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
        <MdCancel size={80} className="text-red-500 mx-auto" />
        <h1 className="text-xl lg:text-[30px] font-semibold my-3 font-mona">
          Verification failed
        </h1>
        <p className="text-[#666] mb-4 font-mona">
          Invalid or expired token. Please try again.
        </p>
        <Link>
          <button className="w-full font-semibold rounded-xl text-white bg-[#0c0c0c] h-[56px] font-mona">
            Resend verification Mail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
