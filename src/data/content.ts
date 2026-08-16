export type Localized = { en: string; id: string };

/** Amenity — `icon` is a lucide-react icon name resolved in the component. */
export type Amenity = {
  icon: string;
  label: Localized;
};

export const amenities: Amenity[] = [
  { icon: "Waves", label: { en: "Private Pool", id: "Kolam Renang Pribadi" } },
  { icon: "Wifi", label: { en: "Free Wi-Fi", id: "Wi-Fi Gratis" } },
  { icon: "Snowflake", label: { en: "Air Conditioning", id: "AC di Setiap Kamar" } },
  { icon: "CookingPot", label: { en: "Kitchenette", id: "Dapur Kecil" } },
  { icon: "Car", label: { en: "Free Parking", id: "Parkir Gratis" } },
  { icon: "Plane", label: { en: "Airport Shuttle", id: "Antar-Jemput Bandara" } },
  { icon: "Tv", label: { en: "Smart TV", id: "Smart TV" } },
  { icon: "Refrigerator", label: { en: "Refrigerator", id: "Kulkas" } },
  { icon: "Microwave", label: { en: "Microwave", id: "Microwave" } },
  { icon: "Bath", label: { en: "2 Bathrooms", id: "2 Kamar Mandi" } },
  { icon: "Cigarette", label: { en: "Non-Smoking", id: "Bebas Rokok" } },
  { icon: "ShieldCheck", label: { en: "Private & Secure", id: "Privat & Aman" } },
];

/** Reasons-to-stay highlights. */
export const highlights: {
  icon: string;
  title: Localized;
  desc: Localized;
}[] = [
  {
    icon: "Waves",
    title: { en: "Your Own Private Pool", id: "Kolam Renang Pribadi" },
    desc: {
      en: "The whole villa is yours — swim any time in your private outdoor pool.",
      id: "Seluruh villa milik Anda — berenang kapan saja di kolam pribadi Anda.",
    },
  },
  {
    icon: "Leaf",
    title: { en: "Peaceful & Green", id: "Tenang & Hijau" },
    desc: {
      en: "A quiet, private retreat surrounded by calm and lovely views.",
      id: "Retret privat yang tenang dengan pemandangan asri yang menenangkan.",
    },
  },
  {
    icon: "MapPin",
    title: { en: "Minutes to Tanah Lot", id: "Menit ke Tanah Lot" },
    desc: {
      en: "Just 2.7 km from the iconic Tanah Lot Temple and its sunsets.",
      id: "Hanya 2,7 km dari Pura Tanah Lot yang ikonik dan sunset-nya.",
    },
  },
  {
    icon: "Sparkles",
    title: { en: "Flawless 5.0 Rating", id: "Rating Sempurna 5,0" },
    desc: {
      en: "Guests rate cleanliness, comfort, and hospitality a perfect 10/10.",
      id: "Tamu menilai kebersihan, kenyamanan, dan keramahan 10/10.",
    },
  },
];

/** Gallery tiles — placeholder scenes tuned to villa photo categories. */
export const galleryTiles: {
  label: Localized;
  from: string;
  to: string;
}[] = [
  { label: { en: "Private Pool", id: "Kolam Pribadi" }, from: "190 55% 55%", to: "186 46% 26%" },
  { label: { en: "Bedroom", id: "Kamar Tidur" }, from: "38 46% 78%", to: "36 40% 55%" },
  { label: { en: "Living Area", id: "Ruang Santai" }, from: "44 40% 82%", to: "40 30% 60%" },
  { label: { en: "Exterior", id: "Eksterior" }, from: "152 35% 50%", to: "152 32% 28%" },
  { label: { en: "Kitchen", id: "Dapur" }, from: "40 44% 80%", to: "36 40% 58%" },
  { label: { en: "Sunset Nearby", id: "Sunset Sekitar" }, from: "28 75% 62%", to: "18 55% 45%" },
];

/** Guest reviews (from Google / Booking.com). */
export const reviews: {
  name: string;
  meta: Localized;
  source: string;
  rating: number;
  text: Localized;
}[] = [
  {
    name: "Tanjung Purwoadi",
    meta: { en: "Local Guide · Google", id: "Local Guide · Google" },
    source: "Google",
    rating: 5,
    text: {
      en: "A very peaceful private villa with lovely views and complete facilities including the pool. Nicely close to Tanah Lot.",
      id: "Lokasi private villa yang sangat tenang dengan pemandangan yang bagus, fasilitas lengkap disertai kolam renang, lokasi cukup dekat dengan Tanah Lot.",
    },
  },
  {
    name: "Krisna Dirgantara",
    meta: { en: "Google Review", id: "Ulasan Google" },
    source: "Google",
    rating: 5,
    text: {
      en: "Absolutely loved it 😍",
      id: "Aku menyukainya 😍",
    },
  },
  {
    name: "Booking.com Guest",
    meta: { en: "Verified stay · Booking.com", id: "Menginap terverifikasi · Booking.com" },
    source: "Booking.com",
    rating: 5,
    text: {
      en: "Wonderful — rated 10/10 for staff, cleanliness, comfort, and location. The entire place is yours.",
      id: "Luar biasa — dinilai 10/10 untuk staf, kebersihan, kenyamanan, dan lokasi. Seluruh tempat milik Anda.",
    },
  },
];

/** Nearby points of interest with distances. */
export const nearby: { name: Localized; distance: string }[] = [
  { name: { en: "Tanah Lot Temple", id: "Pura Tanah Lot" }, distance: "2.7 km" },
  { name: { en: "Ngurah Rai Airport", id: "Bandara Ngurah Rai" }, distance: "~23 km" },
  { name: { en: "Petitenget Temple", id: "Pura Petitenget" }, distance: "14 km" },
  { name: { en: "Seminyak Beach", id: "Pantai Seminyak" }, distance: "~15 km" },
];
