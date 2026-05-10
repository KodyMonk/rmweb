const logos = [
    "/portfolio/1.png",
    "/portfolio/2.png",
    "/portfolio/3.png",
    "/portfolio/4.png",
    "/portfolio/5.png",
    "/portfolio/6.png",
    "/portfolio/7.png",
    "/portfolio/8.png",
    "/portfolio/9.png",
    "/portfolio/10.png",
    "/portfolio/11.png",
    "/portfolio/12.png",
    "/portfolio/13.png",
    "/portfolio/14.png",
    "/portfolio/15.png",
    "/portfolio/16.png",
    "/portfolio/17.png",
    "/portfolio/18.png",
    "/portfolio/19.png",
    "/portfolio/20.png",
    "/portfolio/21.png",
    "/portfolio/22.png",
    "/portfolio/23.png",
    "/portfolio/24.png",
];

import SEO from "../components/SEO";

export default function Portfolio() {
    return (
        <>
  <SEO
    title="Our Portfolio | Remya Management W.L.L Bahrain"
    description="Explore the portfolio of brands and businesses connected with Remya Management W.L.L across hospitality, dining, fitness, events, and lifestyle sectors in Bahrain."
    canonical="https://remyamanagement.com/portfolio"
  />
        <main className="portfolioPage">
            <section className="portfolioHero">
                <span className="sectionTag centerTag">Our Portfolio</span>

                <h1>
                    <em>Brands</em> We’re Proud To Work With
                </h1>

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
            </section>
        </main>
        </>
    );
}