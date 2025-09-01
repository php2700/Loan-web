import React from "react";
import { Briefcase, Building2, Home, ThumbsUp } from "lucide-react"; // icons
import bgImg from "../../assets/h1_hero.jpg";

const Services = () => {
      const services = [
            {
                  icon: (
                        <Briefcase
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Business Loan",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <Building2
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Commercial Loans",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <Home
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Construction Loans",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <ThumbsUp
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Business Loan",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <Briefcase
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Business Loan",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <Building2
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Commercial Loans",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <Home
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Construction Loans",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
            {
                  icon: (
                        <ThumbsUp
                              size={48}
                              className="text-[#0C3B57] mx-auto mb-4"
                        />
                  ),
                  title: "Business Loan",
                  desc: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            },
      ];

      return (
            <section className="w-full  pt-16">
                  <div
                        className="h-[50vh] flex items-center justify-center bg-grid"
                        style={{ backgroundImage: `url(${bgImg})` }}
                  >
                        <h1 className="text-6xl font-bold text-gray-800">
                              Services
                        </h1>
                  </div>
                  <div className="bg-gray-200">
                        <div className="max-w-7xl py-20 mx-auto  text-center">
                              <p className="text-[#0C3B57] font-semibold text-xl mb-2">
                                    Services that we are providing
                              </p>
                              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                                    High Performance Services <br /> For All
                                    Industries.
                              </h2>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {services.map((service, index) => (
                                          <div
                                                key={index}
                                                className="bg-white shadow-xl rounded-lg p-8 hover:shadow-xl transition"
                                          >
                                                {service.icon}
                                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                      {service.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                      {service.desc}
                                                </p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Services;
