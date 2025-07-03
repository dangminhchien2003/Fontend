import React from "react";
import "./LatestNewsSection.css";
import { FaInstagram } from "react-icons/fa";
const LatestNewsSection = () => {
  const posts = [
    {
      category: "NEWS",
      type: "GALLERY POST",
      date: "JULY 18, 2018",
      image:
        "https://gospelmusic.org/hubfs/Educational%20Initiatives%20Photos/SongwritersMeetup_Image.png",
      description:
        "Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
    },
    {
      category: "PHOTO",
      type: "FEATURED PLAYLIST",
      date: "FEBRUARY 17, 2018",
      image:
        "https://www.journal.hr/wp-content/uploads/2019/01/Koncert-cover.jpg",
      description:
        "Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
    },
    {
      category: "NEWS",
      type: "STANDARD POST",
      date: "FEBRUARY 16, 2018",
      image:
        "https://www.i-share.fr/wp-content/uploads/2020/09/144_musique_les_bienfaits_de_la_musique_sur_la_sante_714.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    },
    {
      category: "VIDEO",
      type: "VIDEO POST",
      date: "FEBRUARY 16, 2018",
      image: "https://mirapolnext.pl/images/opisy/006302/opis5.jpg",
      description:
        "Sed lectus. Etiam ut purus mattis mauris sodales aliquam. Curabitur...",
    },
  ];

  const images = [
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRb7GUS3CEUutoSsMgKh0OjjWrDz6Cf44b6Pi434nChBoi26rmw",
    "https://bzmedia.cz/band/b6/5a/d0ef/e9/6b/18bc/B294yoZl808Wvv05GI50H13a6EbRZXxt.jpg",
    "https://i.pinimg.com/736x/cd/84/2d/cd842d2824ae5e5a47e7e9c2fe8a94eb.jpg",
    "https://bobbyjayota.com/wp-content/uploads/2017/02/14369218_540565469471761_576735285_n-1024x1024.jpg",
    "https://i.pinimg.com/236x/41/3f/05/413f054440dc6c604a9d2ea6ea6cd2b0.jpg",
    "https://rvb-img.reverb.com/image/upload/s--_kBDBCDR--/a_0/f_auto,t_large/v1677929842/sgwthgro3kjsquzbgnzc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexq1tyv7Sg6WE_sCy0gwlgd9pE5ZRpWeR7QftqlzRDHzFoUyQ",
    "https://e0.pxfuel.com/wallpapers/573/974/desktop-wallpaper-international-edm-festivals-edc-data-src-edm-festival-edm.jpg",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSmF1CoHwLKJN0NBLstAqkTUK5d1s5dtUGbIhD4cR_g44HoWI1",
    "https://f4.bcbits.com/img/0027591346_10.jpg",
    "https://3.bp.blogspot.com/-yjvASAQWrSA/VOBdF0ih1WI/AAAAAAAACGE/gRkiflQVpAY/s320/boombox+LaurenOutLoud.jpg",
    "https://globbos.com/wp-content/uploads/2009/09/les-paul-girls17_343x523.jpg",
  ];
  return (
    <div>
      <div className="latest-news-section">
        <div className="header">
          <h2 className="whats-up-title">What's Up</h2>
          <h1 className="latest-news-title">LATEST NEWS</h1>
        </div>

        <div className="posts-grid">
          {posts.map((post, index) => (
            <div className="post-card">
              <div className="image-container">
                <img src={post.image} alt={post.type} className="post-image" />
                <div className="category-overlay">{post.category}</div>
              </div>
              <div className="post-content">
                {" "}
                <h3 className="post-type">{post.type}</h3>
                <p className="post-date">{post.date}</p>
                <p className="post-description">{post.description}</p>
                <a href="#read" className="read-more-button">
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="late-view-more-container">
          <button className="late-view-more-button">
            <span>VIEW MORE POSTS</span>
          </button>
        </div>
      </div>
      {/* ------------ */}

      <div className="subscribe-section">
        <h2 className="subscribe-text">Subscribe</h2>{" "}
        {/* Chữ "Subscribe" lớn */}
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="your email"
            className="email-input"
            required
          />
          <button type="submit" className="join-button">
            JOIN
          </button>
        </form>
      </div>
      {/* -------------- */}
      <div className="instagram-gallery-section">
        <div className="instagram-global-overlay">INSTAGRAM @HERION_WT</div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="gallery-image"
              />
              <div className="image-hover-overlay">
                <FaInstagram className="instagram-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
