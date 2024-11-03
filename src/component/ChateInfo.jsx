import profilePablo from "../img/profilePablo.webp";
function ChateInfo() {
  return (
    <div className="bg-[rgb(28,28,28)] h-screen w-[25%] ">
      <div>
        <div className="flex items-center gap-2 pt-8 p-10 ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 13 14"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.49435 1.50518L11.5057 12.4948"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
            <path
              d="M11.5 1.5L1.5 12.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
          </svg>

          <p className="text-white text-center pb-1">مشخصات شخص</p>
        </div>
        <div className="flex flex-col items-center pt-5">
          <img src={profilePablo} alt="" className="w-32 h-32 rounded-full" />
          <p className="text-white mt-6 font-semibold text-2xl">عمو پابلو</p>
          <div className=" flex gap-4 pt-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 39 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <ellipse
                cx="19.709"
                cy="19"
                rx="19.1418"
                ry="19"
                fill="#F8F8F8"
              />
              <path
                d="M21.1206 11.6875C23.6623 11.6875 25.437 13.4261 25.437 15.9176V23.0824C25.437 25.5739 23.6623 27.3125 21.1206 27.3125H13.363C10.8213 27.3125 9.04665 25.5739 9.04665 23.0824V15.9176C9.04665 13.4261 10.8213 11.6875 13.363 11.6875H21.1206ZM29.5716 14.1656C30.0323 13.933 30.5728 13.9573 31.0125 14.2322C31.4522 14.5061 31.7146 14.982 31.7146 15.5023V23.4983C31.7146 24.0197 31.4522 24.4945 31.0125 24.7684C30.7722 24.9175 30.5035 24.9937 30.2327 24.9937C30.0071 24.9937 29.7815 24.9408 29.5705 24.834L28.0163 24.0556C27.4412 23.7659 27.0844 23.1842 27.0844 22.5381V16.4615C27.0844 15.8143 27.4412 15.2327 28.0163 14.945L29.5716 14.1656Z"
                fill="#171717"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 39 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <ellipse
                cx="19.4254"
                cy="19"
                rx="19.1418"
                ry="19"
                fill="#F8F8F8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.4377 19.9921C23.624 24.1462 24.5737 19.3403 27.2391 21.9842C29.8088 24.5341 31.2857 25.045 28.03 28.2757C27.6222 28.6011 25.0311 32.5149 15.9251 23.4788C6.81793 14.4417 10.7586 11.8671 11.0865 11.4624C14.3501 8.22275 14.856 9.69726 17.4256 12.2472C20.0911 14.8922 15.2514 15.8379 19.4377 19.9921Z"
                fill="#171717"
              />
            </svg>
          </div>
          <div className=" flex">
            <p className="text-white pt-8 text-lg">درباره</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChateInfo;
