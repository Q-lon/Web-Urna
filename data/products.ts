import type { ContentStatus } from "@/config/site.config";

export type Product = {
  name: string;
  slug: string;
  description: string;
  images: string[];
  material: string | null;
  dimensions: string | null;
  display: string | null;
  colors: string[];
  personalization: string[];
  price: number | null;
  availability: string | null;
  status: ContentStatus;
};

const descriptions = [
  "Una silueta serena para imaginar cómo el recuerdo puede integrarse al hogar.",
  "Una exploración de proporciones suaves y presencia discreta.",
  "Un concepto de líneas esenciales, pensado como objeto de interior.",
  "Una variante visual para evaluar futuras terminaciones y detalles.",
];

export const products: Product[] = descriptions.map((description, index) => ({
  name: `Modelo ${String(index + 1).padStart(2, "0")}`,
  slug: `modelo-${String(index + 1).padStart(2, "0")}`,
  description,
  images: [
    index % 2 === 0
      ? "/images/products/urn-studio-provisional.png"
      : "/images/lifestyle/urn-home-provisional.png",
    "/images/lifestyle/hero-urn-provisional.png",
  ],
  material: null,
  dimensions: null,
  display: null,
  colors: [],
  personalization: [],
  price: null,
  availability: null,
  status: "placeholder",
}));

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
