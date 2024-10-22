import React from "react";

// Styles
import "../public/loading.scss";

export default function LoadingPage() {
  const [LoadingDots, SetLoadingDots] = React.useState("");

  React.useEffect(() => {
    let Dots = 0;
    function UpdateDots() {
      if (Dots == 3) {
        Dots = 0;
      }
      Dots++;
      SetLoadingDots(".".repeat(Dots));
      setTimeout(UpdateDots, 500);
    }
    UpdateDots();
  }, []);

  return (
    <div id="loading">
      Loading{LoadingDots}
      <div id="loading-icon"></div>
    </div>
  );
}
