import "./gridpage.css";
import env from "react-dotenv";
import Header from "../components/header/header";
import ImageGrid from "../components/imagegrid/imagegrid";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
/* env.UNSPLASH_ACCESS_KEY */

function GridPage() {
  const [imageFeed, setImageFeed] = useState([]);

  // If image feed is empty, first load so request images
  if (imageFeed.length === 0) {
    /* axios
      .get(
        `https://api.unsplash.com/photos/?per_page=10&client_id=${env.UNSPLASH_ACCESS_KEY}`
      )
      .then((res) => {
        setImageFeed(res.data);
      })
      .catch((err) => {
        console.log(err);
      }); */
  }

  console.log("Image Feed: ", imageFeed);

  return (
    <div className="gridpage-screen">
      <Header />
      {/* Conditional render for if there's content in the imageFeed */}
      {true ? (
        <ImageGrid imageFeed={imageFeed} />
      ) : (
        <div className="no-content-wrapper">
          <CircularProgress color="black" />
        </div>
      )}
    </div>
  );
}

export default GridPage;
