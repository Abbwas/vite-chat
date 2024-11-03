import { useEffect, useState } from "react";
import axios from "axios";

const Personal = () => {
  const [userList, setUserList] = useState([]);
  const url = `${import.meta.env.VITE_APP_URL}users`;
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          apikey: "7274907574223be90debafb2e0791cb7bdde2601",
        },
      })
      .then((res) => setUserList(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(userList);

  return (
    <div className=" pt-8 h-full overflow-auto">
      {userList.map((user) => (
        <div
          
          key={user.uid}
          className="w-100% h-24 bg-blue-950 flex items-center m-2 justify-end gap-4 rounded-xl relative"
        >
          <p className="text-white w-full ml-5">
            {new Date(user.lastActiveAt * 1000).toLocaleTimeString("fa")}
          </p>
          
          <div className="text-white text-nowrap">{user.name}</div>
          {/* {user state checked} */}
          {user.status === "online" ? (
            <div className="bg-green-500 rounded-full w-4 h-4"></div>
          ) : (
            <div className="rounded-full bg-slate-300 border-gray-600 border-2 w-4 h-4 absolute right-[4%] mt-11"></div>
          )}
          {/* {user avatar checked} */}
          {user.avatar ? (
            <img src={user.avatar} className="w-16 h-16 rounded-full mr-5" />
          ) : (
            <div className="w-16 h-16 rounded-full mr-5 bg-white flex items-center">
              <svg
                width="60"
                height="50"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 6.25C46.8832 6.25 36.25 16.8832 36.25 30C36.25 43.1168 46.8832 53.75 60 53.75C73.1168 53.75 83.75 43.1168 83.75 30C83.75 16.8832 73.1168 6.25 60 6.25ZM43.75 30C43.75 21.0254 51.0254 13.75 60 13.75C68.9746 13.75 76.25 21.0254 76.25 30C76.25 38.9746 68.9746 46.25 60 46.25C51.0254 46.25 43.75 38.9746 43.75 30Z"
                  fill="gray"
                />
                <path
                  d="M60 61.25C49.8033 61.25 40.3876 63.6037 33.3907 67.6019C26.5 71.5395 21.25 77.5507 21.25 85C21.25 92.4493 26.5 98.4605 33.3907 102.398C40.3876 106.396 49.8033 108.75 60 108.75C70.1967 108.75 79.6124 106.396 86.6093 102.398C93.5 98.4605 98.75 92.4493 98.75 85C98.75 77.5507 93.5 71.5395 86.6093 67.6019C79.6124 63.6037 70.1967 61.25 60 61.25ZM28.75 85C28.75 81.4036 31.335 77.4148 37.1118 74.1138C42.7824 70.8734 50.8667 68.75 60 68.75C69.1333 68.75 77.2176 70.8734 82.8882 74.1138C88.665 77.4148 91.25 81.4036 91.25 85C91.25 88.5964 88.665 92.5852 82.8882 95.8862C77.2176 99.1266 69.1333 101.25 60 101.25C50.8667 101.25 42.7824 99.1266 37.1118 95.8862C31.335 92.5852 28.75 88.5964 28.75 85Z"
                  fill="gray"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Personal;
