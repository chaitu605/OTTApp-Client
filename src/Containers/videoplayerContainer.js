import React from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import Footer from "../Components/Footer/Footer";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";

export default function VideoPlayerContainer(props) {
  return (
    <React.Fragment>
      <div>
        <AdminNav />
        <VideoPlayer match={props.match} />
        <Footer />
      </div>
    </React.Fragment>
  );
}
