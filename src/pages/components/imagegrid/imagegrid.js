import "./imagegrid.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import ImageLightbox from "../imagelightbox/imagelightbox";
import MasonryInfiniteScroller from "react-masonry-infinite";

function ImageGrid(props) {
  const [showImageLightbox, setShowImageLightbox] = useState(false);

  // Store the image we've selected to pass into clightbox
  const [selectedImage, setSelectedImage] = useState();

  // Get the image from the feed based on selected index
  function handleSetSelectedImage(index) {
    setSelectedImage({ index: index, image: props.imageFeed[index] });
  }

  /* Screen Width Breakpoints for responsive styling on masonry grid */
  const columnBreakpoints = {
    default: 3,
    1620: 2,
    1075: 1,
  };

  return (
    /* Use a conditional class name here to fix height when lightbox is showing (this stops the scroll behaviour) */
    <div
      className={`image-grid-screen ${showImageLightbox ? "fix-height" : ""}`}
    >
      {/* Conditional render for the lightbox */}
      {showImageLightbox ? (
        <ImageLightbox
          feedLength={props.imageFeed.length}
          selectedImage={selectedImage}
          handleSetSelectedImage={handleSetSelectedImage}
          handleCloseLightbox={() => {
            setShowImageLightbox(false);
          }}
        />
      ) : (
        <></>
      )}
      <div className="image-grid-wrapper">
        <MasonryInfiniteScroller
          hasMore={true}
          loadMore={props.RequestNewImages}
        >
          {props.imageFeed.map((image, index) => {
            return (
              <LazyLoadImage
                key={index}
                className="image-grid-item"
                alt={image.alt_description}
                effect="blur"
                width={image.size != null ? image.size.width : 400}
                height={image.size != null ? image.size.height : 400}
                src={image.urls.regular}
                onClick={() => {
                  handleSetSelectedImage(index);
                  setShowImageLightbox(true);
                }}
              ></LazyLoadImage>
            );
          })}
        </MasonryInfiniteScroller>
      </div>
    </div>
  );
}

export default ImageGrid;
