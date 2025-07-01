import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./HeroBanner.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    subtitle: "Record Label",
    title: "A HOME FOR CREATIVE MUSIC ARTISTS",
    description:
      "Vestibulum ullamcorper mauris at ligula. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Vestibulum suscipit nulla quis orci.",
  },
  {
    img: "https://images.unsplash.com/photo-1527766833261-b09c3163a791",
    subtitle: "Music Event",
    title: "FESTIVAL AND EVENTS ORGANIZER",
    description:
      "Vestibulum ullamcorper mauris at ligula. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Vestibulum suscipit nulla quis orci.",
  },
  {
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    subtitle: "Record Shop",
    title: "ONLINE MUSIC AND MERCH STORE",
    description:
      "Vestibulum ullamcorper mauris at ligula. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Vestibulum suscipit nulla quis orci.",
  },
];

const HeroBanner = () => {
  return (
    <section id="home" className="hero-banner">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-bg animated-slide"
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            <div className="hero-overlay animated-overlay" />
            <div className="hero-content animated-content">
              <h4 className="hero-subtitle">{slide.subtitle}</h4>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <button className="cta-btn">Learn More</button>
            </div>
          </SwiperSlide>
        ))}
       <div className="arrow-wrapper prev-wrapper">
  <div className="swiper-button-prev"></div>
</div>
<div className="arrow-wrapper next-wrapper">
  <div className="swiper-button-next"></div>
</div>

      </Swiper>
    </section>
  );
};

export default HeroBanner;
