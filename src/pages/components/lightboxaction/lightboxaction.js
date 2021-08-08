import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./lightboxaction.css";

function LightboxAction(props) {
  /* Define an upper limit, better to do it here than in a conditional statement */
  var upperLimit = props.feedLength - 1;

  return (
    <div
      className="image-lightbox-action"
      onClick={() => {
        switch (props.action) {
          case "previous":
            /* Make sure there's a previous image to go to */
            if (props.selectedImage.index >= 1) {
              /* Decrement the index to get previous image */
              props.handleSetSelectedImage(--props.selectedImage.index);
            }
            break;
          case "next":
            /* Make sure there's a next image to go to */
            if (props.selectedImage.index < upperLimit) {
              /* Increment index to get next image */
              props.handleSetSelectedImage(++props.selectedImage.index);
            }
            break;
        }
      }}
    >
      {/* Don't show back button if there's no images previous to this one */}
      {props.action === "previous" ? (
        <>
          {/* Only display previous arrow if there's a previous image */}
          {props.selectedImage.index >= 1 ? (
            <FontAwesomeIcon icon={faChevronLeft} className="STANDARD-ICON" />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {/* Only display next arrow if there's a next image */}
          {props.selectedImage.index < upperLimit ? (
            <FontAwesomeIcon icon={faChevronRight} className="STANDARD-ICON" />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default LightboxAction;
