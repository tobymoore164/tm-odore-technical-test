import { useEffect, useState } from "react";
import "./header.css";

function Header() {
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
      {/* Need a nested div so the parent can have grey background otherwise corners will have blank spots */}
      <div
        className={`header-wrapper ${
          mobileView ? "mobile-header-wrapper" : ""
        }`}
      >
        <div className="header-title BOLD">Simple Images.</div>
        <div className="header-author">
          by <span className="BOLD">Toby Moore</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
