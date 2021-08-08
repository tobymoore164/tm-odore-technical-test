import "./imagegrid.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useOnScreen from "../../../hooks/useOnScreen";
import { useRef } from "react";
import Masonry from "react-masonry-css";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageGrid(props) {
  // Reference for the "bottom of scroll" element used to refresh image feed
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  /* Screen Width Breakpoints for responsive styling on masonry grid */
  const columnBreakpoints = {
    default: 3,
    1620: 2,
    1075: 1,
  };

  return (
    <div className="image-grid-screen">
      <div className="image-grid-wrapper">
        {/* Responsible for the masonry image layout */}
        <Masonry
          breakpointCols={columnBreakpoints}
          className="image-masonry-grid"
          columnClassName="image-masonry-grid-column"
        >
          {/* Map the feed to get every image */}
          {props.imageFeed.map((image, index) => {
            return (
              /* Render a lazyLoadImage for each image, this handles lazy loading of individual images */
              <LazyLoadImage
                key={index}
                className="image-grid-item"
                alt={image.alt_description}
                effect="blur"
                /* Width and Height uses the custom size property we setup when getting the feed */
                width={image.size.width}
                height={image.size.height}
                src={image.urls.small} // use normal <img> attributes as props
              />
            );
          })}
        </Masonry>
        <div className="image-grid-content-bottom" ref={ref}>
          Bottom
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
