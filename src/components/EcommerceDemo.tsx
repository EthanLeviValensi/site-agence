import ScrollDemo from "./ScrollDemo";
import { BrowseStage, CartStage, CheckoutStage, SuccessStage } from "./ecommerce/stages";

const STAGES = [
  {
    tag: "01 — Navigation",
    title: "Un catalogue rapide et clair",
    desc: "Chaque page se charge instantanément — pas de plugin qui ralentit la boutique.",
    Visual: BrowseStage,
  },
  {
    tag: "02 — Panier",
    title: "Ajouter au panier, sans friction",
    desc: "Un geste, une confirmation visuelle immédiate.",
    Visual: CartStage,
  },
  {
    tag: "03 — Paiement",
    title: "Un tunnel de paiement court",
    desc: "Le moins d'étapes possible entre l'envie d'acheter et l'achat.",
    Visual: CheckoutStage,
  },
  {
    tag: "04 — Confirmation",
    title: "Commande confirmée, client rassuré",
    desc: "Email de confirmation automatique et suivi de commande inclus.",
    Visual: SuccessStage,
  },
];

export default function EcommerceDemo() {
  return (
    <ScrollDemo
      id="ecommerce"
      eyebrow="Démonstration"
      heading={
        <>
          Une <span className="accent-serif gradient-text">boutique en ligne</span>, sans friction.
        </>
      }
      stages={STAGES}
    />
  );
}
