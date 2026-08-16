export const site = {
  name: "Bali Taoka Villa",
  fullName: "Bali Taoka Villa Tanah Lot",
  location: "Tanah Lot · Tabanan · Bali",
  url: "https://balitaokavilla.com",
  tagline: {
    en: "Your Private Pool Retreat by Tanah Lot",
    id: "Retret Kolam Pribadi di Dekat Tanah Lot",
  },
  ratings: {
    google: 5.0,
    googleReviews: 10,
    booking: 9.0,
    bookingLabel: { en: "Wonderful", id: "Luar Biasa" },
  },
  address: {
    line: "Jl. By Pass Tanah Lot, Beraban, Kec. Kediri, Kabupaten Tabanan, Bali 81212",
    area: "Beraban, Tabanan",
    plusCode: "94V3+VV Beraban",
    lat: -8.6053651,
    lng: 115.1047402,
  },
  phone: {
    display: "0822-6633-0798",
    tel: "+6282266330798",
    whatsapp: "6282266330798",
  },
  links: {
    booking: "https://www.booking.com/Share-FP6F4P",
    maps: "https://maps.app.goo.gl/rL1fcPnTG5Hfn3ZGA",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=-8.6053651,115.1047402",
    instagram: "https://instagram.com/",
  },
  stay: {
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    size: 16,
    privatePool: true,
    entirePlace: true,
  },
  policies: {
    checkIn: "15:00 – 18:00",
    checkOut: "08:00 – 12:00",
    deposit: "Rp 500.000",
    licence: "2209230002524 · 55199",
  },
  license: "2209230002524",
} as const;

export type Site = typeof site;
