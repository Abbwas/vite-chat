// import "./App.css";
import Chat from "./component/Chat";
import ChateInfo from "./component/ChateInfo";
import ChatList from "./component/chatList/ChatList";
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONFIG } from "./cometchatConfig";

function App() {
  CometChat.init(
    COMETCHAT_CONFIG.appId,
    new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(COMETCHAT_CONFIG.region)
      .build()
  )
    .then(() => {
      console.log("Initialization completed successfully");
    })
    .catch((error) => {
      console.log("Initialization failed with error:", error);
    });

  return (
    <>
      <div className="flex">
        <ChateInfo />
        <Chat />
        <ChatList />
      </div>
    </>
  );
}

export default App;
