import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import HeroSection from "../components/heroSection";
import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="h-full">
      <HeroSection />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Del Bianco Santos - Sociedade de Advocacia" />
);
