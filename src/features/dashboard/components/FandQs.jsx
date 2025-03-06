import { ChevronDown } from "lucide-react";
import React from "react";

let data = [
  {
    name: "Can I learn Software Developmenet in 30days",
    description:
      "Learning software development in 30 days can provide you with a basic understanding, but it's a complex field that typically requires more time to become proficient. Mastery and expertise come with continuous learning and practice.",
  },
  {
    name: "Will I receive a certificate upon completing this free software development course?",
    description:
      "Yes, Skillup will provide a certificate upon completing this free software development course. This certificate can serve as evidence of your participation and achievement in the course, which may be valuable for your career and educational pursuits.",
  },
  {
    name: "Are there any prerequisities for enrolling in this free software development course",
    description:
      "This free software development course does not have any prerequisites, it is open to individuals without any prior software development experience or educational background. You can learn software development online for free.",
  },
  {
    name: "Whats is the duration of my access to the course",
    description:
      "You will be granted access to the free software development course materials for a period of 90 days. This means you'll have three months to complete the course and make the most of the learning resources provided.",
  },
  {
    name: "Can I share this free software developer course with my coworkers or team",
    description:
      "You are welcome to share this free software developer course with your coworkers or team members. It's a great opportunity to collaborate and learn together, enhancing your collective knowledge and skills in software development. Sharing knowledge within your team can foster a collaborative learning environment and potentially lead to more effective teamwork on software development projects.",
  },
  {
    name: "Whats is the free software developemnt course duration",
    description:
      "The free software development course is designed to be completed within a relatively short timeframe, with a total duration of just 1 hour. This concise duration makes it convenient for individuals with busy schedules or those looking for a quick introduction to software development concepts and practices.",
  },
  {
    name: "How difficult is the free software development training",
    description:
      "The free software development training is very easy. It is designed to provide a beginner-friendly introduction to software development, making it accessible for those who are new to the field. This course is structured to simplify complex concepts and ensure a smooth learning experience for participants.",
  },
  {
    name: "Is software developmenet easy for beginners",
    description:
      "Software development can be easy for beginners. It might seem challenging initially, but with the right support and a willingness to learn, many people new to the field find it manageable and enjoyable as they start with the basics and progress.",
  },
  {
    name: "Is this free software developer course suitable for both beginners and experienced developer",
    description:
      "This free software developer course is good for both beginners and experienced developers. It's made to work for people who are just starting and for those who already have some experience.",
  },
];

const FandQs = () => {
  return (
    <div className="w-full px-20 py-8">
      <div className="w-[60%] flex flex-col gap-3">
        <h2 className="text-xl text-gray-800 font-semibold">FandQs</h2>
        <div className=" rounded-md overflow-hidden">
          {data?.map((each, index) => (
            <div className="w-full bg-blue-100 p-4 border-b border-gray-300 border-t">
              <div className="w-full flex items-center justify-between">
                <span className="text-base font-semibold">
                  yhdlkj jsaoiudjad sahdliusa ks
                </span>
                <button>
                  <ChevronDown />
                </button>
              </div>
              <span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FandQs;
