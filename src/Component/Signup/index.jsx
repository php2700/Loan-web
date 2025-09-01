import React from "react";
import { Home, Phone, Mail } from "lucide-react";
import bgImg from "../../assets/h1_hero.jpg";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
      return (
            <section className="pt-16 w-full">
                  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#0C3B57] mb-6">
          Sign in to Your Account
        </h2>

        <button
        //   onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 transition"
        >
          <FcGoogle className="w-6 h-6" />
          Sign in with Google
        </button>

        {/* <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div> */}

        {/* <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#0C3B57] text-white font-medium rounded-lg px-4 py-3 cursor-pointer transition"
          >
            Sign In
          </button>
        </form> */}

        {/* <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-[#0C3B57] font-medium ">
            Sign up
          </a>
        </p> */}
      </div>
    </div>

            </section>
      );
};

export default Signup;
