import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function TawkToWidget() {
  const tawkMessengerRef = useRef();

  const handleLoad = () => {
    console.log("Tawk.to widget loaded successfully!");
  };

  const handleError = (error) => {
    console.error("Error loading Tawk.to widget:", error);
  };

  return (
    <TawkMessengerReact
      propertyId="YOUR_PROPERTY_ID"
      widgetId="YOUR_WIDGET_ID"
      ref={tawkMessengerRef}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
export default TawkToWidget;

// import React, { useEffect } from "react";

// const TawkToWidget = () => {
//   useEffect(() => {
//     // Initialize Tawk.to script
//     var Tawk_API = Tawk_API || {};
//     var Tawk_LoadStart = new Date();
//     (function () {
//       var s1 = document.createElement("script");
//       var s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = "https://embed.tawk.to/677eb524af5bfec1dbe88e1e/1ih3f76lf";
//       s1.charset = "UTF-8";
//       s1.setAttribute("crossorigin", "*");
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//   }, []); // Empty dependency array ensures it only runs once on mount

//   return null; // No UI is rendered by this component
// };

// export default TawkToWidget;
