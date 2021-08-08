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
    // Request 30 images
    RequestNewImages();
  }

  console.log(imageFeed.length);

  function RequestNewImages() {
    RequestImagesByAmount(30).then((res) => {
      // If there's no feed, set the state directly
      if (imageFeed.length === 0) {
        setImageFeed(res);
        setTimeout(() => {
          setContentReady(true);
        }, 1000);
      } else {
        // There's already a feed, push them to the current feed
        res.forEach((newImage) => {
          console.log({ ...newImage });
          setImageFeed((prevState) => [...prevState, newImage]);
        });
        setTimeout(() => {
          setContentReady(true);
        }, 1000);
      }

      // USE CALLBACK HERE INSTEAD, Set content to ready, using a timeout to fix race condition due to setState not being finished when trying to set content ready
    });
  }

  return (
    <div className="gridpage-screen">
      <Header />
      {/* Conditional render for if there's content in the imageFeed */}
      {contentReady ? (
        <ImageGrid imageFeed={imageFeed} RequestNewImages={RequestNewImages} />
      ) : (
        <div className="no-content-wrapper">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
}

export default GridPage;
