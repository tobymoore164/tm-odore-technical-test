import "./gridpage.css";

import Header from "../components/header/header";
import ImageGrid from "../components/imagegrid/imagegrid";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { RequestImagesByAmount } from "../../helpers/api";

function GridPage() {
  // Variables
  const [contentReady, setContentReady] = useState(false);
  const [imageFeed, setImageFeed] = useState([]);

  // If image feed is empty it's first load, get the first 20 images.
  if (imageFeed.length === 0) {
    // Request 20 images
    RequestImagesByAmount(20).then((res) => {
      // Set those 20 images to the main feed
      setImageFeed(res);

      // USE CALLBACK HERE INSTEAD, Set content to ready, using a timeout to fix race condition due to setState not being finished when trying to set content ready
      setTimeout(() => {
        setContentReady(true);
      }, 1000);
    });
  }

  return (
    <div className="gridpage-screen">
      <Header />
      {/* Conditional render for if there's content in the imageFeed */}
      {contentReady ? (
        <ImageGrid imageFeed={imageFeed} />
      ) : (
        <div className="no-content-wrapper">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
}

export default GridPage;
