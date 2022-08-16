import React from "react";

const Chat=(chaturl)=>{
    console.log("https://www.youtube.com/live_chat?v="+chaturl.chaturl+"&embed_domain=localhost");
    return (
        <iframe width="400" height="750" src={"https://www.youtube.com/live_chat?v="+chaturl.chaturl+"&embed_domain=localhost"} frameBorder="0" title="chat"></iframe>
    )


}

export default Chat;