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

      <LegalSection title="Article 2 — Devis, commande et périmètre">
        <p>
          Toute prestation fait l&apos;objet d&apos;un devis gratuit et personnalisé, établi après
          échange sur les besoins du client. Le devis est valable 30 jours à compter de sa date
          d&apos;émission. La commande est réputée ferme à réception de l&apos;acceptation écrite du
          devis par le client (signature, réponse email ou paiement de l&apos;acompte).
        </p>
        <p>
          Toute demande hors du périmètre du devis accepté (fonctionnalité non prévue, refonte en
          cours de projet, contenu supplémentaire à intégrer...) fait l&apos;objet d&apos;un devis
          complémentaire, à valider avant réalisation.
        </p>
      </LegalSection>

      <LegalSection title="Article 3 — Délais">
        <p>
          Les délais de réalisation sont communiqués à titre indicatif lors de l&apos;établissement
          du devis. Ils dépendent notamment de la réactivité du client dans la fourniture des
          éléments nécessaires (contenus, accès, retours de validation).
        </p>
      </LegalSection>

      <LegalSection title="Article 4 — Prix, TVA et modalités de paiement">
        <p>
          Les prix sont exprimés en euros. TVA non applicable, article 293 B du Code général des
          impôts (franchise en base de TVA). Si Synergy Solutions venait à dépasser le seuil de
          franchise en base, les prix s&apos;entendraient alors majorés de la TVA au taux en vigueur
          à compter de cette date, sans effet rétroactif sur les factures déjà émises.
        </p>
        <p>Aucun escompte n&apos;est accordé pour paiement anticipé.</p>
        <p>
          Sauf mention contraire sur le devis, un acompte de 30&nbsp;% est demandé à la commande, le
          solde (70&nbsp;%) étant dû à la livraison. L&apos;hébergement, lorsqu&apos;il est souscrit,
          est facturé mensuellement à partir de 25&nbsp;€/mois, sauvegardes et maintenance incluses.
        </p>
        <p>
          <strong>En cas de non-paiement</strong> à l&apos;échéance, une pénalité de retard au taux
          de trois fois le taux d&apos;intérêt légal est appliquée de plein droit, ainsi
          qu&apos;une indemnité forfaitaire de recouvrement de 40&nbsp;€ (articles L.441-10 et
          D.441-5 du Code de commerce). Passé un délai de 15 jours après mise en demeure restée sans
          effet, Synergy Solutions se réserve le droit de suspendre l&apos;accès au service hébergé
          puis, si la situation persiste, de résilier le contrat, sans préjudice des sommes déjà
          dues.
        </p>
      </LegalSection>

      <LegalSection title="Article 5 — Propriété intellectuelle">
        <p>
          Sauf mention contraire au devis, le code source développé spécifiquement pour le client lui
          est cédé à réception du solde de la facture. Les composants, bibliothèques ou outils tiers
          réutilisés restent soumis à leurs licences respectives.
        </p>
      </LegalSection>

      <LegalSection title="Article 6 — Hébergement, maintenance et résiliation">
        <p>
          L&apos;hébergement est souscrit mensuellement, sans engagement de durée sauf mention
          contraire. Le client peut y mettre fin à tout moment avec un préavis de 30 jours. En cas de
          résiliation, une exportation complète des données et du code source est fournie au client.
        </p>
        <p>
          La maintenance incluse dans l&apos;hébergement couvre les correctifs de bugs et les mises à
          jour de sécurité. Elle ne couvre pas les évolutions fonctionnelles (nouvelles pages,
          nouvelles fonctionnalités, refonte visuelle), qui font l&apos;objet d&apos;un devis
          complémentaire.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 — Disponibilité du service et interruptions">
        <p>
          Synergy Solutions met en œuvre les moyens raisonnables pour assurer une disponibilité
          continue des services hébergés, sans garantie de disponibilité absolue (100&nbsp;%). Des
          interruptions ponctuelles peuvent survenir pour maintenance planifiée (annoncée à
          l&apos;avance lorsque cela est possible), mise à jour de sécurité urgente, ou panne du
          fournisseur d&apos;infrastructure (data center, réseau) — panne qui échappe au contrôle
          direct de Synergy Solutions.
        </p>
        <p>
          En cas d&apos;indisponibilité prolongée imputable à Synergy Solutions (plus de 24 heures
          consécutives, hors maintenance planifiée ou cause extérieure), le client peut demander un
          avoir proportionnel à la durée d&apos;indisponibilité sur sa prochaine facture
          d&apos;hébergement. Synergy Solutions ne saurait être tenue responsable des conséquences
          indirectes d&apos;une interruption (perte de chiffre d&apos;affaires, perte de clientèle,
          préjudice commercial).
        </p>
      </LegalSection>

      <LegalSection title="Article 8 — Cessation d'activité de Synergy Solutions">
        <p>
          En cas de cessation définitive de son activité, Synergy Solutions s&apos;engage à prévenir
          chaque client actif par email au moins 60 jours à l&apos;avance. Durant ce délai, chaque
          client reçoit une exportation complète de son code source et de ses données (base de
          données, fichiers, dernières sauvegardes disponibles), afin de lui permettre une reprise
          par un autre prestataire dans de bonnes conditions. Les sommes déjà versées pour des
          périodes d&apos;hébergement non encore consommées sont remboursées au prorata.
        </p>
      </LegalSection>

      <LegalSection title="Article 9 — Données personnelles (RGPD)">
        <p>
          Dans le cadre des prestations d&apos;hébergement (sites, CRM, écrans de cuisine/KDS),
          Synergy Solutions peut être amenée à traiter des données personnelles pour le compte du
          client, en qualité de sous-traitant au sens de l&apos;article 28 du Règlement Général sur
          la Protection des Données (RGPD). Dans ce cadre :
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>chaque partie s&apos;engage à respecter la réglementation applicable en matière de protection des données ;</li>
          <li>Synergy Solutions ne traite les données que sur instruction du client, pour les seules finalités convenues ;</li>
          <li>des mesures de sécurité raisonnables sont mises en œuvre pour protéger les données hébergées ;</li>
          <li>les données sont hébergées au sein de l&apos;Union européenne (infrastructure Hetzner, Allemagne) ;</li>
          <li>
            à la fin du contrat, les données sont supprimées dans un délai de 30 jours suivant la
            remise des exports prévue à l&apos;article 6, sauf obligation légale de conservation
            plus longue.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Article 10 — Obligations du client">
        <p>
          Le client garantit détenir l&apos;ensemble des droits nécessaires sur les contenus
          qu&apos;il fournit (textes, images, logos, marques) et s&apos;engage à ce que leur
          utilisation ne porte atteinte à aucun droit de tiers. Le client garantit également la
          licéité de son activité et du contenu diffusé sur le service livré. Le client est seul
          responsable de la confidentialité de ses identifiants de connexion et des actions réalisées
          depuis son compte.
        </p>
      </LegalSection>

      <LegalSection title="Article 11 — Force majeure">
        <p>
          Aucune des parties ne pourra être tenue responsable de l&apos;inexécution ou du retard dans
          l&apos;exécution de l&apos;une de ses obligations résultant d&apos;un cas de force majeure,
          au sens de l&apos;article 1218 du Code civil. Les obligations concernées sont suspendues
          pendant la durée de l&apos;évènement ; si celui-ci se prolonge au-delà de 30 jours, chaque
          partie peut résilier le contrat en cours sans indemnité.
        </p>
      </LegalSection>

      <LegalSection title="Article 12 — Responsabilité">
        <p>
          Synergy Solutions s&apos;engage à mettre en œuvre tous les moyens raisonnables pour assurer
          la qualité des prestations et services fournis, sans garantie de résultat absolu. La
          responsabilité de Synergy Solutions ne peut être engagée au-delà du montant effectivement
          versé par le client pour la prestation concernée.
        </p>
      </LegalSection>

      <LegalSection title="Article 13 — Droit applicable et litiges">
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, les parties
          s&apos;efforcent de trouver une solution amiable, y compris par voie de médiation, avant
          toute action judiciaire.
        </p>
        <p>
          <strong>
            Pour les clients professionnels, tout litige qui n&apos;aurait pu être résolu à
            l&apos;amiable relève de la compétence exclusive des tribunaux du ressort du siège de
            Synergy Solutions
          </strong>
          , y compris en cas de pluralité de défendeurs ou d&apos;appel en garantie.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
