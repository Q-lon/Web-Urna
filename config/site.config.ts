export const siteConfig = {
  brandName: "[NOMBRE DE MARCA]",
  domain: null,
  email: null,
  phone: null,
  whatsapp: null,
  instagram: null,
  address: null,
  formEndpoint: null,
  videoUrl: null,
  videoPoster: "/images/lifestyle/urn-home-provisional.png",
} as const;

export type ContentStatus = "confirmed" | "placeholder" | "pending-client-validation";
