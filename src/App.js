import React,{useEffect, useState} from "react";
import "./App.css";
import Ytplayer from "./Components/Ytplayer";
import Chat from "./Components/Chat";

const App=()=> {
  const [url1,setUrl1]= useState("https://www.youtube.com/watch?v=GsWhoPhkn5U");
  const [url2,setUrl2]= useState("https://www.youtube.com/watch?v=5qap5aO4i9A");
  const [chaturl,setChatUrl] = useState("5qap5aO4i9A");
  const setUrlHandler1=(e)=>{
    setUrl1(e.target.value);
  }

  const setUrlHandler2=(e)=>{
    setUrl2(e.target.value);
  }

  useEffect(()=>{
  //  let urlcheck = url2.includes("youtube.com/watch?v=");
  //   if (urlcheck == true) {
      var chatId = url2.split("=");
    // };
    setChatUrl(chatId[1]);
  },[url2]);

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>LOL CAST</h1>
        </header>
        <div className="link1">
        <h2>GAME</h2>
        </div>
        <div className="link2">
        <h2>CASTER</h2>
        </div>
        <div className="selectchat">
          <h2>CHAT</h2>
        </div>
        <div className="player1">
        <Ytplayer url={url1}/>
        <input onChange={setUrlHandler1} placeholder="Paste link game vào đây"></input>
        <p></p>
        </div>
        <div className="player2">
        <Ytplayer url={url2}/>
        <input onChange={setUrlHandler2} placeholder="Paste link game vào đây" ></input>
        </div>
        <div className="chat">
        <Chat chaturl={chaturl}/>
        </div>
        </div>
      
    </div>
  );
}

export default App;
