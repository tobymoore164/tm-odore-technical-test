import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./header.css";

function Header(props) {
  const [mobileView, setMobileView] = useState(false);

  // Window Resize Event Listener for Mobile Topbar
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div className="header-screen">
      {/* Dynamic classname for mobile view responsive header, only be responsive if not the lightbox */}
      <div
        className={`header-wrapper ${
          mobileView && !props.lightbox ? "mobile-header-wrapper" : ""
        } ${props.lightbox ? "lightbox-close" : ""}`}
      >
        {/* Conditional output for lightbox header section */}
        {!props.lightbox ? (
          <>
            <div className="header-title BOLD">Simple Images.</div>
            <div className="header-author">
              by <span className="BOLD">Toby Moore</span>
            </div>
          </>
        ) : (
          /* Close icon button */
          <FontAwesomeIcon
            icon={faTimes}
            className="image-lightbox-close-icon"
            onClick={props.handleCloseLightbox}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
