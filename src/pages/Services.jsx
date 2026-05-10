import SEO from "../components/SEO";

export default function Services() {
  const services = [
    "Hotel Management",
    "Guest Experience Excellence",
    "Revenue Optimization",
    "Operations Consulting",
    "Hospitality Brand Strategy",
    "Resort Management Solutions",
  ];


  return (
    <>
  <SEO
    title="Hospitality Management Services Bahrain | Remya Management W.L.L"
    description="Remya Management W.L.L offers hotel management, operations consulting, guest experience improvement, hospitality brand strategy, and revenue optimization services."
    canonical="https://remyamanagement.com/services"
  />
    <section className="page">
      <span className="sectionTag">What We Do</span>
      <h1>Our Services</h1>

      <div className="serviceGrid">
        {services.map((service) => (
          <div className="serviceCard" key={service}>
            <h3>{service}</h3>
            <p>
              Premium solutions designed for hospitality businesses seeking
              stronger operations, better guest satisfaction, and sustainable
              growth.
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}