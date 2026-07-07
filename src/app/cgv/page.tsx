import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Synergy Solutions",
};

export default function Cgv() {
  return (
    <LegalPage
      eyebrow="CGV"
      title="Conditions générales de vente"
      updated="juillet 2026"
    >
      <LegalSection title="Article 1 — Objet">
        <p>
          Les présentes conditions générales de vente régissent les prestations de développement de
          logiciels sur mesure (sites e-commerce, écrans de cuisine/KDS, sites vitrines, CRM et
          outils métier) ainsi que les services d&apos;hébergement associés, proposés par Ethan Levi
          Valensi, exerçant sous le nom commercial Synergy Solutions (SIRET 106 285 729 00013).
        </p>
      </LegalSection>

      <LegalSection title="Article 2 — Devis et commande">
        <p>
          Toute prestation fait l&apos;objet d&apos;un devis gratuit et personnalisé, établi après
          échange sur les besoins du client. Le devis est valable 30 jours à compter de sa date
          d&apos;émission. La commande est réputée ferme à réception de l&apos;acceptation écrite du
          devis par le client (signature, réponse email ou paiement de l&apos;acompte).
        </p>
      </LegalSection>

      <LegalSection title="Article 3 — Délais">
        <p>
          Les délais de réalisation sont communiqués à titre indicatif lors de l&apos;établissement
          du devis. Ils dépendent notamment de la réactivité du client dans la fourniture des
          éléments nécessaires (contenus, accès, retours de validation).
        </p>
      </LegalSection>

      <LegalSection title="Article 4 — Prix et modalités de paiement">
        <p>
          Les prix sont exprimés en euros. Sauf mention contraire sur le devis, un acompte peut être
          demandé à la commande, le solde étant dû à la livraison. L&apos;hébergement, lorsqu&apos;il
          est souscrit, est facturé mensuellement à partir de 25&nbsp;€/mois, sauvegardes et
          maintenance incluses. Tout retard de paiement peut entraîner la suspension des prestations
          en cours.
        </p>
      </LegalSection>

      <LegalSection title="Article 5 — Propriété intellectuelle">
        <p>
          Sauf mention contraire au devis, le code source développé spécifiquement pour le client lui
          est cédé à réception du solde de la facture. Les composants, bibliothèques ou outils tiers
          réutilisés restent soumis à leurs licences respectives.
        </p>
      </LegalSection>

      <LegalSection title="Article 6 — Hébergement et résiliation">
        <p>
          L&apos;hébergement est souscrit mensuellement, sans engagement de durée sauf mention
          contraire. Le client peut y mettre fin à tout moment avec un préavis de 30 jours. En cas de
          résiliation, une exportation complète des données et du code source est fournie au client.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 — Responsabilité">
        <p>
          Synergy Solutions s&apos;engage à mettre en œuvre tous les moyens raisonnables pour assurer
          la qualité et la disponibilité des services fournis, sans garantie de résultat absolu
          (notamment en cas de force majeure ou de panne imputable à un tiers).
        </p>
      </LegalSection>

      <LegalSection title="Article 8 — Droit applicable">
        <p>
          Les présentes CGV sont soumises au droit français. Tout litige relève, à défaut de
          résolution amiable, des tribunaux compétents du ressort du siège de Synergy Solutions.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
