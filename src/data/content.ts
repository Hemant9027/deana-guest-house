export const BUSINESS = {
  name: "Deana Smith Guest House",
  shortName: "Deana Smith",
  tagline: "A Comfortable Stay in Nassau",
  phoneDisplay: "+1 (242) 325-0140",
  phoneHref: "tel:+12423250140",
  email: "wondeana@hotmail.com",
  emailHref: "mailto:wondeana@hotmail.com",
  addressArea: "Blue Hill Road & Wellington Street",
  city: "Nassau, New Providence, Bahamas",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Blue+Hill+Road+%26+Wellington+Street%2C+Nassau%2C+New+Providence%2C+Bahamas",
} as const;

const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  hero: px(37196188, 1800), // tropical sunrise over a cozy green cottage among palms
  introShadow: px(28079387, 1200), // soft palm shadows on a white wall
  introDoor: px(32400687, 900), // cottage entrance wrapped in greenery
  roomA: px(2346090, 1000), // cozy bedroom, sunlight through curtains
  roomB: px(6890413, 1000), // light bedroom, white bed, wood furniture
  roomC: px(37323044, 1000), // white bedding, soft daylight, large windows
  nassauColour: px(30798172, 1400), // vibrant Caribbean facades
  nassauBeach: px(10490921, 1000), // turquoise shallows and palms
  nassauShells: px(19894531, 1000), // conch shells on sand
  nassauCraft: px(16063786, 900), // handwoven straw bag at a market stall
} as const;

export type GalleryItem = {
  src: string;
  caption: string;
  tall?: boolean;
};

export const GALLERY: GalleryItem[] = [
  { src: px(37089767, 1000), caption: "Offshore blue" },
  { src: px(36677530, 1000), caption: "Island colour" },
  { src: px(5014241, 1000), caption: "Sun on the sheets" },
  { src: px(16063786, 1000), caption: "Market finds" },
  { src: px(6635618, 1200), caption: "Cottage green", tall: false },
  { src: px(27394932, 1200), caption: "Palm shade" },
  { src: px(5853195, 1000), caption: "Room to breathe" },
  { src: px(19894531, 1200), caption: "Beach treasures" },
  { src: px(10490913, 1200), caption: "Where the palms lean" },
];
