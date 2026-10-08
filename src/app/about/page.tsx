import type { Metadata } from "next";
import { PortfolioCard } from "@/components/portfolio-card";
import { SiteFrame } from "@/components/site-frame";
import { life } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "A little more about Jules Gossiaux: rugby, books, programming, and life outside the pitch.",
};

export default function AboutPage() {
  return (
    <SiteFrame active="about">
      <main className="portfolio-view about-view">
        <div className="about-copy">
          <p className="kicker">OFF THE PITCH, BETWEEN PROJECTS</p>
          <h1>
            Usually serious.
            <br />
            <em>The teasing starts when I’m comfortable.</em>
          </h1>
          <p>Belgian National 1 rugby. A lot of books. A few projects in motion. Maths and physics questions from friends. Cold, sunny walks whenever I can get them.</p>
          <p>I try to assume people are doing the best they can with what they have. It helps me let things go. I’m good company for myself, too.</p>
          <a className="back-link" href="/">
            Back to the gallery <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-gallery" aria-label="A few things that feel like Jules">
          {life.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>
        <div className="gallery-caption" aria-hidden="true">
          <span>A FEW THINGS THAT FEEL LIKE ME</span>
          <span>02 <i>/</i> 02</span>
        </div>
      </main>
    </SiteFrame>
  );
}
