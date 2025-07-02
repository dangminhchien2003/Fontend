import Header from "../../components/Header/Header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Artists from "../../components/Artists/Artists";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import FeaturedReleases from "../../components/FeaturedReleases/FeaturedReleases";
import Footer from "../../components/Footer/Footer";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoIosShareAlt } from "react-icons/io";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Artists />
      <MusicPlayer />
      <FeaturedReleases />
      {/* <VideoGallery /> */}

      {/* Code cho các nút nổi được đặt trực tiếp tại đây */}
      <div className="floating-buttons-container">
        <a href="/cart" className="floating-button cart-button">
          <TfiShoppingCart />
        </a>
        <a href="#aa" className="floating-button arrow-button">
          <IoIosShareAlt />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Home;
