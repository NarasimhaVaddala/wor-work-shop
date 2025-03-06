import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const WhatsYouWillLearn = () => {
  const [isDisplayDetailsWhatYouLearn, setisDisplayDetailsWhatYouLearn] =
    useState(false);

  const [isDisplayInnerContent, setIsDisplayInnerContent] = useState(null);

  const handleOpenCloseTab = (index) => {
    if (index === isDisplayInnerContent) {
      setIsDisplayInnerContent(null);
    } else {
      setIsDisplayInnerContent(index);
    }
  };

  const data = [
    {
      name: "Introduction",
      time: "05:13",
      subName: "0.0 Introduction",
    },
    {
      name: "lession 1 : Introduction to Software Development",
      time: "05:12",
      subName: "1.01 Introduction to Software Development",
    },
    {
      name: "Lesson 2 : Who is a Software Developer",
      time: "12:29",
      subName: "2.01 Who is a Software Developer",
    },
    {
      name: "Lesson 3 : Types of Software Development",
      time: "22:23",
      subName: "3.01 Types of Software Developers",
    },
  ];

  return (
    <div className="w-full px-20 py-8">
      <div className="w-[60%] flex flex-col gap-3">
        <h2 className="text-2xl text-black font-semibold">
          What you will learn in this Software Developer free course?
        </h2>
        <div className="w-full bg-blue-100 p-4 py-8 rounded-md flex flex-col gap-2">
          <span
            className="flex gap-4 items-center cursor-pointer"
            onClick={() =>
              setisDisplayDetailsWhatYouLearn(!isDisplayDetailsWhatYouLearn)
            }
          >
            <Plus size={15} />
            Whats is Software Development
          </span>
          {isDisplayDetailsWhatYouLearn && (
            <div className="flex flex-col gap-6 p-4">
              {data?.map((each, index) => (
                <div className="flex flex-col w-full gap-4  items-center">
                  <div
                    onClick={() => handleOpenCloseTab(index)}
                    className="w-full flex justify-between items-start cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      {isDisplayInnerContent === index ? (
                        <Minus size={15} />
                      ) : (
                        <Plus size={15} />
                      )}
                      {each.name}
                    </span>
                    <span className="text-blue-400 font-semibold">
                      {each.time}
                    </span>
                  </div>
                  {isDisplayInnerContent === index && (
                    <span className="w-full ml-10">{each.subName}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsYouWillLearn;
