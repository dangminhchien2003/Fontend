import React, { useRef, useState, useEffect } from "react";
import { FaApple, FaShoppingCart, FaBars } from "react-icons/fa";
import {
  IoPlayOutline,
  IoPauseOutline,
  IoPlayForwardOutline,
  IoPlayBackOutline,
  IoOptionsOutline,
} from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiVideoCamera, PiMicrophoneStageThin } from "react-icons/pi";
import { BsSliders2Vertical } from "react-icons/bs";
import { TbDeviceAudioTape } from "react-icons/tb";

import micros from "../../assets/image/micros.png";
import headphone from "../../assets/image/headphone.png";
import "./MusicPlayer.css";

function MusicPlayer() {
  const tracks = [
    {
      id: 1,
      title: "Texas Dirty Stoner",
      artist: "Vlad Annenkov",
      duration: "6:12",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image:
        "https://userscontent2.emaze.com/images/a4862765-ceae-431a-99c2-a72a36804b50/38e3319668c4a90f85dd5355e6233d58.jpg",
    },
    {
      id: 2,
      title: "Hip Hop And Rock Cinematic",
      artist: "Itoliks",
      duration: "7:05",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://source.unsplash.com/400x400/?hip-hop",
    },
    {
      id: 3,
      title: "Stylish Powerful Indie Rock",
      artist: "OCTO Sound",
      duration: "5:44",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      image: "https://source.unsplash.com/400x400/?indie-music",
    },
    {
      id: 4,
      title: "Sport Promo",
      artist: "Bearstockmusic",
      duration: "5:02",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      image: "https://source.unsplash.com/400x400/?sport-music",
    },
    {
      id: 5,
      title: "Inspiring Piano",
      artist: "JudgemeMusic",
      duration: "5:53",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      image: "https://source.unsplash.com/400x400/?piano",
    },
    {
      id: 6,
      title: "Upbeat Sport Rock",
      artist: "Sinematic Alex",
      duration: "4:39",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      image: "https://source.unsplash.com/400x400/?rock-music",
    },
  ];

  //   -----------------------------------------------------
  const services = [
    {
      icon: <TbDeviceAudioTape />,
      title: "MANAGEMENT",
      description:
        "In ac felis quis tortor malesuada pretium. Praesent ac massa at ligula laoreet iaculis. Suspendisse non nisi sit amet velit.",
    },
    {
      icon: <BsSliders2Vertical />,
      title: "PRODUCTION",
      description:
        "In ac felis quis tortor malesuada pretium. Praesent ac massa at ligula laoreet iaculis. Suspendisse non nisi sit amet velit.",
    },
    {
      icon: <PiMicrophoneStageThin />,
      title: "PROMOTION",
      description:
        "In ac felis quis tortor malesuada pretium. Praesent ac massa at ligula laoreet iaculis. Suspendisse non nisi sit amet velit.",
    },
    {
      icon: <PiVideoCamera />,
      title: "VIDEOS",
      description:
        "In ac felis quis tortor malesuada pretium. Praesent ac massa at ligula laoreet iaculis. Suspendisse non nisi sit amet velit.",
    },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://i3.ytimg.com/vi/NJI-TGP3Hr8/hqdefault.jpg",
      title: "THE FAMILY CREW",
    },
    {
      id: 2,
      thumbnail:
        "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/1/1a/ca-si-noi-tieng-the-gioi-4.jpg",
      title: "CHASTRITY BROWN",
    },
    {
      id: 3,
      thumbnail:
        "https://soundcontrolartists.be/wp-content/uploads/2019/10/446404255_640-415x230.jpg",
      title: "TAYLOR GOLDSMITH",
    },
    {
      id: 4,
      thumbnail:
        "https://i.vimeocdn.com/video/130689285-07ec878ce5be267ef6cacf82a1f7faf1a01fb928c343b554688754a087ed92a9-d?f=webp",
      title: "SEEKIN' SCOTT SEEKINS",
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentTrackIndex];

  const [progress, setProgress] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = React.useCallback(() => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true);
  }, [tracks.length]);

  const handlePrev = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleTrackClick = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Playback failed:", error);
        });
      }
    } else {
      audio.pause();
    }
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
    };

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, handleNext, isPlaying]);

  return (
    <div>
      <div className="music-player-background-wrapper">
        <div className="background-container">
          <div className="music-player-container">
            <div className="main-content">
              <div
                className="player-container"
                style={{
                  backgroundImage:
                    "url(https://www.shutterstock.com/image-photo/young-band-performing-on-stage-600nw-2399914023.jpg)",
                }}
              >
                <div className="player-overlay"></div>
                <div className="player-top">
                  <div className="album-art-container">
                    <div
                      className="album-art-background"
                      style={{ backgroundImage: `url(${currentTrack.image})` }}
                    ></div>

                    <div className="album-art-wrapper">
                      {isPlaying ? (
                        <IoPauseOutline
                          className="album-art-play-icon"
                          onClick={handlePlayPause}
                        />
                      ) : (
                        <IoPlayOutline
                          className="album-art-play-icon"
                          onClick={handlePlayPause}
                        />
                      )}
                    </div>
                  </div>

                  <div className="player-main-info">
                    <div className="track-artist">{currentTrack.artist}</div>
                    <div className="track-title">{currentTrack.title}</div>
                    <div className="player-controls">
                      <IoPlayBackOutline
                        className="control-icon"
                        onClick={handlePrev}
                      />
                      {isPlaying ? (
                        <IoPauseOutline
                          className="control-icon"
                          onClick={handlePlayPause}
                        />
                      ) : (
                        <IoPlayOutline
                          className="control-icon"
                          onClick={handlePlayPause}
                        />
                      )}
                      <IoPlayForwardOutline
                        className="control-icon"
                        onClick={handleNext}
                      />
                    </div>
                    <div className="player-time">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  <IoOptionsOutline className="settings-icon" />
                </div>

                <audio
                  ref={audioRef}
                  src={tracks[currentTrackIndex].url}
                  autoPlay
                  controls={false}
                />

                <div
                  className="progress-bar"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const barWidth = rect.width;
                    const clickedPercent = clickX / barWidth;

                    const audio = audioRef.current;
                    if (audio && audio.duration) {
                      audio.currentTime = clickedPercent * audio.duration;
                    }
                  }}
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* TrackList Section */}
              <div className="track-list-container">
                {tracks.map((track, index) => (
                  <div
                    className={`track-item ${
                      index === currentTrackIndex ? "active" : ""
                    }`}
                    key={track.id}
                    onClick={() => handleTrackClick(index)}
                  >
                    <div className="track-item-info">
                      <div className="track-item-title">{track.title}</div>
                      <div className="track-item-artist">{track.artist}</div>
                    </div>
                    <div className="track-item-actions">
                      <FaApple className="action-icon" />
                      <FaShoppingCart className="action-icon" />
                      <FaBars className="action-icon" />
                      <div className="track-item-duration">
                        {track.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-right">
              <img
                src={headphone}
                alt="Headphones"
                className="headphone-image"
              />
            </div>

            <div className="sidebar-left">
              <img src={micros} alt="Microphone" className="microphone-image" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------- */}
      <div className="page-wrapper">
        <section className="services-section">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="video-gallery-section">
          <div className="video-grid">
            {videos.map((video) => (
              <div className="video-item" key={video.id}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumbnail"
                />
                <AiOutlineYoutube className="video-play-icon" />
                <div className="video-title-overlay">{video.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MusicPlayer;
