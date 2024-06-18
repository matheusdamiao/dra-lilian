import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import HeroSection from "../components/heroSection";
import ChallengesSection from "../components/challengesSection";
import BenefitsSection from "../components/benefitsSection";
import PsicanaliseSection from "../components/psicanaliseSection";
import QuoteSection from "../components/quoteSection";
import AboutSection from "../components/aboutSection";
import ReviewSection from "../components/reviewSection";
import FAQsection from "../components/FAQsection";
import FormSection from "../components/formSection";
import FooterSection from "../components/FooterSection";
import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <HeroSection />
      <FormSection />
      <FooterSection />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Fábio Teixeira - Psicanalista" />;
