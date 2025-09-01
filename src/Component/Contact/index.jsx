import React from "react";
import { Home, Phone, Mail } from "lucide-react";
import bgImg from "../../assets/h1_hero.jpg";

const Contact = () => {
      return (
            <section className="pt-16 w-full">
                  <div
                        className="h-[50vh] flex items-center justify-center bg-grid"
                        style={{ backgroundImage: `url(${bgImg})` }}
                  >
                        <h1 className="text-6xl font-bold text-gray-800">
                              Contact Us
                        </h1>
                  </div>
                  <div className="bg-gray-200 p-20">
                        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                              <div>
                                    <h2 className="text-2xl font-bold text-[#0C3B57] mb-6">
                                          Get in Touch
                                    </h2>
                                    <form className="space-y-4">
                                          <textarea
                                                placeholder="Enter Message"
                                                className="w-full border border-[#0C3B57] rounded-md p-3 focus:ring-2 focus:ring-[#0C3B57] outline-none h-32"
                                          ></textarea>

                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input
                                                      type="text"
                                                      placeholder="Enter your name"
                                                      className="w-full border border-[#0C3B57] rounded-md p-3 focus:ring-2 focus:ring-[#0C3B57] outline-none"
                                                />
                                                <input
                                                      type="email"
                                                      placeholder="Email"
                                                      className="w-full border border-[#0C3B57] rounded-md p-3 focus:ring-2 focus:ring-[#0C3B57] outline-none"
                                                />
                                          </div>

                                          <input
                                                type="text"
                                                placeholder="Enter Subject"
                                                className="w-full border border-[#0C3B57] rounded-md p-3 focus:ring-2 focus:ring-[#0C3B57] outline-none"
                                          />

                                          <button
                                                type="submit"
                                                className="px-6 py-3 border border-[#0C3B57] text-[#0C3B57] font-medium rounded-md hover:bg-blue-500 hover:text-white transition"
                                          >
                                                SEND
                                          </button>
                                    </form>
                              </div>

                              <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                          <Home className="w-6 h-6 text-gray-600" />
                                          <div>
                                                <h4 className="font-semibold text-gray-900">
                                                      Buttonwood, California.
                                                </h4>
                                                <p className="text-gray-600">
                                                      Rosemead, CA 91770
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                          <Phone className="w-6 h-6 text-gray-600" />
                                          <div>
                                                <h4 className="font-semibold text-gray-900">
                                                      +1 253 565 2365
                                                </h4>
                                                <p className="text-gray-600">
                                                      Mon to Fri 9am to 6pm
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                          <Mail className="w-6 h-6 text-gray-600" />
                                          <div>
                                                <h4 className="font-semibold text-gray-900">
                                                      support@colorlib.com
                                                </h4>
                                                <p className="text-gray-600">
                                                      Send us your query
                                                      anytime!
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Contact;
