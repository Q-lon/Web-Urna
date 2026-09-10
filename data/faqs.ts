import type { ContentStatus } from "@/config/site.config";

export type FAQ = { question: string; answer: string; status: ContentStatus };

const questions = [
  "¿Qué es una urna digital?",
  "¿Qué muestra la pantalla?",
  "¿Cómo se cargan las imágenes?",
  "¿La urna necesita alimentación eléctrica?",
  "¿El display permanece siempre encendido?",
  "¿Se puede personalizar?",
  "¿Qué tamaños están disponibles?",
  "¿Qué materiales se utilizan?",
  "¿Cómo se realiza el pedido?",
  "¿Cuánto demora la entrega?",
];

export const faqs: FAQ[] = questions.map((question, index) => ({
  question,
  answer:
    index === 0
      ? "Es una urna física para mascotas que incorpora un display integrado para acompañar el recuerdo con imágenes. Las características definitivas se informarán según el modelo seleccionado."
      : index === 1
        ? "El concepto contempla imágenes de la mascota. El tipo de contenido y sus funciones están pendientes de validación."
        : "Esta información estará disponible próximamente, una vez validadas las características definitivas del producto.",
  status: "pending-client-validation",
}));
