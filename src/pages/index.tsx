import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import HeroSection from "../components/heroSection";
import { SEO } from "../components/seo";
import ServicesSection from "../components/servicesSection";
import DiferentialSection from "../components/diferentialSection";
import CtaSection from "../components/ctaSection";
import AboutSection from "../components/aboutSection";
import AboutOffice from "../components/aboutOffice";
import ContactSection from "../components/contactSection";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Menu/>
      <HeroSection />
      <ServicesSection/>
      <DiferentialSection/>
      <CtaSection/>
      <AboutSection/>
      <AboutOffice/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Del Bianco Santos - Sociedade de Advocacia" />
);
