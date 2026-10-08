import Image from "next/image";
import Link from "next/link";
import type { PortfolioCardData } from "@/lib/portfolio";

type PortfolioCardProps = {
  item: PortfolioCardData;
  index: number;
};

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  const card = (
    <>
      <div className="card-media">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 620px) 50vw, (max-width: 900px) 33vw, 25vw"
            className="card-image"
          />
        ) : (
          <div className={`image-placeholder tone-${item.tone}`} role="img" aria-label={`${item.title} image slot`}>
            <span className="placeholder-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="placeholder-prompt">IMAGE SLOT</span>
          </div>
        )}
      </div>
      <div className="card-meta">
        <span className="card-title">{item.title}</span>
        <span className="card-label">{item.label}</span>
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link className={`image-card tone-${item.tone} card-openable`} href={item.href} aria-label={`${item.title}. Open About page`}>
        {card}
      </Link>
    );
  }

  return <article className={`image-card tone-${item.tone}`}>{card}</article>;
}
