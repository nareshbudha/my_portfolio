import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-900">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-900"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-900"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  FullStack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Spell Innovation pvt.ltd
                </span>
                <span className=" text-[.9rem] font-semibold text-red-900 sm:text-base">
                  February 2024 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  As a Full Stack Developer at Spell Innovation Pvt. Ltd., I work on both frontend and backend development. On the backend, I design and build custom, user-friendly CMS solutions that simplify content management and streamline workflows. I integrate these systems with modern, responsive frontend interfaces, ensuring seamless performance and an intuitive user experience. My work involves technologies such as Laravel (PHP), React, MySQL, and Tailwind CSS, enabling the delivery of efficient and scalable web applications. I have contributed to several successful projects that have improved user engagement and client satisfaction. This role has significantly strengthened my expertise in web development, problem-solving, and collaborative teamwork.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-900">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-900"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-900"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor  degree in Computer Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Gradute School Of Enginering Midwest University
                </span>
                <span className=" text-[.9rem] font-semibold text-red-900 sm:text-base">
                  Year 2018 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  I earned my Bachelor  degree in Computer Engineering from the Graduate School of Engineering at Midwest University, completing the program between 2018 and 2024. During my studies, I gained a solid foundation in core areas such as software development, data structures, algorithms, and web technologies. I also had the opportunity to work on various projects that enhanced my skills in problem-solving, coding, and innovative technology solutions. This academic experience has equipped me with both theoretical knowledge and practical skills to excel in the field of software and web development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
