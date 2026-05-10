import {
  ArrowRight,
  Building2,
  ConciergeBell,
  TrendingUp,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
return (
<>
  <SEO
    title="About Remya Management W.L.L | Hospitality Management Bahrain"
    description="Learn about Remya Management W.L.L, a Bahrain-based hospitality management company focused on hotel operations, guest satisfaction, brand growth, and revenue performance."
    canonical="https://remyamanagement.com/about"
  />
    <main className="aboutPage">
      <section className="aboutHero">
        <span className="sectionTag centerTag">About Remya</span>

        <h1>
          Building <em>excellence</em> across hospitality management.
        </h1>

        <p>
          Remya Management W.L.L is a Bahrain-based hospitality management
          company focused on improving operations, guest experiences, revenue
          performance, and brand presence for hotels, resorts, restaurants, and
          lifestyle venues.
        </p>
      </section>

      <section className="aboutIntro">
        <div className="aboutIntroImage">
          <img src="/images/lobby.jpg" alt="Luxury hospitality interior" />
        </div>

        <div className="aboutIntroText">
          <span className="sectionTag">Who We Are</span>

          <h2>
            Welcome to <span>Remya Management</span>
          </h2>

          <p>
            We partner with hospitality businesses to create stronger systems,
            better service standards, and more memorable guest experiences. Our
            approach combines operational discipline, brand refinement, and
            market-focused strategy.
          </p>

          <p>
            From daily hotel operations to guest satisfaction, revenue planning,
            and brand growth, we help hospitality properties build long-term
            value with a professional and detail-driven approach.
          </p>

          <Link to="/contact" className="primaryBtn aboutBtn">
            Work With Us <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="aboutValues">
        <span className="sectionTag centerTag">What We Stand For</span>

        <h2>
          Hospitality built on <em>trust, service, and performance.</em>
        </h2>

        <div className="valuesGrid">
          <div className="valueCard">
            <ShieldCheck />
            <h3>Operational Excellence</h3>
            <p>
              We create smooth, structured, and efficient hospitality operations
              that support both teams and guests.
            </p>
          </div>

          <div className="valueCard">
            <Users />
            <h3>Guest-Centered Service</h3>
            <p>
              Every decision is guided by the guest journey, from first
              impression to lasting loyalty.
            </p>
          </div>

          <div className="valueCard">
            <TrendingUp />
            <h3>Revenue Growth</h3>
            <p>
              We focus on practical strategies that improve visibility,
              performance, and long-term profitability.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutMission">
        <div>
          <span className="sectionTag">Our Mission</span>
          <h2>
            To help hospitality brands reach their <em>highest standard.</em>
          </h2>
        </div>

        <p>
          Our mission is to support hospitality businesses with personalized
          management solutions that strengthen service quality, improve market
          positioning, and deliver consistent guest satisfaction.
        </p>
      </section>

      <section className="aboutStats">
        <div>
          <Building2 />
          <strong>Hotels</strong>
          <span>Management Support</span>
        </div>

        <div>
          <ConciergeBell />
          <strong>Guests</strong>
          <span>Experience Excellence</span>
        </div>

        <div>
          <Sparkles />
          <strong>Brands</strong>
          <span>Premium Positioning</span>
        </div>

        <div>
          <TrendingUp />
          <strong>Growth</strong>
          <span>Revenue Optimization</span>
        </div>
      </section>
    </main>
      </>
  );
}