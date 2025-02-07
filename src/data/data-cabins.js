import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "Ivory Aspen",
    maxCapacity: 4,
    regularPrice: 5500,
    discount: 500,
    image: imageUrl + "ivory-aspen.jpg",
    description:
      "A secluded forest retreat surrounded by towering aspen trees, featuring a private deck, fireplace, and panoramic mountain views.",
  },
  {
    name: "Golden Birch",
    maxCapacity: 7,
    regularPrice: 6200,
    discount: 200,
    image: imageUrl + "golden-birch.jpg",
    description:
      "Nestled in a birch grove, this elegant cabin offers warm golden interiors, a freestanding bathtub, and a scenic lakefront patio.",
  },
  {
    name: "Velvet Timber",
    maxCapacity: 4,
    regularPrice: 4800,
    discount: 0,
    image: imageUrl + "velvet-timber.jpg",
    description:
      "A rustic-chic escape with plush furnishings, exposed wood beams, and a private hot tub under the stars.",
  },
  {
    name: "Silver Pine",
    maxCapacity: 5,
    regularPrice: 5900,
    discount: 450,
    image: imageUrl + "sliver-pine.jpg",
    description:
      "A sophisticated alpine hideaway with sleek modern décor, a glass-walled living space, and a crackling wood-burning stove.",
  },
  {
    name: "Ivory Summit",
    maxCapacity: 6,
    regularPrice: 12500,
    discount: 0,
    image: imageUrl + "ivory-summit.jpg",
    description:
      "A lavish mountainside lodge with floor-to-ceiling windows, a private chef, and breathtaking summit views.",
  },
  {
    name: "Celestial Lodge",
    maxCapacity: 7,
    regularPrice: 14000,
    discount: 1000,
    image: imageUrl + "celestial-lodge.jpg",
    description:
      "An ultra-exclusive safari lodge with infinity pool, stargazing deck, and private game drives.",
  },
  {
    name: "Majestic Crest",
    maxCapacity: 8,
    regularPrice: 15500,
    discount: 0,
    image: imageUrl + "majestic-crest.jpg",
    description:
      "A cliffside sanctuary with 360-degree views, personalized butler service, and an exclusive helicopter landing pad.",
  },
  {
    name: "Ivory Manor",
    maxCapacity: 10,
    regularPrice: 25000,
    discount: 0,
    image: imageUrl + "ivory-manor.jpg",
    description:
      "A stately villa with manicured gardens, an infinity pool, and marble interiors fit for royalty.",
  },

  {
    name: "Opal Horizon",
    maxCapacity: 12,
    regularPrice: 28500,
    discount: 0,
    image: imageUrl + "opal-horizan.jpg",
    description:
      "A hilltop retreat with panoramic ocean and mountain views, a glass-walled infinity pool, and designer interiors.",
  },

];
