import "./gridpage.css";
import env from "react-dotenv";
import Header from "../components/header/header";
import ImageGrid from "../components/imagegrid/imagegrid";
/* env.UNSPLASH_ACCESS_KEY */

function GridPage() {
  return (
    <div className="gridpage-screen">
      <Header />
      <ImageGrid />
    </div>
  );
}

export default GridPage;
