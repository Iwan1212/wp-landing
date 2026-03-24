export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  slug: string;
  name: string;
  date: string;
  location: string;
  cover: string;
  photos: GalleryPhoto[];
}

export const galleryEvents: GalleryEvent[] = [
  {
    slug: "lagoon-2025",
    name: "Lagoon 2025",
    date: "Czerwiec 2025",
    location: "Wrocław",
    cover: "/gallery/lagoon-2025.jpg",
    photos: [
      { src: "/gallery/lagoon-2025.jpg", alt: "Lagoon 2025 — turniej" },
    ],
  },
  {
    slug: "hmp-2025",
    name: "Halowe Mistrzostwa Polski 2025",
    date: "Marzec 2025",
    location: "Warszawa",
    cover: "/gallery/hmp-2025.jpg",
    photos: [
      { src: "/gallery/hmp-2025.jpg", alt: "HMP 2025 — mecz" },
    ],
  },
  {
    slug: "treningi-2025",
    name: "Treningi i życie drużyny",
    date: "2025",
    location: "Wrocław",
    cover: "/gallery/player-action-1.jpg",
    photos: [
      { src: "/gallery/player-action-1.jpg", alt: "Gracz w akcji" },
      { src: "/gallery/player-action-2.jpg", alt: "Gracz w akcji" },
      { src: "/gallery/team-outdoor.jpg", alt: "Drużyna na boisku" },
    ],
  },
];
