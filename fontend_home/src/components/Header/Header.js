import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import img from "../../assets/image/img.jpg";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";

const Header = () => {
  const [activeLink, setActiveLink] = useState("HOME");
  // isScrolledPastBanner: true khi người dùng cuộn qua một ngưỡng nhất định (ví dụ: chiều cao banner)
  const [isScrolledPastBanner, setIsScrolledPastBanner] = useState(false);
  // showStickyHeader: kiểm soát hoạt ảnh trượt vào/ra của header
  const [showStickyHeader, setShowStickyHeader] = useState(true);
  const lastScrollY = useRef(0); // Để theo dõi vị trí cuộn trước đó để phát hiện hướng cuộn

  useEffect(() => {
    // Định nghĩa ngưỡng cuộn cho việc chuyển đổi màu sắc header (trong suốt -> trắng)
    const bannerHeightThreshold = window.innerHeight * 0.7;
    const scrollEffectStartThreshold = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic 1: Thay đổi màu sắc header dựa trên vị trí banner
      if (currentScrollY > bannerHeightThreshold) {
        setIsScrolledPastBanner(true); // Đã vượt qua banner, chuyển sang nền trắng
      } else {
        setIsScrolledPastBanner(false); // Đang ở trong hoặc trên banner, giữ trong suốt
      }

      // Logic 2: Hiển thị/ẩn header dựa trên hướng cuộn
      if (currentScrollY <= scrollEffectStartThreshold) {
        setShowStickyHeader(true);
      }
      // Nếu đã cuộn qua ngưỡng khởi tạo hiệu ứng
      else {
        if (currentScrollY < lastScrollY.current) {
          // Đang cuộn lên: Hiển thị header
          setShowStickyHeader(true);
        } else {
          // Đang cuộn xuống: Ẩn header
          setShowStickyHeader(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Thêm lắng nghe sự kiện cuộn trang
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Áp dụng các lớp động dựa trên trạng thái cuộn
    <header
      className={`header-container ${
        isScrolledPastBanner ? "scrolled" : "transparent"
      } ${showStickyHeader ? "visible-sticky" : "hidden-sticky"}`}
    >
      <div className="header-content">
        <div className="logo">
          <a href="/">H</a>
        </div>

        <nav className="navigation">
          <ul className="navigation-ul">
            <li className="nav-item-with-menu">
              <a
                href="#home"
                className={`nav-link-home ${
                  activeLink === "HOME" ? "active" : ""
                }`}
                onClick={() => setActiveLink("HOME")}
              >
                HOME
              </a>

              <div className="mega-menu">
                <div className="column">
                  <h3>HOMEPAGES #1</h3>
                  <ul>
                    <li>
                      <a href="#item1">Main Home</a>
                    </li>
                    <li>
                      <a href="#item2">Home Alt</a>
                    </li>
                    <li>
                      <a href="#item3">Band Home</a>
                    </li>
                    <li>
                      <a href="#item4">One-Page</a>
                    </li>
                    <li>
                      <a href="#item4">Minimal</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>HOMEPAGES #2</h3>
                  <ul>
                    <li>
                      <a href="#item5">Recording Studio</a>
                    </li>
                    <li>
                      <a href="#item6">DJ/Events</a>
                    </li>
                    <li>
                      <a href="#item7">Festival</a>
                    </li>
                    <li>
                      <a href="#item8">Interactive Links</a>
                    </li>
                    <li>
                      <a href="#item7">Artist Slider</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>HOMEPAGES #3</h3>
                  <ul>
                    <li>
                      <a href="#item9">Videos Home</a>
                    </li>
                    <li>
                      <a href="#item10">Artists Metro</a>
                    </li>
                    <li>
                      <a href="#item11">Discography Home</a>
                    </li>
                    <li>
                      <a href="#item12">Blog Home</a>
                    </li>
                    <li>
                      <a href="#item12">Shop Home</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>LANDING</h3>
                  <ul>
                    <li>
                      <a href="#landing-page">
                        <img
                          src={img}
                          alt="Landing Page"
                          className="user-avatar"
                          style={{ width: "230px", height: "150px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item-with-menu">
              <a
                href="#pages"
                className={`nav-link-pages ${
                  activeLink === "PAGES" ? "active" : ""
                }`}
                onClick={() => setActiveLink("PAGES")}
              >
                PAGES
              </a>

              <div
                className="mega-menu mega-menu-pages"
                style={{
                  gap: "0px",
                  width: "220px",
                  padding: "30px",
                  left: "220px",
                }}
              >
                {" "}
                {/* Thêm class: mega-menu-pages */}
                <div className="column">
                  <ul>
                    <li>
                      <a href="#about-us">ABOUT US</a>
                    </li>
                    <li>
                      <a href="#about-the-band">ABOUT THE BAND</a>
                    </li>
                    <li>
                      <a href="#about-me">ABOUT ME</a>
                    </li>
                    <li>
                      <a href="#our-team">OUR TEAM</a>
                    </li>
                    <li>
                      <a href="#what-we-do">WHAT WE DO</a>
                    </li>
                    <li>
                      <a href="#contact-us">CONTACT US</a>
                    </li>
                    <li>
                      <a href="#get-in-touch">GET IN TOUCH</a>
                    </li>
                    <li>
                      <a href="#coming-soon">COMING SOON</a>
                    </li>
                    <li>
                      <a href="#maintenance">MAINTENANCE</a>
                    </li>
                    <li>
                      <a href="#custom-404">CUSTOM 404</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item-with-menu">
              <a
                href="#releases"
                className={`nav-link-releases ${
                  activeLink === "RELEASES" ? "active" : ""
                }`}
                onClick={() => setActiveLink("RELEASES")}
              >
                RELEASES
              </a>

              <div className="mega-menu">
                <div className="column">
                  <h3>TYPES</h3>
                  <ul>
                    <li>
                      <a href="#Standard">Standard</a>
                    </li>
                    <li>
                      <a href="#Overlay">Overlay</a>
                    </li>
                    <li>
                      <a href="#Label">Label</a>
                    </li>
                    <li>
                      <a href="#BrokenGrid">Broken Grid</a>
                    </li>
                    <li>
                      <a href="#AnimatedCover">Animated Cover</a>
                    </li>
                    <li>
                      <a href="#Metro">Metro</a>
                    </li>
                    <li>
                      <a href="#Filtered">Filtered</a>
                    </li>
                    <li>
                      <a href="#Carousel">Carousel</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>LAYOUTS</h3>
                  <ul>
                    <li>
                      <a href="#2Columns">2 Columns</a>
                    </li>
                    <li>
                      <a href="#3Columns">3 Columns</a>
                    </li>
                    <li>
                      <a href="#3ColumnsWide">3 Columns Wide</a>
                    </li>
                    <li>
                      <a href="#4Columns">4 Columns</a>
                    </li>
                    <li>
                      <a href="#4ColumnsWide">4 Columns Wide</a>
                    </li>
                    <li>
                      <a href="#4ColumnsFullWidth">4 Columns Full Width</a>
                    </li>
                    <li>
                      <a href="#5ColumnsWide">5 Columns Wide</a>
                    </li>
                    <li>
                      <a href="#5ColumnsFullWidth">5 Columns Full Width</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>CLASSIFICATION</h3>
                  <ul>
                    <li>
                      <a href="#FeaturedReleases">Featured Releases</a>
                    </li>
                    <li>
                      <a href="#UpcomingReleases">Upcoming Releases</a>
                    </li>
                    <li>
                      <a href="#CDReleases">CD Releases</a>
                    </li>
                    <li>
                      <a href="#VinylReleases">Vinyl Releases</a>
                    </li>
                    <li>
                      <a href="#DigitalDownloadReleases">
                        Digital Download Releases
                      </a>
                    </li>
                    <li>
                      <a href="#Artist#1Releases">Artist #1 Releases</a>
                    </li>
                    <li>
                      <a href="#Artist#2Releases">Artist #2 Releases</a>
                    </li>
                    <li>
                      <a href="#Artist#3Releases">Artist #3 Releases</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>SINGLES</h3>
                  <ul>
                    <li>
                      <a href="#ContentatRight">Content at Right</a>
                    </li>
                    <li>
                      <a href="#ContentatLeft">Content at Left</a>
                    </li>
                    <li>
                      <a href="#WideWidth">Wide Width</a>
                    </li>
                    <li>
                      <a href="#CustomHeader">Custom Header</a>
                    </li>
                    <li>
                      <a href="#Custom eader&Footer">Custom Header & Footer</a>
                    </li>
                    <li>
                      <a href="#TextOriented">Text Oriented</a>
                    </li>
                    <li>
                      <a href="#Minimal">Minimal</a>
                    </li>
                    <li>
                      <a href="#Compact">Compact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item-with-menu">
              <a
                href="#artists"
                className={`nav-link-artists ${
                  activeLink === "ARTISTS" ? "active" : ""
                }`}
                onClick={() => setActiveLink("ARTISTS")}
              >
                ARTISTS
              </a>

              <div className="mega-menu" style={{ gap: "340px" }}>
                <div className="column">
                  <h3>TYPES</h3>
                  <ul>
                    <li>
                      <a href="#Standard">Standard</a>
                    </li>
                    <li>
                      <a href="#Overlay">Overlay</a>
                    </li>
                    <li>
                      <a href="#Label">Label</a>
                    </li>
                    <li>
                      <a href="#Masonry">Masonry</a>
                    </li>

                    <li>
                      <a href="#Metro">Metro</a>
                    </li>
                    <li>
                      <a href="#List">List</a>
                    </li>
                    <li>
                      <a href="#Carousel">Carousel</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>LAYOUTS</h3>
                  <ul>
                    <li>
                      <a href="#2Columns">2 Columns</a>
                    </li>
                    <li>
                      <a href="#3Columns">3 Columns</a>
                    </li>
                    <li>
                      <a href="#3ColumnsWide">3 Columns Wide</a>
                    </li>
                    <li>
                      <a href="#4Columns">4 Columns</a>
                    </li>
                    <li>
                      <a href="#4ColumnsWide">4 Columns Wide</a>
                    </li>
                    <li>
                      <a href="#4ColumnsFullWidth">4 Columns Full Width</a>
                    </li>
                    <li>
                      <a href="#5ColumnsWide">5 Columns Wide</a>
                    </li>
                  </ul>
                </div>

                <div className="column">
                  <h3>SINGLES</h3>
                  <ul>
                    <li>
                      <a href="#InfoatRight">Info at Right</a>
                    </li>
                    <li>
                      <a href="#InfoatLeft">Info at Left</a>
                    </li>
                    <li>
                      <a href="#Minimal">Minimal</a>
                    </li>

                    <li>
                      <a href="#CustomLayout1">Custom Layout 1</a>
                    </li>
                    <li>
                      <a href="#CustomLayout2">Custom Layout 2</a>
                    </li>
                    <li>
                      <a href="#CustomLayout3">Custom Layout 3</a>
                    </li>

                    <li>
                      <a href="#CustomLayout4">Custom Layout 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item-with-menu">
              <a
                href="#events"
                className={`nav-link-events ${
                  activeLink === "EVENTS" ? "active" : ""
                }`}
                onClick={() => setActiveLink("EVENTS")}
              >
                EVENTS
              </a>

              <div
                className="mega-menu mega-menu-events"
                style={{
                  gap: "0px",
                  width: "220px",
                  padding: "30px",
                  left: "620px",
                }}
              >
                {" "}
                <div className="column">
                  <ul>
                    <li>
                      <a href="#list">LIST</a>
                    </li>
                    <li>
                      <a href="#2-Columns">2 COLUMNS</a>
                    </li>
                    <li>
                      <a href="#3-Columns">3 COLUMNS</a>
                    </li>
                    <li>
                      <a href="#4-Columns">4 COLUMNS</a>
                    </li>
                    <li>
                      <a href="#Carousel">CAROUSEL</a>
                    </li>
                    <li>
                      <a href="#Single-Event">SINGLE EVENT</a>
                    </li>
                    <li>
                      <a href="#Bandsintown">BANDSINTOWN</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* <li>
              <a
                href="#videos"
                className={`nav-link-videos ${
                  activeLink === "VIDEOS" ? "active" : ""
                }`}
                onClick={() => setActiveLink("VIDEOS")}
              >
                VIDEOS
              </a>
            </li> */}
            <li className="nav-item-with-menu">
              <a
                href="#videos"
                className={`nav-link-videos ${
                  activeLink === "VIDEOS" ? "active" : ""
                }`}
                onClick={() => setActiveLink("VIDEOS")}
              >
                VIDEOS
              </a>

              <div
                className="mega-menu mega-menu-pages"
                style={{
                  gap: "0px",
                  width: "220px",
                  padding: "30px",
                  left: "750px",
                }}
              >
                {" "}
                <div className="column">
                  <ul>
                    <li>
                      <a href="#2-Columns">2 COLUMNS</a>
                    </li>
                    <li>
                      <a href="#3-Columns">3 COLUMNS</a>
                    </li>
                    <li>
                      <a href="#4-Columns">4 COLUMNS</a>
                    </li>
                    <li>
                      <a href="#Filtered">FILTERED</a>
                    </li>
                    <li>
                      <a href="#Single-Video">SINGLE VIDEO</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>


            <li className="nav-item-with-menu">
              {" "}
              <a
                href="#shop"
                className={`nav-link-shop ${
                  activeLink === "SHOP" ? "active" : ""
                }`}
                onClick={() => setActiveLink("SHOP")}
              >
                SHOP
              </a>
              <div className="mega-menu mega-menu-shop">
                <div className="column">
                  <ul>
                    {/* --- MỤC 1: SHOP LAYOUTS --- */}
                    <li className="has-submenu">
                      <a href="#shop-layouts">SHOP LAYOUTS </a>
                      <span className="arrow-wrapper">
                        <FaChevronRight className="arrow-icon" />{" "}
                      </span>

                      {/* === THÊM SUB-MENU VÀO ĐÂY === */}
                      <ul className="sub-menu">
                        <li>
                          <a href="#sidebar-right">Sidebar Right</a>
                        </li>
                        <li>
                          <a href="#sidebar-left">Sidebar Left</a>
                        </li>
                        <li>
                          <a href="#archives">Archives</a>
                        </li>
                      </ul>
                    </li>

                    {/* --- MỤC 2: SHOP GRID (Làm tương tự nếu muốn) --- */}
                    <li className="has-submenu">
                      <a href="#shop-grid">SHOP GRID </a>
                      <span className="arrow-wrapper">
                        <FaChevronRight className="arrow-icon" />{" "}
                      </span>

                      {/* === THÊM SUB-MENU VÀO ĐÂY === */}
                      <ul className="sub-menu">
                        <li>
                          <a href="#grid-2-cols">2 Columns</a>
                        </li>
                        <li>
                          <a href="#grid-3-cols">3 Columns</a>
                        </li>
                        <li>
                          <a href="#grid-4-cols">4 Columns</a>
                        </li>
                      </ul>
                    </li>

                    <li className="underline-on-hover">
                      <a href="#products-layout">PRODUCTS LAYOUT </a>
                      <span className="arrow-wrapper">
                        <FaChevronRight className="arrow-icon" />{" "}
                      </span>
                    </li>
                    <li>
                      <a href="#single-products">SINGLE PRODUCTS </a>
                      <span className="arrow-wrapper">
                        <FaChevronRight className="arrow-icon" />{" "}
                      </span>
                    </li>
                    <li>
                      <a href="#pages-shop">PAGES </a>
                      <span className="arrow-wrapper">
                        <FaChevronRight className="arrow-icon" />{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#blog"
                className={`nav-link-blog ${
                  activeLink === "BLOG" ? "active" : ""
                }`}
                onClick={() => setActiveLink("BLOG")}
              >
                BLOG
              </a>
            </li>

            <li className="nav-item-with-menu">
              <a
                href="#elements"
                className={`nav-link-elements ${
                  activeLink === "ELEMENTS" ? "active" : ""
                }`}
                onClick={() => setActiveLink("ELEMENTS")}
              >
                ELEMENTS
              </a>

              <div className="mega-menu" style={{ gap: "225PX" }}>
                <div className="column">
                  <h3 className="title-h3">MEDIAS</h3>
                  <ul>
                    <li>
                      <a href="#MusicPlayers">Music Players</a>
                    </li>
                    <li>
                      <a href="#SpotifyPlayers">Spotify Players</a>
                    </li>
                    <li>
                      <a href="#VideoPlayers">Video Players</a>
                    </li>
                    <li>
                      <a href="#VideoOpener">Video Opener</a>
                    </li>
                    <li>
                      <a href="#Bandsintown">Bandsintown</a>
                    </li>
                    <li>
                      <a href="#Instagram">Instagram Gallery</a>
                    </li>
                    <li>
                      <a href="#ImageSliders">Image Sliders</a>
                    </li>
                    <li>
                      <a href="#SliderRevolution">Slider Revolution</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>PRESENTATION</h3>
                  <ul>
                    <li>
                      <a href="#Accordion">Accordion</a>
                    </li>
                    <li>
                      <a href="#Banner">Banner</a>
                    </li>
                    <li>
                      <a href="#Clients/Endorsments">Clients/Endorsments</a>
                    </li>
                    <li>
                      <a href="#Countdown">Countdown</a>
                    </li>
                    <li>
                      <a href="#ImageGallery">Image Gallery</a>
                    </li>
                    <li>
                      <a href="#PieCharts">Pie Charts</a>
                    </li>
                    <li>
                      <a href="#PricingTables">Pricing Tables</a>
                    </li>
                    <li>
                      <a href="#BandMembers">Band Members</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>STANDARD</h3>
                  <ul>
                    <li>
                      <a href="#Buttons">Buttons</a>
                    </li>
                    <li>
                      <a href="#CallToAction">Call To Action</a>
                    </li>
                    <li>
                      <a href="#ContactForm">Contact Form</a>
                    </li>
                    <li>
                      <a href="#GoogleMaps">Google Maps</a>
                    </li>
                    <li>
                      <a href="#Newsletter">Newsletter</a>
                    </li>
                    <li>
                      <a href="#Tabs">Tabs</a>
                    </li>
                    <li>
                      <a href="#Testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="#Twitter">Twitter</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h3>Typography</h3>
                  <ul>
                    <li>
                      <a href="#Counters">Counters</a>
                    </li>
                    <li>
                      <a href="#Headings">Headings</a>
                    </li>
                    <li>
                      <a href="#IconwithText">Icon with Text</a>
                    </li>
                    <li>
                      <a href="#List">List</a>
                    </li>
                    <li>
                      <a href="#Typography">Typography</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="header-icons">
          <button className="icon-btn">
            <FaSearch />
          </button>
          <button className="icon-btn">
            <FaHeart />
          </button>
          <button className="icon-btn">
            <FaShoppingCart />
          </button>
          <button className="icon-btn mobile-menu-toggle">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
