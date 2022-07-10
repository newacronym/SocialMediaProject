import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { useState } from "react";
import axios from "axios";

export default function Share() {

  const [post,setPost]=useState("");

  const handleShare=()=>{
    const postData={
      postPath:post
    }
    console.log("share clicked");
    axios.post('http://localhost:8080/post',postData)
    .then(response=>{
      console.log(response);
    })
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="What's in your mind Safak?" className="shareInput" onChange={(event)=>{setPost(event.currentTarget.value);}}/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}
