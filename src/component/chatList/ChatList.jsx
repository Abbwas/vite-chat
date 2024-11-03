import { useState } from "react";
import Personal from "./Personal";
import Group from "./Group";

function ChatList() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="bg-[rgb(28,28,28)] h-screen w-[25%]  ">
      <div className=" w-[100%]  h-[10%] flex items-center justify-center ">
        <div className="  w-[70%] h-10 bg-[rgb(242,243,245)] rounded-full flex items-center justify-end ">
          <input
            placeholder="جستجو"
            className=" text-[#575757] text-right pr-12 w-full h-full rounded-full focus:placeholder-transparent"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 19"
            fill="#575757"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute mr-5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.22863 0.865967C12.7036 0.865967 16.3436 4.50597 16.3436 8.98097C16.3436 11.0923 15.5334 13.0179 14.2075 14.463L16.8165 17.0665C17.0606 17.3107 17.0615 17.7057 16.8173 17.9499C16.6956 18.0732 16.5348 18.1341 16.3748 18.1341C16.2156 18.1341 16.0556 18.0732 15.9331 17.9515L13.2927 15.3185C11.9037 16.4308 10.1425 17.0968 8.22863 17.0968C3.75363 17.0968 0.112793 13.456 0.112793 8.98097C0.112793 4.50597 3.75363 0.865967 8.22863 0.865967ZM8.22863 2.11597C4.44279 2.11597 1.36279 5.19513 1.36279 8.98097C1.36279 12.7668 4.44279 15.8468 8.22863 15.8468C12.0136 15.8468 15.0936 12.7668 15.0936 8.98097C15.0936 5.19513 12.0136 2.11597 8.22863 2.11597Z"
              fill="#575757"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-end pr-20 h-[5%] text-slate-300">

        <p
          className="cursor-pointer hover:text-blue-500 active:text-blue-700"
          onClick={() => setActiveTab("group")}
        >
          گروه ها
        </p>
        <p
          className="cursor-pointer hover:text-blue-500 active:text-blue-700"
          onClick={() => setActiveTab("personal")}
        >
          شخصی
        </p>
        <p
          className="cursor-pointer hover:text-blue-500 active:text-blue-700"
          onClick={() => setActiveTab("All")}
        >
          همه
        </p>
      </div>
      <div className="h-[85%] overflow-auto no-scrollbar">
        {activeTab === "personal" && <Personal />}

        {activeTab === "group" && <Group />}
        {activeTab === "All" && (
          <div>
            <Personal />
            <Group />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatList;
