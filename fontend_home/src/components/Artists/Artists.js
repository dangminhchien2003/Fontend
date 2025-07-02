import React from "react";
import "./Artists.css";

const artists = [
  {
    name: "Barrage of Obscurity",
    genre: "Electro",
    img: "https://cdn.sanity.io/images/3y7lyjyz/production/22daec21c69727b076a33b6853d10319a8322a0a-1200x628.png?rect=286,0,628,628&w=800&h=800&fit=max&auto=format",
  },
  {
    name: "Residue",
    genre: "Rock",
    img: "https://live.mts.ru/image/1300x1300/lil-nas-x-novii-albom-montero-aaa3bf9f-4022-aa1d-07f7-15ee9164c993.jpg",
  },
  {
    name: "Thingamajig",
    genre: "Hip-Hop",
    img: "https://p9.itc.cn/q_70/images01/20220405/f26989755bc14e38bc6ea9dfbafddbdd.jpeg",
  },
  {
    name: "Concord",
    genre: "Electro / Rock",
    img: "https://tsrts.com/wp-content/uploads/2018/02/matteo-vistocco-nxqG_z3rmjQ-unsplash-360x540.jpg",
  },
];

const NewlySignedArtists = () => {
  return (
    <section className="artists-section">
      <div className="artists-title">
        <h3 className="subtitle">Newly Signed</h3>
        <h2 className="main-title">ARTISTS</h2>
      </div>
      <div className="artist-grid">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="artist-card fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }} // Mỗi thẻ trễ 0.2s
          >
            <img src={artist.img} alt={artist.name} className="artist-img" />
            <div className="artist-info">
              <h4>{artist.name.toUpperCase()}</h4>
              <p>{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-container">
       <button className="view-more-btn"><span>VIEW MORE ARTISTS</span></button>

      </div>
    </section>
  );
};

export default NewlySignedArtists;
