import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Remya Management W.L.L | Hospitality Management Bahrain",
  description = "Remya Management W.L.L is a Bahrain-based hospitality management company offering hotel management, guest experience excellence, operations support, and revenue optimization.",
  canonical = "https://remyamanagement.com/",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/images/hero.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/hero.jpg" />
    </Helmet>
  );
}