import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../header/header";
import "./imagelightbox.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "@material-ui/core";
import LightboxAction from "../lightboxaction/lightboxaction";

function ImageLightbox(props) {
  return (
    <div className="image-lightbox-screen">
      {/* Slightly adjusted dynamic header for close button */}
      <Header lightbox={true} handleCloseLightbox={props.handleCloseLightbox} />
      <div className="image-lightbox-content">
        {/* Component for actions, define if it's previous or next */}
        <LightboxAction
          action="previous"
          feedLength={props.feedLength}
          selectedImage={props.selectedImage}
          handleSetSelectedImage={props.handleSetSelectedImage}
        />
        <div className="image-lightbox-mid">
          <div className="image-lightbox-image-content-wrapper">
            <div className="image-lightbox-image-content-actions">
              {/* Container for picture likes */}
              <div className="image-lightbox-image-likes">
                <FontAwesomeIcon icon={faEye} className="STANDARD-ICON" />
                <div className="image-lightbox-image-likes-text">
                  {props.selectedImage.image.likes}
                </div>
              </div>
              {/* Container for download button, this will show the original image on unsplash domain with full size */}
              <div className="image-lightbox-image-download">
                <Button
                  variant="contained"
                  href={props.selectedImage.image.urls.raw}
                >
                  View Original
                </Button>
              </div>
            </div>
            {/* Show the full size image, lazy loaded because they're BIG */}
            <div className="image-lightbox-image-content-image">
              <LazyLoadImage
                alt={props.selectedImage.image.alt_description}
                effect="blur"
                src={props.selectedImage.image.urls.regular} // use normal <img> attributes as props
              />
            </div>
            {/* Container for the image alt description */}
            <div className="image-lightbox-image-content-description">
              {props.selectedImage.image.alt_description != null
                ? props.selectedImage.image.alt_description.toUpperCase()
                : "There's no description for this image :("}
            </div>
          </div>
        </div>
        {/* Component for actions, define if it's previous or next */}
        <LightboxAction
          action="next"
          feedLength={props.feedLength}
          selectedImage={props.selectedImage}
          handleSetSelectedImage={props.handleSetSelectedImage}
        />
      </div>
    </div>
  );
}

export default ImageLightbox;
