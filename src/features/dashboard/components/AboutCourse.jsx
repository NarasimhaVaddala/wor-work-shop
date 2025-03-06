import React, { useState } from "react";

const firstData = [
  {
    boldText: "Programming Fundamentals: ",
    normalText:
      "Acquire the basic knowledge of coding, including variables, data types, and control structures. Dive into popular programming languages to build a strong foundation.",
  },
  {
    boldText: "Software Development Lifecycle:",
    normalText:
      " Explore the key stages of software development, from initial requirements gathering to final testing and maintenance.",
  },
  {
    boldText: "Object-Oriented Programming (OOP):",
    normalText:
      "Learn the principles of OOP, a foundation of modern software development.",
  },
  {
    boldText: "Data Structures and Algorithms:",
    normalText:
      "Grasp fundamental data structures and algorithms to write efficient and optimized code.",
  },
  {
    boldText: "Version Control:",
    normalText:
      "Learn how to manage and track changes in your code using tools like Git for effective collaboration.",
  },
  {
    boldText: "Debugging and Troubleshooting:",
    normalText:
      "Develop essential skills to identify and fix common programming errors.",
  },
  {
    boldText: "Software Development Tools:",
    normalText:
      "Get familiar with the tools and environments used by professionals in the industry.",
  },
  {
    boldText: "Testing and Quality Assurance:",
    normalText:
      "Learn methods for ensuring the reliability and functionality of your software.",
  },
  {
    boldText: "Documentation and Coding Standards:",
    normalText:
      " Understand the importance of clear code documentation and following industry coding standards.",
  },
  {
    boldText: "Project Management and Teamwork:",
    normalText:
      " Learn about project management and teamwork skills, vital for success in real-world development projects.",
  },
];

const secondData = [
  {
    boldText: "Establish a Robust Foundation:",
    normalText:
      "Strenghten your knowledge of software development principles and practices.",
  },
  {
    boldText: "Launch Your Career with Confidence:",
    normalText:
      "Acquire the skills required to excel in the competitive world of software development.",
  },
  {
    boldText: "Gain Industry-Ready Know-How:",
    normalText: "Master the tools and techniques used by top professionals.",
  },
  {
    boldText: "Elevate Your Problem-Solving Prowess:",
    normalText:
      "Develop the understanding to conquer complex challenges with finesse.",
  },
  {
    boldText: "Teamwork Excellence:",
    normalText:
      " Learn the art of effective collaboration, a pivotal skill for success in the software development domain.",
  },
];

const howToBuildCareer = [
  {
    boldText: "Practice and Portfolio Building: ",
    normalText:
      "Apply your newfound skills through personal or open-source projects to create a strong portfolio.",
  },
  {
    boldText: "Networking:",
    normalText:
      "Connect with industry professionals by attending meetups and engaging in online forums to expand your network.",
  },
  {
    boldText: "Continuous Learning:",
    normalText:
      "Consider pursuing further education in software engineering or computer science to deepen your knowledge.",
  },
  {
    boldText: "Job Search:",
    normalText:
      "Initiate your search for entry-level roles such as software developer, junior programmer, or quality assurance tester.",
  },
  {
    boldText: "Internships:",
    normalText:
      "Seek internship opportunities to gain practical experience and learn from seasoned experts.",
  },
];
const AboutCourse = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <div className="w-full px-20 py-8">
      <div className="w-[60%] flex flex-col gap-3">
        <h2 className="text-xl text-gray-500 font-semibold">
          About The Course:
        </h2>
        <div className="w-full p-8 rounded-lg shadow-custom flex flex-col gap-4">
          <p className="text-base leading-6">
            The free software development course provides students with a
            complete introduction to the essential principles, concepts, and
            practices of software development. This course is designed to build
            a strong foundation for individuals interested in pursuing a career
            in software engineering or gaining a quality understanding of the
            software development process.
          </p>
          <h3 className="text-lg text-gray-900 font-semibold">
            Topics Covered:
          </h3>
          {isDisplay && (
            <>
              {firstData?.map((each, index) => (
                <ul key={index}>
                  <li>
                    <span className="text-base font-semibold">
                      {each?.boldText}{" "}
                    </span>
                    <span>{each.normalText}</span>
                  </li>
                </ul>
              ))}
              <h3 className="text-xl text-gray-900 font-semibold mt-6">
                Benefits of Completing the Course:
              </h3>
              {secondData?.map((each, index) => (
                <ul key={index}>
                  <li>
                    <span className="text-base font-semibold">
                      {each?.boldText}{" "}
                    </span>
                    <span>{each.normalText}</span>
                  </li>
                </ul>
              ))}

              <h3 className="text-xl text-gray-900 font-semibold mt-6">
                How to Build a Career After Completing the Course:
              </h3>
              <p className="text-base leading-6">
                After completing our free software development course, you can
                take the following steps to build a successful career:
              </p>
              {howToBuildCareer?.map((each, index) => (
                <ul key={index}>
                  <li>
                    <span className="text-base font-semibold">
                      {each?.boldText}{" "}
                    </span>
                    <span>{each.normalText}</span>
                  </li>
                </ul>
              ))}
            </>
          )}
          <span
            onClick={() => setIsDisplay(!isDisplay)}
            className="text-base font-semibold text-blue-500 cursor-pointer"
          >
            {isDisplay ? "Close" : "Read More"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
