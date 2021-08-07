import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import GridPage from "./pages/GridPage/gridpage";

function App() {
  // Flag when main content is ready (this is to pull initial 10 images)
  const [contentReady, setContentReady] = useState(true);

  return (
    <div className="app-screen">
      {/* Conditional Render for grid page or spinner */}
      {contentReady ? (
        <GridPage></GridPage>
      ) : (
        <div className="app-screen-loading-wrapper">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default App;
