export const siteConfig = {
  brandName: "ShantiBond",
  domain: null,
  email: "info@shantibond.com",
  phone: "+54 911 6115-7358",
  whatsapp: null,
  instagram: null,
  address: null,
  formEndpoint: null,
  videoUrl: null,
  videoPoster: "/images/lifestyle/urn-home-provisional.png",
} as const;

export type ContentStatus = "confirmed" | "placeholder" | "pending-client-validation";
