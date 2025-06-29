import './HeroBanner.css';
const HeroBanner = () => (
  <section id="home" className="hero-banner">
    <div className="hero-overlay" />
    <div className="hero-content">
      <h1>Music is Life</h1>
      <p>Creative Music for Creative Artists</p>
      <button className="cta-btn">See Discography</button>
    </div>
  </section>
);
export default HeroBanner;