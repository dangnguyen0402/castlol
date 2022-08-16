import React from "react";
import ReactPlayer from "react-player";

const Ytplayer =({url})=> {
    return (
        <ReactPlayer 
        url={url} 
        controls={true} 
         width=""
          height="500px"/>
    )
    
}
export default Ytplayer;