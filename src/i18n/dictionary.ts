export type Lang = "id" | "en";

type Dict = Record<string, { id: string; en: string }>;

export const t: Dict = {
  // Nav
  "nav.about": { id: "Tentang", en: "About" },
  "nav.villa": { id: "Villa", en: "The Villa" },
  "nav.amenities": { id: "Fasilitas", en: "Amenities" },
  "nav.gallery": { id: "Galeri", en: "Gallery" },
  "nav.location": { id: "Lokasi", en: "Location" },
  "nav.reviews": { id: "Ulasan", en: "Reviews" },
  "nav.book": { id: "Pesan Sekarang", en: "Book Now" },

  // Hero
  "hero.badge": { id: "Villa Kolam Pribadi · Tanah Lot, Bali", en: "Private Pool Villa · Tanah Lot, Bali" },
  "hero.title": { id: "Ketenangan pribadi, sejauh langkah dari Tanah Lot.", en: "Private serenity, a stone's throw from Tanah Lot." },
  "hero.subtitle": {
    id: "Bali Taoka Villa — villa 2 kamar dengan kolam renang pribadi, seluruhnya milik Anda. Tenang, hijau, dan hanya beberapa menit dari Pura Tanah Lot.",
    en: "Bali Taoka Villa — a two-bedroom villa with a private pool, entirely yours. Quiet, green, and minutes from Tanah Lot Temple.",
  },
  "hero.cta.book": { id: "Pesan di Booking.com", en: "Book on Booking.com" },
  "hero.cta.whatsapp": { id: "Tanya via WhatsApp", en: "Ask on WhatsApp" },
  "hero.stat.rating": { id: "Rating Google", en: "Google Rating" },
  "hero.stat.guests": { id: "Tamu", en: "Guests" },
  "hero.stat.bedrooms": { id: "Kamar", en: "Bedrooms" },
  "hero.stat.pool": { id: "Kolam Pribadi", en: "Private Pool" },

  // About
  "about.kicker": { id: "Selamat Datang", en: "Welcome" },
  "about.title": { id: "Rumah kedua Anda di Bali", en: "Your home away from home in Bali" },
  "about.p1": {
    id: "Bali Taoka Villa adalah villa privat dua kamar dengan kolam renang pribadi di Beraban, Tabanan — hanya beberapa menit dari Pura Tanah Lot yang legendaris. Seluruh villa disewakan untuk Anda sendiri: tenang, aman, dan asri.",
    en: "Bali Taoka Villa is a private two-bedroom villa with its own pool in Beraban, Tabanan — just minutes from the legendary Tanah Lot Temple. The entire villa is yours alone: calm, secure, and green.",
  },
  "about.p2": {
    id: "Dilengkapi AC, dapur kecil, WiFi cepat, dan parkir gratis. Cocok untuk keluarga atau pasangan (hingga 4 tamu) yang mencari liburan Bali yang tenang namun dekat dengan segalanya.",
    en: "Fully equipped with air-conditioning, a kitchenette, fast WiFi, and free parking. Perfect for families or couples (up to 4 guests) seeking a peaceful Bali escape that's still close to everything.",
  },
  "about.feature.pool": { id: "Kolam pribadi", en: "Private pool" },
  "about.feature.entire": { id: "Seluruh villa untuk Anda", en: "Entire villa to yourself" },
  "about.feature.near": { id: "2,7 km ke Tanah Lot", en: "2.7 km to Tanah Lot" },

  // Highlights
  "why.kicker": { id: "Kenapa Menginap di Sini", en: "Why Stay Here" },
  "why.title": { id: "Dibuat untuk bersantai", en: "Made for unwinding" },
  "why.subtitle": {
    id: "Rating sempurna 5,0 di Google & 9,0 di Booking.com dari tamu yang menginap.",
    en: "A perfect 5.0 on Google and 9.0 on Booking.com from real guests.",
  },

  // The Villa
  "villa.kicker": { id: "Akomodasi", en: "The Accommodation" },
  "villa.title": { id: "Villa Dua Kamar", en: "The Two-Bedroom Villa" },
  "villa.subtitle": {
    id: "Ruang lega dengan kolam pribadi — nyaman untuk hingga 4 tamu.",
    en: "A spacious retreat with a private pool — comfortable for up to 4 guests.",
  },
  "villa.spec.bedrooms": { id: "Kamar Tidur", en: "Bedrooms" },
  "villa.spec.bathrooms": { id: "Kamar Mandi", en: "Bathrooms" },
  "villa.spec.guests": { id: "Tamu", en: "Guests" },
  "villa.spec.pool": { id: "Kolam", en: "Pool" },
  "villa.spec.pool.value": { id: "Pribadi", en: "Private" },
  "villa.desc": {
    id: "Villa dengan dua kamar tidur (masing-masing tempat tidur ukuran penuh) dan dua kamar mandi, ruang santai, area makan, serta dapur kecil lengkap dengan kulkas dan microwave. Kolam renang outdoor pribadi buka sepanjang tahun.",
    en: "A two-bedroom villa (each with a full bed) and two bathrooms, a seating area, dining space, and a kitchenette with fridge and microwave. The private outdoor pool is open year-round.",
  },
  "villa.cta": { id: "Cek Ketersediaan", en: "Check Availability" },

  // Amenities
  "amenities.kicker": { id: "Fasilitas", en: "Amenities" },
  "amenities.title": { id: "Semua yang Anda butuhkan", en: "Everything you need" },
  "amenities.subtitle": {
    id: "Fasilitas lengkap untuk menginap yang santai dan bebas repot.",
    en: "Complete facilities for a relaxed, hassle-free stay.",
  },

  // Gallery
  "gallery.kicker": { id: "Galeri", en: "Gallery" },
  "gallery.title": { id: "Intip suasananya", en: "A peek inside" },
  "gallery.subtitle": { id: "Kolam, kamar, dan sudut-sudut favorit villa.", en: "The pool, the rooms, and favorite corners of the villa." },
  "gallery.note": { id: "Foto dari listing villa. Kirim foto resolusi tinggi Anda kapan saja untuk hasil terbaik.", en: "Photos from the villa listing. Send your high-res originals anytime for the best quality." },

  // Location
  "location.kicker": { id: "Lokasi", en: "Location" },
  "location.title": { id: "Dekat dengan semuanya", en: "Close to everything" },
  "location.subtitle": {
    id: "Berada di Beraban, Tabanan — pintu gerbang menuju Tanah Lot.",
    en: "Set in Beraban, Tabanan — your gateway to Tanah Lot.",
  },
  "location.address": { id: "Alamat", en: "Address" },
  "location.nearby": { id: "Tempat Terdekat", en: "Nearby" },
  "location.directions": { id: "Buka di Google Maps", en: "Open in Google Maps" },

  // Reviews
  "reviews.kicker": { id: "Kata Tamu", en: "Guest Words" },
  "reviews.title": { id: "Dicintai para tamu", en: "Loved by guests" },
  "reviews.subtitle": { id: "Penilaian jujur dari tamu yang pernah menginap.", en: "Honest words from guests who have stayed." },

  // Booking / Contact
  "book.kicker": { id: "Reservasi", en: "Reservations" },
  "book.title": { id: "Siap untuk berlibur?", en: "Ready for your escape?" },
  "book.subtitle": {
    id: "Pesan langsung atau tanya ketersediaan — kami dengan senang hati membantu.",
    en: "Book directly or ask about availability — we're happy to help.",
  },
  "book.booking": { id: "Pesan di Booking.com", en: "Book on Booking.com" },
  "book.whatsapp": { id: "Chat WhatsApp", en: "Chat on WhatsApp" },
  "book.call": { id: "Telepon", en: "Call" },
  "book.checkin": { id: "Check-in", en: "Check-in" },
  "book.checkout": { id: "Check-out", en: "Check-out" },
  "book.deposit": { id: "Deposit (dikembalikan)", en: "Deposit (refundable)" },
  "book.rules": { id: "Bebas rokok · Tanpa pesta · Tanpa hewan peliharaan", en: "Non-smoking · No parties · No pets" },

  // Booking form
  "form.title": { id: "Reservasi via WhatsApp", en: "Reserve via WhatsApp" },
  "form.desc": { id: "Isi detail singkat, lalu kirim ke WhatsApp kami untuk cek ketersediaan.", en: "Fill in a few details, then send to our WhatsApp to check availability." },
  "form.name": { id: "Nama", en: "Name" },
  "form.name.ph": { id: "Nama lengkap Anda", en: "Your full name" },
  "form.checkin": { id: "Tanggal Check-in", en: "Check-in Date" },
  "form.nights": { id: "Lama Menginap", en: "Length of Stay" },
  "form.guests": { id: "Jumlah Tamu", en: "Number of Guests" },
  "form.nights.unit": { id: "malam", en: "night(s)" },
  "form.guests.unit": { id: "tamu", en: "guest(s)" },
  "form.submit": { id: "Kirim ke WhatsApp", en: "Send to WhatsApp" },
  "form.or": { id: "atau hubungi langsung", en: "or reach us directly" },
  // WhatsApp message
  "form.msg.intro": { id: "Halo Bali Taoka Villa! Saya ingin menanyakan ketersediaan:", en: "Hello Bali Taoka Villa! I'd like to check availability:" },
  "form.msg.name": { id: "Nama", en: "Name" },
  "form.msg.checkin": { id: "Check-in", en: "Check-in" },
  "form.msg.nights": { id: "Lama menginap", en: "Nights" },
  "form.msg.guests": { id: "Jumlah tamu", en: "Guests" },
  "form.msg.outro": { id: "Mohon info ketersediaan & harga. Terima kasih!", en: "Please share availability & pricing. Thank you!" },

  // Footer
  "footer.tagline": { id: "Villa kolam pribadi di dekat Tanah Lot, Tabanan, Bali.", en: "A private pool villa near Tanah Lot, Tabanan, Bali." },
  "footer.rights": { id: "Semua hak dilindungi.", en: "All rights reserved." },
  "footer.license": { id: "No. Izin", en: "Licence No." },
};

export function translate(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? key;
}
