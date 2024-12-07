import React, { useState, useEffect } from "react";
import LatestZahl from "./components/LatestZahl";

function App() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error("Globaler Fehler:", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", (e) =>
      handleError(e.reason || e)
    );

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  if (hasError) {
    return <div>Ein Fehler ist aufgetreten. Prüfe die Konsole.</div>;
  }

  return (
    <div>
      <LatestZahl />
    </div>
  );
}

export default App;
