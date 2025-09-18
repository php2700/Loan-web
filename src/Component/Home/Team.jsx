import React from "react";
import { Facebook, Twitter, Globe } from "lucide-react";
import bgImgTeam from "../../assets/section_bg.jpg";
import member1 from "../../assets/teamMember1.jpg";
import member2 from "../../assets/teamMember2.jpg";
import member3 from "../../assets/teamMember3.jpg";
import member4 from "../../assets/teamMember4.jpg";

const Team = () => {
  const members = [
    {
      name: "Rajesh Kumar",
      role: "Volunteer leader",
      img: member1,
    },
    {
      name: "Amit Sharma",
      role: "Volunteer leader",
      img: member2,
    },
    {
      name: "Rohan Verma",
      role: "Volunteer leader",
      img: member3,
    },
    {
      name: "Arjun Singh",
      role: "Volunteer leader",
      img: member4,
    },
  ];

  return (
    <section
      className="py-16 bg-white"
      style={{ backgroundImage: `url(${bgImgTeam})` }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#0C3B57] text-xl font-medium mb-2">
          Our Loan Section Team Members
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Take a look to our professional team members.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                {/* <p className="text-sm text-gray-500">{member.role}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
