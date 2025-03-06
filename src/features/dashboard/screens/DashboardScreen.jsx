import React, { useEffect, useState } from "react";
import CourseWithTick from "../components/CourseWithTick";
import WhoShouldLearnCard from "../components/WhoShouldLearnCard";
import WhatsYouWillLearn from "../components/WhatsYouWillLearn";
import WhyYouShouldLearnCard from "../components/WhyYouShouldLearnCard";
import AboutCourse from "../components/AboutCourse";
import FandQs from "../components/FandQs";
import CourseCard from "../components/CourseCard";

const DashboardScreen = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col w-full bg-gradient-to-r to-[#00546c] from-[#012f3c] px-20 py-10">
        <div className="w-[60%] flex flex-col gap-3">
          <span className="text-white flex items-center text-[10px]">
            <span className="font-semibold">Home&gt;</span>Software
            Development&gt;Free Software Development Online Course With
            Certificate
          </span>
          <h2 className="text-4xl text-white font-semibold">
            Fundamentals of Software Development
          </h2>
          <p className="text-lg text-white">
            Free software Development Online Course With Certificate
          </p>
          <div className="flex items-center gap-4 my-4">
            <div className="flex items-center gap-2">
              <span className="text-white">4.5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
              <span className="text-white text-sm">11343</span>
              <span className="text-white text-sm">learners enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-[5px] h-[5px] bg-white rounded-full"></span>

              <span className="text-white text-sm">Beginner Level</span>
            </div>
          </div>
          <p className="text-base text-white">
            Our free software development course is your entry point to the
            world of software development From the basics of coding to teamwork
            skills, it's all here, simplified for you. Ideal for those starting
            a software career or simply curious about software creation.
          </p>
        </div>
      </div>

      {/* software development skills */}
      <div className="w-full px-20 py-8">
        <div className="w-[60%] flex flex-col gap-3">
          <h2 className="text-2xl text-black font-semibold">
            Software Development Skills you will learn
          </h2>
          <div className="w-full flex items-center ">
            <CourseWithTick title="Problem Solving" />
            <CourseWithTick title="Programming" />
          </div>
          <div className="w-full flex items-center ">
            <CourseWithTick title="Algorithms and Data Structures" />
            <CourseWithTick title="Debugging and Testing" />
          </div>
        </div>
      </div>
      {/* who should learn this free  */}
      <div className="w-full px-20 py-8">
        <div className="w-[60%] flex flex-col gap-3">
          <h2 className="text-2xl text-black font-semibold">
            Who should learn this free Software Development course?
          </h2>
          <div className="flex flex-wrap gap-4 w-full">
            <WhoShouldLearnCard />
            <WhoShouldLearnCard title="Frontend Developer" />
            <WhoShouldLearnCard title="FullStack Developer" />
            <WhoShouldLearnCard title="Backend Developer" />
            <WhoShouldLearnCard title="DevOps Engineer" />
          </div>
        </div>
      </div>
      {/* what you will learn into software developemnet */}
      <WhatsYouWillLearn />
      {/* get a completion certificate */}
      <div className="w-full px-20 py-8">
        <div className="w-[60%] flex flex-col gap-3">
          <h2 className="text-2xl text-black font-semibold">
            Get a Completion Certificate
          </h2>
          <p>
            Share your certificate with prospective employers and your
            professional network on LinkedIn.
          </p>
          <div className="w-full h-[400px] relative mt-5 flex justify-center items-center">
            <div className="absolute top-1/2 right-0 w-full h-[150px] bg-blue-600 -translate-y-1/2 z-0"></div>
            <img
              className="w-[85%] h-[full] bg-yellow-200 z-10"
              src="https://www.simplilearn.com/ice9/skillupcertificates/Fundamentals_of_Software_Development.png"
            />
          </div>
        </div>
      </div>
      {/* why you should learn software development */}
      <div className="w-full px-20 py-8">
        <div className="w-[60%] flex flex-col gap-3">
          <h2 className="text-2xl text-black font-semibold">
            Why you should learn Software Development?
          </h2>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <WhyYouShouldLearnCard />
            <WhyYouShouldLearnCard />
          </div>
        </div>
      </div>
      {/* about the course */}
      <AboutCourse />
      {/* f&qs */}
      <FandQs />
      {/* releated courser */}
      <div className="w-full px-20 py-8 bg-blue-100 flex flex-col gap-4">
        <div className="w-[60%] flex flex-col gap-3">
          <h2 className="text-2xl text-black font-semibold">Related Courses</h2>
        </div>
        <div className="flex flex-wrap gap-1 justify-between items-center">
          <CourseCard />
          <CourseCard />

          <CourseCard />

          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
