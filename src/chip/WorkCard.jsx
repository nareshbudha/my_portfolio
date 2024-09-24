import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={`popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className="text-gray-900 text-base overflow-scroll leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className="flex items-center justify-center gap-4">
                  {/* External link for the demo */}
                  <a
                    href={data.link} // This makes the link clickable
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Improves security by preventing the new page from having access to the window object
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                    <p className="text-black">Live Website</p>
                  </a>

                  {/* Uncomment this block if you want to use GitHub links */}
                  {/* 
                  <a
                    href={data.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                    <p className="text-black">Code</p>
                  </a>
                  */}
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
