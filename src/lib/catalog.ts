import bedroomImage from "@/assets/storefront/bedroom.jpg";
import diningImage from "@/assets/storefront/dining.jpg";
import heroImage from "@/assets/storefront/hero.jpg";
import livingImage from "@/assets/storefront/living.jpg";

export type ProductCategory = "living" | "dining" | "bedroom" | "lighting";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  collection: string;
  price: number;
  material: string;
  colour: string;
  image: string;
  imagePosition?: string;
  description: string;
  details: string[];
  isNew?: boolean;
  bestseller?: boolean;
}

export const collections: Record<
  ProductCategory,
  { title: string; shortTitle: string; copy: string; image: string }
> = {
  living: {
    title: "Living, considered",
    shortTitle: "Living",
    copy: "Sofas, occasional pieces and sculptural seating designed for slow, generous living.",
    image: livingImage,
  },
  dining: {
    title: "The dining edit",
    shortTitle: "Dining",
    copy: "Solid timber, tactile upholstery and enduring forms made for daily rituals and long evenings.",
    image: diningImage,
  },
  bedroom: {
    title: "Rest, refined",
    shortTitle: "Bedroom",
    copy: "Quiet silhouettes and natural materials that turn the bedroom into a private retreat.",
    image: bedroomImage,
  },
  lighting: {
    title: "A study in light",
    shortTitle: "Lighting",
    copy: "Warm, architectural lighting in brushed metals and softly diffused glass.",
    image: heroImage,
  },
};

export const products: Product[] = [
  {
    id: "aurelia-modular-sofa",
    name: "Aurelia Modular Sofa",
    category: "living",
    collection: "The Aurelia Series",
    price: 4295,
    material: "Textured wool",
    colour: "Oatmeal",
    image: livingImage,
    imagePosition: "center",
    description: "A generous modular sofa with deep feather-wrapped seating and a softly architectural profile.",
    details: ["Hand-finished hardwood frame", "Responsibly sourced feather blend", "Modular configuration", "Made to order in 8–10 weeks"],
    bestseller: true,
  },
  {
    id: "marlow-lounge-chair",
    name: "Marlow Lounge Chair",
    category: "living",
    collection: "Marlow",
    price: 1495,
    material: "Cotton velvet",
    colour: "Deep olive",
    image: livingImage,
    imagePosition: "right center",
    description: "A compact statement chair with a curved back, generous seat and quietly enveloping comfort.",
    details: ["Solid oak internal frame", "High-density foam seat", "Cotton velvet upholstery", "Available in six colours"],
    isNew: true,
  },
  {
    id: "paloma-travertine-table",
    name: "Paloma Coffee Table",
    category: "living",
    collection: "Paloma Stone",
    price: 1890,
    material: "Travertine",
    colour: "Natural stone",
    image: livingImage,
    imagePosition: "center bottom",
    description: "A low monolithic table that lets the natural variation of honed travertine become the detail.",
    details: ["Solid natural travertine", "Honed protective finish", "Each piece is unique", "White-glove delivery included"],
  },
  {
    id: "rowan-side-table",
    name: "Rowan Side Table",
    category: "living",
    collection: "Rowan",
    price: 695,
    material: "Walnut",
    colour: "Smoked walnut",
    image: heroImage,
    imagePosition: "center bottom",
    description: "A compact solid-walnut side table with softened edges and a sculptural pedestal base.",
    details: ["FSC-certified walnut", "Hand-applied natural oil", "Solid timber construction", "Arrives fully assembled"],
  },
  {
    id: "elara-dining-table",
    name: "Elara Dining Table",
    category: "dining",
    collection: "Elara",
    price: 3495,
    material: "Oak",
    colour: "Smoked oak",
    image: diningImage,
    imagePosition: "center",
    description: "An oval dining table with a calm silhouette, substantial pedestal base and hand-finished oak grain.",
    details: ["Seats six to eight", "Solid European oak", "Water-based smoked finish", "White-glove installation"],
    bestseller: true,
  },
  {
    id: "celeste-dining-chair",
    name: "Celeste Dining Chair",
    category: "dining",
    collection: "Celeste",
    price: 625,
    material: "Linen and oak",
    colour: "Warm ivory",
    image: diningImage,
    imagePosition: "left bottom",
    description: "A softly curved dining chair balancing tailored linen upholstery with a dark oak frame.",
    details: ["Performance linen", "Solid oak frame", "Supportive foam core", "Sold individually"],
    isNew: true,
  },
  {
    id: "solenne-sideboard",
    name: "Solenne Sideboard",
    category: "dining",
    collection: "Solenne",
    price: 2795,
    material: "Oak veneer",
    colour: "Espresso",
    image: diningImage,
    imagePosition: "right center",
    description: "A quietly substantial sideboard with softened corners, concealed storage and fine brass detailing.",
    details: ["Four soft-close doors", "Adjustable internal shelving", "Brushed brass hardware", "Cable management opening"],
  },
  {
    id: "atelier-pendant",
    name: "Atelier Pendant",
    category: "lighting",
    collection: "Atelier Light",
    price: 920,
    material: "Opal glass",
    colour: "Warm white",
    image: diningImage,
    imagePosition: "center top",
    description: "A softly rippled pendant that casts a broad, flattering pool of light above the dining table.",
    details: ["Hand-finished opal glass", "Dimmable LED compatible", "Adjustable drop", "Ceiling rose included"],
  },
  {
    id: "seren-platform-bed",
    name: "Seren Platform Bed",
    category: "bedroom",
    collection: "Seren",
    price: 3195,
    material: "Boucle",
    colour: "Natural",
    image: bedroomImage,
    imagePosition: "center",
    description: "An upholstered platform bed with a low profile, softly rounded headboard and generous tactile finish.",
    details: ["European king size", "Solid timber slat system", "Performance boucle", "White-glove assembly"],
    bestseller: true,
  },
  {
    id: "nocturne-bedside-table",
    name: "Nocturne Bedside Table",
    category: "bedroom",
    collection: "Nocturne",
    price: 895,
    material: "Walnut",
    colour: "Dark walnut",
    image: bedroomImage,
    imagePosition: "right center",
    description: "A two-drawer bedside table with restrained proportions, solid timber handles and a rich walnut finish.",
    details: ["Solid walnut fronts", "Soft-close drawers", "Hand-oiled finish", "Arrives fully assembled"],
  },
  {
    id: "luma-table-lamp",
    name: "Luma Table Lamp",
    category: "lighting",
    collection: "Luma",
    price: 495,
    material: "Bronze and stone",
    colour: "Antique bronze",
    image: bedroomImage,
    imagePosition: "right top",
    description: "A compact dome lamp combining softly aged bronze with a weighty honed-stone base.",
    details: ["Touch dimmer", "Integrated warm LED", "Honed stone base", "Braided fabric cable"],
    isNew: true,
  },
  {
    id: "vesper-floor-lamp",
    name: "Vesper Floor Lamp",
    category: "lighting",
    collection: "Vesper",
    price: 1150,
    material: "Brushed brass",
    colour: "Aged brass",
    image: heroImage,
    imagePosition: "left center",
    description: "A slender arched floor lamp with a warm aged finish and precisely focused pool of light.",
    details: ["Solid brass arm", "Weighted stone base", "Dimmable foot switch", "LED bulb included"],
  },
];

export const featuredProducts = products.filter((product) => product.bestseller || product.isNew).slice(0, 4);

export const getProduct = (id: string) => products.find((product) => product.id === id);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(price);
