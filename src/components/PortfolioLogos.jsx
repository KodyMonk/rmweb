import { Link } from "react-router-dom";

const logos = Array.from({ length: 26 }, (_, i) => `/portfolio/${i + 1}.png`);

export default function PortfolioLogos({ showButton = false }) {
  return (
    <section className="portfolioLogoSection">
      <span className="sectionTag centerTag">Our Portfolio</span>

      <h2>
        <em>Brands</em> We’re Proud To Work With
      </h2>

      <div className="portfolioDivider">
        <span></span>
      </div>

      <div className="logoGrid">
        {logos.map((logo, index) => (
          <div className="logoBox" key={index}>
            <img src={logo} alt={`Portfolio brand ${index + 1}`} />
          </div>
        ))}
      </div>

      {showButton && (
        <Link to="/portfolio" className="portfolioViewBtn">
          View Full Portfolio
        </Link>
      )}
    </section>
  );
}