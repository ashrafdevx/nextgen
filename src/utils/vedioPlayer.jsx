import React, { useRef, useEffect, useState } from "react";

const LazyLoadVideo = ({ url }) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-auto"
      autoPlay={isIntersecting} // Only autoplay when in view
      muted
      loop
      playsInline
      src={isIntersecting ? url : ""} // Only load src when in view
      alt="Under Construction Video"
    >
      {" "}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyLoadVideo;
