import React from "react";
import "./FeaturedReleases.css";

import farAwayImage from "../../assets/image/bia1.jpg";
import tripYImage from "../../assets/image/bia2.jpg";
import draiBakaImage from "../../assets/image/bia33.jpg";
import img from "../../assets/image/imge.webp";
import { AiOutlineYoutube } from "react-icons/ai";

import sampleVideo from "../../assets/videos/video.mp4";
const ReleaseCard = ({ imageSrc, title, artist, type, overlayImage }) => {
  return (
    <div className="mc-release-card">
      <div className="mc-image-container">
        <img src={imageSrc} alt={title} className="mc-album-cover" />
        <div
          className={`mc-vinyl-overlay ${
            type === "custom" ? "mc-vinyl-overlay--custom" : ""
          }`}
        >
          {type === "custom" && (
            <img
              src={overlayImage}
              alt="custom"
              className="mc-overlay-img-full"
            />
          )}
          {type === "vinyl" && overlayImage && (
            <img
              src={overlayImage}
              alt="label"
              className="mc-overlay-img-center"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedReleases = () => {
  const featuredReleases = [
    {
      id: 1,
      imageSrc: farAwayImage,
      title: "Far Away Original Mix",
      artist: "ArtistNameHere",
      type: "vinyl",
      overlayImage: farAwayImage,
    },
    {
      id: 2,
      imageSrc: tripYImage,
      title: "TRIP Y",
      artist: "ArtistNameHere",
      type: "custom",
      overlayImage:
        "https://mevevent.com/wp-content/uploads/2019/10/trip-415x415.jpg",
    },
    {
      id: 3,
      imageSrc: draiBakaImage,
      title: "Drai Baka",
      artist: "ArtistNameHere",
      type: "vinyl",
      overlayImage: draiBakaImage,
    },
  ];

  return (
    <div>
      <div className="mc-app-container">
        {" "}
        <header className="mc-app-header">
          <h1 className="mc-catalog-title">Catalog</h1>
          <h2 className="mc-featured-releases-title">FEATURED RELEASES</h2>
        </header>
        <main className="mc-releases-grid">
          {featuredReleases.map((release) => (
            <ReleaseCard
              key={release.id}
              imageSrc={release.imageSrc}
              title={release.title}
              artist={release.artist}
              type={release.type}
              overlayImage={release.overlayImage}
            />
          ))}
        </main>
        <div className="mc-view-more-container">
          <button className="mc-view-more-button">
            <span>VIEW MORE RELEASES</span>
          </button>
        </div>
      </div>

      {/* -------------------------------------------- */}
      <div className="hs-container">
        {" "}
        <div
          className="hs-left-column"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="hs-right-column">
          <h2 className="hs-title-script">Underground</h2>
          <h3 className="hs-subtitle">AN INDEPENDENT LABEL</h3>
          <p className="hs-description">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Ut non enim eleifend felis pretium feugiat. Praesent porttitor,
            nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
            sem ut ipsum. Integer ante arcu, accumsan a, consectetuer eget,
            posuere ut, mauris. Quisque rutrum.
          </p>
          <button className="hs-learn-more-button">LEARN MORE</button>
        </div>
      </div>

      {/* ----------- */}
      <div className="hs-container">
        {" "}
        <div className="hs-right-column">
          <h2 className="hs-title-script">Original</h2>
          <h3 className="hs-subtitle">TALENTED ARTISTS</h3>
          <p className="hs-description">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Ut non enim eleifend felis pretium feugiat. Praesent porttitor,
            nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
            sem ut ipsum. Integer ante arcu, accumsan a, consectetuer eget,
            posuere ut, mauris. Quisque rutrum.
          </p>
          <button className="hs-learn-more-button">LEARN MORE</button>
        </div>
        <div className="hs-video-column">
          <video className="hs-video-player" autoPlay muted loop>
            <source src={sampleVideo} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
          <div className="hs-video-overlay-content">
            <AiOutlineYoutube className="hs-youtube-icon" />

            <p className="hs-video-text">Watch the New Video "Herion" — 3:27</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReleases;
