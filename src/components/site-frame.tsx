import Link from "next/link";
import type { ReactNode } from "react";

type SiteFrameProps = {
  active: "gallery" | "about";
  children: ReactNode;
};

export function SiteFrame({ active, children }: SiteFrameProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Jules Gossiaux portfolio home">
          <span className="brand-mark" aria-hidden="true">
            JG
          </span>
          <span>Jules Gossiaux</span>
        </Link>
        <nav className="view-nav" aria-label="Portfolio pages">
          <Link className={`view-link${active === "gallery" ? " is-active" : ""}`} href="/" aria-current={active === "gallery" ? "page" : undefined}>
            Gallery <span>01</span>
          </Link>
          <Link className={`view-link${active === "about" ? " is-active" : ""}`} href="/about" aria-current={active === "about" ? "page" : undefined}>
            About <span>02</span>
          </Link>
        </nav>
        <p className="top-note">
          RUGBY <i>·</i> CODE <i>·</i> LIFE
        </p>
      </header>
      <div id="main" className="viewport mx-auto">
        {children}
      </div>
      <footer className="bottom-bar">
        <span>
          Belgian rugby runner-up <b aria-hidden="true">✳</b> Programmer <b aria-hidden="true">✳</b> Reader
        </span>
        <span>JULES GOSSIAUX <b aria-hidden="true">✳</b> 2026</span>
      </footer>
    </>
  );
}
