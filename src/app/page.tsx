import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import { JsonLd } from "react-schemaorg";

// import CallToAction from "./components/CallToAction";
import { WebPage, SoftwareApplication } from "schema-dts";

export default function Home() {
  return (
    <>
      <JsonLd<WebPage>
        item={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "CRM System Landing Page",
          url: "https://www.prospello.tech",
          description:
            "A powerful CRM platform for managing sales, customers, and operations with secure authentication and role-based access.",
          publisher: {
            "@type": "Organization",
            name: "CRM System",
            logo: {
              "@type": "ImageObject",
              url: "https://www.crmsystem.com/images/logo.png",
            },
          },
        }}
      />
      <JsonLd<SoftwareApplication>
        item={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CRM System",
          operatingSystem: "Web",
          applicationCategory: "BusinessApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          description:
            "A modern CRM platform for sales, customer management, inventory, and operations.",
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          {/* <CallToAction /> */}
          <FeaturesSection />
          <HowItWorksSection />
          <Prices />
        </main>
        <Footer />
      </div>
    </>
  );
}
