import React from "react";
import pattern from "../img/pattern.png";
import ProfilePablo from "../img/profilePablo.webp";

function Chat() {
  return (
    <div className="w-[50%] h-screen bg-[rgb(28,28,28)]">
      <div className="w-full h-[10%] bg-[rgb(28,28,28)] flex items-center justify-between">
        <div className="flex gap-3 w-32 justify-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <ellipse cx="19.1418" cy="19" rx="19.1418" ry="19" fill="#F8F8F8" />
            <ellipse
              cx="10.9523"
              cy="18.8711"
              rx="2.89256"
              ry="2.87113"
              fill="#171717"
            />
            <ellipse
              cx="19.2829"
              cy="18.8711"
              rx="2.89256"
              ry="2.87113"
              fill="#171717"
            />
            <ellipse
              cx="27.6134"
              cy="18.8711"
              rx="2.89256"
              ry="2.87113"
              fill="#171717"
            />
          </svg>

          <svg
            width="30"
            height="30"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <ellipse cx="19.709" cy="19" rx="19.1418" ry="19" fill="#F8F8F8" />
            <path
              d="M21.1206 11.6875C23.6623 11.6875 25.437 13.4261 25.437 15.9176V23.0824C25.437 25.5739 23.6623 27.3125 21.1206 27.3125H13.363C10.8213 27.3125 9.04665 25.5739 9.04665 23.0824V15.9176C9.04665 13.4261 10.8213 11.6875 13.363 11.6875H21.1206ZM29.5716 14.1656C30.0323 13.933 30.5728 13.9573 31.0125 14.2322C31.4522 14.5061 31.7146 14.982 31.7146 15.5023V23.4983C31.7146 24.0197 31.4522 24.4945 31.0125 24.7684C30.7722 24.9175 30.5035 24.9937 30.2327 24.9937C30.0071 24.9937 29.7815 24.9408 29.5705 24.834L28.0163 24.0556C27.4412 23.7659 27.0844 23.1842 27.0844 22.5381V16.4615C27.0844 15.8143 27.4412 15.2327 28.0163 14.945L29.5716 14.1656Z"
              fill="#171717"
            />
          </svg>

          <svg
            width="30"
            height="30"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <ellipse cx="19.4254" cy="19" rx="19.1418" ry="19" fill="#F8F8F8" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.4377 19.9921C23.624 24.1462 24.5737 19.3403 27.2391 21.9842C29.8088 24.5341 31.2857 25.045 28.03 28.2757C27.6222 28.6011 25.0311 32.5149 15.9251 23.4788C6.81793 14.4417 10.7586 11.8671 11.0865 11.4624C14.3501 8.22275 14.856 9.69726 17.4256 12.2472C20.0911 14.8922 15.2514 15.8379 19.4377 19.9921Z"
              fill="#171717"
            />
          </svg>
        </div>

        <p className="text-white text-2xl text-center w-32">عمو پابلو</p>
        <div className=" flex items-center justify-center w-32">
          <img
            src={ProfilePablo}
            alt="Profile"
            className="h-16 w-16 object-cover cursor-pointer rounded-full"
          />
        </div>
      </div>

      <div className="h-[90%]">
        <img
          src={pattern}
          alt="Pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </div>
  );
}

export default Chat;
