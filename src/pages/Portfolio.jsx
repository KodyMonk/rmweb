import SEO from "../components/SEO";
import PortfolioLogos from "../components/PortfolioLogos";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Our Portfolio | Remya Management W.L.L Bahrain"
        description="Explore the portfolio of brands and businesses connected with Remya Management W.L.L across hospitality, dining, fitness, events, and lifestyle sectors in Bahrain."
        canonical="https://remyamanagement.com/portfolio"
      />

      <main className="portfolioPage">
        <PortfolioLogos />
      </main>
    </>
  );
}