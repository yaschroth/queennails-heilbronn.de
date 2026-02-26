// Queen Nails Heilbronn Configuration
// Das Nagelstudio im Heilbronner Zentrum

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Queen Nails",
    tagline: "DAS NAGELSTUDIO IM ZENTRUM",
    motto: "Nageldesign · Maniküre · Pediküre · Wimpernverlängerung",
    description: "Dein Nagelstudio im Heilbronner Zentrum. Professionelle Nagelpflege, kreatives Nageldesign, Shellac, Acryl, Gel und Wimpernverlängerung.",
    foundingYear: 2018,
    yearsExperience: 7,
    yearsInCenter: 7,
    satisfiedClients: "1000+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0176 57687986",
    phoneLink: "tel:+4917657687986",
    email: "info@queennails-heilbronn.de",
    whatsapp: "+49 176 57687986",
    whatsappLink: "https://wa.me/4917657687986",
    address: {
      street: "Allee 23",
      city: "Heilbronn",
      district: "Zentrum",
      zip: "74072",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sAllee%2023%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Allee+23,+74072+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/hungiboysnails/",
    facebook: "https://www.facebook.com/profile.php?id=100063575951179",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Sa 09:00-19:30",
    saturday: "09:00-19:30",
    sunday: "Geschlossen",
    note: "Mit oder ohne Termin",
    display: "Mo-Sa 09:00-19:30",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://wa.me/4917657687986",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.8,
    count: "120+",
    googleReviewLink: "https://www.google.com/maps/place/Queen+Nails+Heilbronn",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Queen Nails Team",
    fullName: "Queen Nails Heilbronn",
    image: "/nails/frau.jpg",
    bio: [
      "Willkommen bei Queen Nails Heilbronn, deinem Nagelstudio im Herzen der Stadt! Wir sind spezialisiert auf professionelles Nageldesign, Maniküre, Pediküre und Wimpernverlängerung.",
      "Jede zweite Frau kämpft mit Nagelproblemen. Ob brüchige, weiche oder zu kurze Nägel: Mit unseren professionellen Kunstnägeln bieten wir die perfekte Lösung für gepflegte, schöne Hände.",
      "Unser Studio in der Allee 23 ist zentral gelegen und bietet dir eine entspannte Atmosphäre. Mit oder ohne Termin, wir freuen uns auf deinen Besuch!",
    ],
    certifications: [
      { label: "Zentrale Lage", icon: "award" },
      { label: "Alle Nageltechniken", icon: "star" },
      { label: "10% Studentenrabatt", icon: "check" },
      { label: "1 Woche Garantie", icon: "shield" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Google Rezension",
      rating: 5,
      text: "Super freundliches Team und wunderschöne Nägel! Ich komme immer wieder gerne hierher. Die Qualität ist top und die Preise sind fair.",
      service: "Nageldesign",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Endlich ein Nagelstudio, das meine brüchigen Nägel perfekt in den Griff bekommt. Die Acryl-Nägel halten super und sehen natürlich aus.",
      service: "Acryl Nägel",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Tolle Lage mitten in der Stadt, nettes Personal und man kann auch ohne Termin vorbeikommen. Meine Pediküre war perfekt!",
      service: "Pediküre",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Sehr zufrieden mit meiner Wimpernverlängerung! Die halten richtig lange und sehen super natürlich aus. Absolute Empfehlung!",
      service: "Wimpernverlängerung",
      date: "Google Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Nageldesign",
      description: "Kreatives Nageldesign mit Gel, Acryl oder Pulver System. French, Glitzer, Fullcover oder individuelle Muster nach deinen Wünschen.",
      price: "ab 30€",
      image: "/nails/maniküre neu.png",
      benefits: ["Langanhaltend", "Alle Techniken"],
    },
    {
      title: "Shellac Maniküre",
      description: "Shellac für perfekt gepflegte Nägel mit bis zu 2 Wochen Haltbarkeit. Mit oder ohne Maniküre buchbar.",
      price: "ab 23€",
      image: "/nails/color.png",
      benefits: ["2 Wochen Halt", "Schnell trocken"],
    },
    {
      title: "Pediküre",
      description: "Professionelle Fußpflege für gepflegte Füße. Basic, mit Shellac oder Acryl. Entspannung pur für deine Füße.",
      price: "ab 23€",
      image: "/nails/pedicure.webp",
      benefits: ["Entspannend", "Gepflegt"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle und lange Wimpern für einen verführerischen Blick. Neuanlage und regelmäßiges Auffüllen.",
      price: "ab 50€",
      image: "/nails/wimpern.png",
      benefits: ["Volle Wimpern", "4 Wochen Halt"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Nageldesign",
      items: [
        { name: "UV Gel Natur", price: "30€" },
        { name: "UV Gel French/Fullcover", price: "40€" },
        { name: "Pulver Natur", price: "30€" },
        { name: "Pulver Farbe", price: "38€" },
        { name: "Pulver French/Glitzer", price: "40€" },
        { name: "Pink & White Weiß-Verlauf", price: "38€" },
      ],
    },
    {
      category: "Maniküre & Shellac",
      items: [
        { name: "Maniküre Basic", price: "10€" },
        { name: "Shellac mit Maniküre", price: "29€" },
        { name: "Shellac ohne Maniküre", price: "23€" },
        { name: "Ab 2 Farben", price: "+5€" },
        { name: "Extrem Länge", price: "+5€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Pediküre Basic", price: "23€" },
        { name: "Pediküre mit Shellac", price: "42€" },
        { name: "Pediküre mit Acryl", price: "60€" },
        { name: "Acryl ohne Pediküre", price: "40€" },
      ],
    },
    {
      category: "Wimpern & Extras",
      items: [
        { name: "Wimpernverlängerung Neuanlage", price: "85€" },
        { name: "Auffüllen nach 4 Wochen", price: "50€" },
        { name: "Wimpern Entfernen", price: "10€" },
        { name: "Muster-Design pro Nagel", price: "3€" },
        { name: "3D Design", price: "5€" },
        { name: "Strasssteine", price: "5€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/nails/maniküre 3.png",
    heroAlt: "Queen Nails Heilbronn | Professionelles Nagelstudio im Zentrum",
    hygiene: "/nails/face.jpg",
    gallery: [
      { url: "/nails/maniküre neu.png", category: "Nageldesign" },
      { url: "/nails/maniküre 3.png", category: "Maniküre" },
      { url: "/nails/color.png", category: "Shellac" },
      { url: "/nails/pedicure.webp", category: "Pediküre" },
      { url: "/nails/wimpern.png", category: "Wimpern" },
      { url: "/nails/wimpern3.jpg", category: "Wimpern" },
      { url: "/nails/frau.jpg", category: "Studio" },
      { url: "/nails/face.jpg", category: "Beauty" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Burgundy/Wine Red for Queen Nails
  // ============================================
  colors: {
    primary: "#b5242b", // Burgundy/Wine Red
    primaryRgb: "181, 36, 43",
    dark: "#2D2D2D",
    light: "#FDF5F5",
    lightAlt: "#F9EFEF",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Qualität & Service",
    description: "Bei Queen Nails steht Kundenzufriedenheit an erster Stelle. Wir arbeiten mit hochwertigen Produkten und bieten dir 1 Woche Garantie auf alle unsere Leistungen.",
    features: [
      {
        icon: "shield",
        title: "1 Woche Garantie",
        description: "Auf alle unsere Leistungen erhältst du eine Woche Garantie für deine Zufriedenheit.",
      },
      {
        icon: "star",
        title: "Hochwertige Produkte",
        description: "Wir verwenden nur geprüfte, qualitativ hochwertige Materialien für beste Ergebnisse.",
      },
      {
        icon: "award",
        title: "Zentrale Lage",
        description: "Unser Studio in der Allee 23 ist perfekt erreichbar, mitten im Heilbronner Zentrum.",
      },
      {
        icon: "check",
        title: "10% Studentenrabatt",
        description: "Studierende erhalten bei uns 10% Rabatt auf alle Leistungen mit gültigem Ausweis.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "Queen Nails Heilbronn Logo",
  },
};

export type Config = typeof config;
