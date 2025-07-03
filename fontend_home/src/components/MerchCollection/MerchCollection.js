import React, { useRef, useState, useEffect } from "react";
import "./MerchCollection.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import powerOverMeImg from "../../assets/image/biadia1.png";
import Img from "../../assets/image/biadia2.png";

// Component chạy số
const AnimatedNumber = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalSteps = 30;
    const stepTime = duration / totalSteps;
    const increment = target / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <div className="stat-number">{count}</div>;
};

const MerchCollection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  //reset trạng thái khi nhạc phát xong
  const handleEnded = () => {
    setIsPlaying(false);
  };

  const stats = [
    { value: 14, label: "ARTISTS" },
    { value: 75, label: "RELEASES" },
    { value: 621, label: "TRACKS" },
    { value: 75, label: "RELEASES" },
  ];
  return (
    <div>
      <div className="container">
        <div className="header">
          <h2 className="newArrivals">New Arrivals</h2>
          <h1 className="merchCollectionTitle">MERCH COLLECTION</h1>
        </div>

        <div className="productGrid">
          {/* Product 1 */}
          <div className="productItem">
            <div className="hoverOverlay"></div>
            <div className="productImageWrapper">
              <img
                src={powerOverMeImg}
                alt="Power Over Me CD"
                className="productImage"
              />
              <div className="playIconOverlay" onClick={handlePlay}>
                <span className="icon">{isPlaying ? "⏸" : "▶"}</span>
              </div>
              <div className="newBadge">NEW</div>
            </div>
            {/* Audio */}
            <audio
              ref={audioRef}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              onEnded={handleEnded}
            />
            <div className="productInfo">
              <span className="productCategory">CD</span>
              <div className="productRow">
                <div className="productDetails">
                  <h3 className="productName">PRODUCT #10</h3>
                  <p className="productPrice">$28.00</p>
                </div>
                <div className="productActions">
                  <div className="iconWrapper">
                    <span className="tooltip">Add to wishlist</span>
                    <AiOutlineHeart />
                  </div>

                  <div className="iconWrapper-cart">
                    <span className="tooltip">Add to cart</span>
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="productItem">
            <div className="hoverOverlay"></div>
            <div className="productImageWrapper">
              <img src={Img} alt="CD Album" className="productImage" />
            </div>
            <div className="productInfo">
              <span className="productCategory">CD</span>
              <div className="productRow">
                <div className="productDetails">
                  <h3 className="productName">PRODUCT #9</h3>
                  <p className="productPrice">$29.00</p>
                </div>
                <div className="productActions">
                  <div className="iconWrapper">
                    <span className="tooltip">Add to wishlist</span>
                    <AiOutlineHeart />
                  </div>

                  <div className="iconWrapper-cart">
                    <span className="tooltip">Add to cart</span>
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="productItem">
            <div className="hoverOverlay"></div>
            <div className="productImageWrapper">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLUTn4C-EDLynzf4XNGdW1IbTBNa6J76i4O5u0B5xQk6zQOMF7"
                alt="Drai Baka T-Shirt"
                className="productImage"
              />
            </div>
            <div className="productInfo">
              <span className="productCategory">CLOTHING</span>
              <div className="productRow">
                <div className="productDetails">
                  <h3 className="productName">PRODUCT #6</h3>
                  <p className="productPrice">$28.00</p>
                </div>
                <div className="productActions">
                  <div className="iconWrapper">
                    <span className="tooltip">Add to wishlist</span>
                    <AiOutlineHeart />
                  </div>

                  <div className="iconWrapper-cart">
                    <span className="tooltip">Add to cart</span>
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mer-view-more-container">
          <button className="mer-view-more-button">
            <span>VIEW MORE PRODUCTS</span>
          </button>
        </div>
      </div>
      {/* ------ */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <AnimatedNumber target={stat.value} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchCollection;
