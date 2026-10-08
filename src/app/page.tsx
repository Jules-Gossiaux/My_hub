import { PortfolioCard } from "@/components/portfolio-card";
import { SiteFrame } from "@/components/site-frame";
import { work } from "@/lib/portfolio";

export default function HomePage() {
  return (
    <SiteFrame active="gallery">
      <main className="portfolio-view gallery-view">
        <h1 className="sr-only">Jules Gossiaux portfolio</h1>
        <div className="gallery-grid" aria-label="Selected moments and projects">
          {work.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>
        <div className="gallery-caption" aria-hidden="true">
          <span>SELECTED MOMENTS &amp; PROJECTS</span>
          <span>01 <i>/</i> 02</span>
        </div>
      </main>
    </SiteFrame>
  );
}
