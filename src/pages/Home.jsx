import { ArrowRight, Building2, ConciergeBell, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home() {
  return (
<>
    <SEO
      title="Remya Management W.L.L | Hospitality Management Company in Bahrain"
      description="Remya Management W.L.L provides premium hospitality management, hotel operations support, guest experience excellence, and revenue optimization services in Bahrain."
      canonical="https://remyamanagement.com/"
    />


    <main>
      <section className="hero">
        <aside className="leftRail">
  <div className="railSocial">
    <span>Connect With Us</span>

    <a
      href="https://www.facebook.com/p/Remya-Management-SPC-100063519401631/"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      f
    </a>

    <Link to="/contact" aria-label="Contact">
      ☎
    </Link>
  </div>
</aside>

        <div className="heroDecorText">RM</div>

        <div className="heroContent">
          <span className="sectionTag">Hospitality Excellence</span>

          <h1>
            Partner in <br />
            achieving <br />
            <em>excellence</em> within <br />
            the industry.
          </h1>

          <div className="heroDesc">
            <span></span>
            <p>
              Delivering innovative solutions and personalized services tailored
              to hotels and resort properties.
            </p>
          </div>

          <Link to="/about" className="primaryBtn">
            Discover More <ArrowRight size={17} />
          </Link>
        </div>

        <div className="heroSlider">
          <span>01</span>
          <div></div>
          <span>02</span>
          <div></div>
          <span>03</span>
        </div>

        <div className="heroCards">
          <div>
            <Building2 size={28} />
            <h3>Hotel Management</h3>
            <p>Operational excellence</p>
          </div>

          <div>
            <ConciergeBell size={28} />
            <h3>Guest Experience Excellence</h3>
            <p>Creating memorable stays</p>
          </div>

          <div>
            <TrendingUp size={28} />
            <h3>Revenue Optimization</h3>
            <p>Maximizing performance</p>
          </div>
        </div>
      </section>

      <section className="aboutPreview">
        <div className="aboutText">
          <span className="sectionTag">Who We Are</span>

          <h2>
            About <span>Remya</span>
          </h2>

          <p>
            Our focus lies in delivering innovative solutions and personalized
            services tailored to hotels and resort properties. Our mission
            revolves around driving superior guest experiences, optimizing
            revenue performance, and bolstering market presence for our clients.
          </p>

          <Link to="/about" className="textLink">
            Read More About Us <ArrowRight size={18} />
          </Link>
        </div>

        <div className="aboutImageWrap">
          <img src="/images/lobby.jpg" alt="Luxury hotel lobby" />
        </div>
      </section>
    </main>
      </>
  );
}