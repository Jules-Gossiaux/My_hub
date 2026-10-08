export type PortfolioCardData = {
  title: string;
  label: string;
  file: string;
  alt: string;
  tone: "portrait" | "rugby" | "project" | "site" | "outside" | "resources" | "reading";
  href?: "/about";
  image?: string;
};

export const work: PortfolioCardData[] = [
  {
    title: "Jules",
    label: "ME",
    file: "profile/jules-portrait.webp",
    alt: "Portrait of Jules Gossiaux",
    tone: "portrait",
    href: "/about",
  },
  {
    title: "Rugby",
    label: "BELGIAN NATIONAL 1",
    file: "experiences/rugby-match.webp",
    alt: "Jules playing rugby",
    tone: "rugby",
  },
  {
    title: "Projects",
    label: "MADE WITH CODE",
    file: "projects/project-01.webp",
    alt: "A programming project by Jules",
    tone: "project",
  },
  {
    title: "Websites",
    label: "ON THE WEB",
    file: "sites/site-01.webp",
    alt: "A website made by Jules",
    tone: "site",
  },
  {
    title: "Outside",
    label: "COLD SUN, LONG WALKS",
    file: "experiences/winter-walk.webp",
    alt: "A winter walk in bright sunshine",
    tone: "outside",
  },
  {
    title: "For students",
    label: "RESOURCES",
    file: "resources/study-materials.webp",
    alt: "Study resources created for students",
    tone: "resources",
  },
];

export const life: PortfolioCardData[] = [
  {
    title: "Match day",
    label: "RUGBY",
    file: "experiences/rugby-match.webp",
    alt: "Jules on the rugby pitch",
    tone: "rugby",
  },
  {
    title: "A good book",
    label: "READING",
    file: "experiences/reading.webp",
    alt: "A book Jules is reading",
    tone: "reading",
  },
  {
    title: "Cold sunshine",
    label: "OUTSIDE",
    file: "experiences/winter-walk.webp",
    alt: "A sunny walk on a cold day",
    tone: "outside",
  },
];
