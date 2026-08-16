/**
 * Villa photos sourced from the Google Maps listing (the property's own
 * photos), optimized to WebP in /public/villa. Swap for owner-supplied
 * high-resolution originals when available.
 */
export const img = {
  pool: "/villa/pool.webp",
  exterior: "/villa/exterior.webp",
  living: "/villa/living.webp",
  bedroom: "/villa/bedroom.webp",
  bathroom: "/villa/bathroom.webp",
  wardrobe: "/villa/wardrobe.webp",
  rooftop: "/villa/rooftop.webp",
  kitchen: "/villa/kitchen.webp",
} as const;

export type GalleryPhoto = { src: string; label: { en: string; id: string }; big?: boolean };

export const galleryPhotos: GalleryPhoto[] = [
  { src: img.pool, label: { en: "Private Pool", id: "Kolam Pribadi" }, big: true },
  { src: img.bedroom, label: { en: "Bedroom", id: "Kamar Tidur" } },
  { src: img.living, label: { en: "Living Area", id: "Ruang Santai" } },
  { src: img.exterior, label: { en: "Villa Exterior", id: "Eksterior Villa" } },
  { src: img.bathroom, label: { en: "Bathroom", id: "Kamar Mandi" } },
  { src: img.rooftop, label: { en: "Rooftop Terrace", id: "Teras Atap" } },
  { src: img.kitchen, label: { en: "Kitchen", id: "Dapur" } },
  { src: img.wardrobe, label: { en: "Wardrobe & Desk", id: "Lemari & Meja" } },
];
