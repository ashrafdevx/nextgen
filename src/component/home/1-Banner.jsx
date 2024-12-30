import "../../assets/banner.css"; // Optional for custom styles

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          poster="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c%2F6721ce01a860242b6a351f8b_The%20WORLD%20S%20SMOOTHEST%20cinematic%20PROPERTY%20VIDEO%20_%20SONY%20FX6%20%281%29-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c%2F6721ce01a860242b6a351f8b_The%20WORLD%20S%20SMOOTHEST%20cinematic%20PROPERTY%20VIDEO%20_%20SONY%20FX6%20%281%29-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c%2F6721ce01a860242b6a351f8b_The%20WORLD%20S%20SMOOTHEST%20cinematic%20PROPERTY%20VIDEO%20_%20SONY%20FX6%20%281%29-transcode.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <button
            type="button"
            className="play-pause-button"
            aria-label="Play or Pause Video"
          >
            <span className="play-state">Pause Video</span>
            <span className="pause-state" hidden>
              Play Video
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
