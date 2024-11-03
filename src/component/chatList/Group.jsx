import axios from "axios";
import { useEffect, useState } from "react";

function Group() {
  const url = `${import.meta.env.VITE_APP_URL}groups`;
  const [groupList, setgroupList] = useState([]);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          apikey: "7274907574223be90debafb2e0791cb7bdde2601",
        },
      })
      .then((res) => setgroupList(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(groupList);

  return (
    <div>
      {groupList.map((list) => (
        <div key={list.guid}>
          <p>{list.name}</p>
          <img src={list.icon}/>
        </div>
      ))}
    </div>
  );
}

export default Group;
