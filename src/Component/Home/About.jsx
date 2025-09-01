import React from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
      const navigate=useNavigate()
         const handleSignUp=()=>{
            navigate('/apply')
      }
      return (
            <section className="w-full bg-white py-16">
                  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                        <div className="flex justify-center md:justify-end">
                              <img
                                    src="https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg"
                                    alt="Team working"
                                    className="w-full h-auto rounded-lg shadow-lg"
                              />
                        </div>
                        <div>
                              <p className="text-[#0C3B57] text-xl font-semibold mb-2">
                                    About Our Company
                              </p>
                              <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
                                    Building a Brighter financial <br />
                                    Future & Good Support.
                              </h2>
                              <p className="text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, oeiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim
                                    minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                              </p>
                              <p className="text-gray-600 mb-6">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, oeiusmod tempor incididunt
                                    ut labore et dolore magna aliqu.
                              </p>
                              <button 
                              // onClick={handleSignUp} 
                              className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0C3B57] transition">
                                    APPLY FOR LOAN
                              </button>
                        </div>
                  </div>
            </section>
      );
};

export default AboutSection;
