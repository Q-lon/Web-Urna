/**
 * Source of truth supplied by the client on 2026-09-11.
 * Quoted copy is verbatim. Prepared for the next content integration stage;
 * this module deliberately does not change the current prototype's layout.
 * Full original brief: docs/shantibond-source.txt.
 */
export const CLIENT_INFORMATION_PENDING = "[INFORMACIÓN A DEFINIR CON EL CLIENTE]";

export const shantiBond = {
  name: "ShantiBond",
  claim: "La conexión profunda.",
  description: "Una urna memorial para mascotas con pantalla audiovisual integrada. Buscamos socios exclusivos que la fabriquen, certifiquen y distribuyan en su mercado bajo licencia de marca.",
  business: {
    model: "licencia de marca exclusiva",
    title: "Licencia de marca exclusiva",
    description: "ShantiBond no exporta producto terminado ni vende a través de intermediarios genéricos. Operamos con licencias de marca exclusivas, territorio por territorio, con un socio local por mercado.",
    brandContributions: [
      "Marca y diseño industrial registrados",
      "Estándar de calidad y ficha técnica del producto",
      "Identidad de marca y materiales comerciales",
      "Acceso directo al proveedor del módulo audiovisual",
      "Exclusividad territorial",
    ],
    partnerContributions: [
      "Fabricación local o regional",
      "Certificación y cumplimiento normativo del mercado",
      "Red de distribución y canal comercial propio",
      "Capital de trabajo",
      "Compromiso con el estándar de calidad de la marca",
    ],
  },
  process: {
    title: "Cómo avanza una alianza",
    steps: [
      { title: "Primer contacto", description: "Nos contás tu mercado, tu canal y tu capacidad de fabricación o distribución." },
      { title: "Conversación exploratoria", description: "Evaluamos juntos el ajuste, bajo confidencialidad." },
      { title: "Análisis de mercado", description: "Revisamos volumen potencial, canal y condiciones locales." },
      { title: "Acuerdo de licencia", description: "Definimos territorio, estándar de calidad y condiciones comerciales." },
      { title: "Lanzamiento", description: "Salís al mercado como parte de una marca internacional en expansión." },
    ],
  },
  founders: {
    title: "Los primeros, socios fundadores de su mercado",
    description: "Los primeros socios de cada territorio se incorporan como socios fundadores: acompañan el crecimiento de la marca desde el inicio y ayudan a definir el estándar que seguirán los que vengan después.",
  },
  contact: {
    title: "Contanos sobre tu territorio",
    description: "Cada conversación empieza igual: entender tu mercado, tu canal y tu capacidad real de fabricación o distribución.",
    cta: "Iniciar la conversación",
    email: "info@shantibond.com",
    phone: "+54 911 6115-7358",
  },
  products: [{
    description: "Una categoría nueva, no una urna más.",
    module: "módulo audiovisual",
    image: "/images/products/shantibond-memorial-original.png",
    name: CLIENT_INFORMATION_PENDING,
    technicalOperation: "Servicio frontal: el panel con acrílico se retira sin intervenir la cavidad de las cenizas.",
    technology: "Módulo genérico e intercambiable con estándar técnico definido por la licencia.",
    materials: "Maderas nobles seleccionadas por su calidez y durabilidad.",
    dimensions: CLIENT_INFORMATION_PENDING,
    playback: "Fotos y video en loop.",
    connectivity: "Carga por USB. Sin internet, aplicaciones, cuentas ni recolección de datos.",
    installation: CLIENT_INFORMATION_PENDING,
    duration: CLIENT_INFORMATION_PENDING,
    manufacturing: "Fabricación local según ficha técnica y estándar mínimo obligatorio de calidad para madera y pantalla.",
    certifications: CLIENT_INFORMATION_PENDING,
    price: CLIENT_INFORMATION_PENDING,
    purchaseModel: CLIENT_INFORMATION_PENDING,
  }],
  logo: { original: "/images/brand/shantibond-logo-original.png" },
  footer: {
    claim: "La conexión profunda.",
    description: "Licencia de marca exclusiva para el nuevo memorial audiovisual de mascotas.",
    copyright: "© 2026 ShantiBond. Todos los derechos reservados.",
    registration: "Marca y diseño registrados / en proceso de registro según territorio.",
  },
  territories: CLIENT_INFORMATION_PENDING,
  investment: CLIENT_INFORMATION_PENDING,
  contractualTerms: CLIENT_INFORMATION_PENDING,
} as const;
