import React, { useCallback, useContext, useState } from "react";
import { Home, Phone, Mail } from "lucide-react";
import bgImg from "../../assets/h1_hero.jpg";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

const Signup = () => {
  const navigate = useNavigate();
  const { setLoanToken } = useContext(UserContext);
  const [referralCode, setReferralCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleReferralChange = useCallback((e) => {
    setReferralCode(e.target.value);
  }, []);

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await axios
        .post(`${import.meta.env.VITE_APP_API_BASE_URL}api/user/google-login`, {
          accessToken: tokenResponse?.access_token,
        })
        .then((res) => {
          setLoanToken(res?.data?.token);
          localStorage.setItem("loanToken", res?.data?.token);
          localStorage.setItem("userId", res.data?.user?._id);
          if (!res?.data?.isAlreadyCreated) {
            setShowModal(true);
          } else {
            navigate("/apply");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onError: () => {
      console.log("login failed");
    },
  });

  const handleSubmit = useCallback(() => {
    const userId = localStorage.getItem("userId");
    setShowModal(false);
    axios
      .patch(
        `${import.meta.env.VITE_APP_API_BASE_URL}api/user/update-refferBy`,
        {
          _id: userId,
          referredBy: referralCode,
        }
      )
      .then((res) => {
        navigate("/apply");
      })
      .catch((error) => {
        console.log(error, "Referral update error");
      });
  }, []);

  return (
    <section className="pt-16 w-full">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-[#0C3B57] mb-6">
            Sign in to Your Account
          </h2>

          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <FcGoogle className="w-6 h-6" />
            Sign in with Google
          </button>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Referral Code</h2>
                <p className="mb-4">Do you have a referral code?</p>

                <input
                  type="text"
                  placeholder="Enter referral code"
                  value={referralCode}
                  onChange={handleReferralChange}
                  className="w-full border rounded px-3 py-2 mb-4"
                />

                <div className="flex justify-between">
                  <button
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={() => {
                      setShowModal(false);
                      navigate("/apply");
                    }}
                  >
                    Skip
                  </button>

                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Signup;
