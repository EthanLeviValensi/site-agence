import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Confidentialité — Application BookFlow",
  description:
    "Quelles données l'application mobile BookFlow traite, pourquoi, avec quels prestataires, et comment exercer vos droits.",
};

export default function ConfidentialiteApplication() {
  return (
    <LegalPage
      eyebrow="Application mobile"
      title="Politique de confidentialité"
      updated="septembre 2026"
    >
      <LegalSection title="De quoi parle cette page">
        <p>
          Elle concerne uniquement l&apos;<strong>application mobile BookFlow</strong>, destinée aux
          professionnels qui gèrent leur établissement — instituts de beauté, salons, restaurants.
          Elle ne s&apos;adresse pas aux personnes qui réservent chez eux.
        </p>
        <p>
          Éditeur : Ethan Levi Valensi — Synergy Solutions, entrepreneur individuel, 641 chemin
          Costelongue, 13680 Lançon-Provence. SIRET 106 285 729 00013. Contact :{" "}
          <span className="mono">ethanlevivalensi@gmail.com</span>
        </p>
      </LegalSection>

      <LegalSection title="Deux rôles à ne pas confondre">
        <p>
          Pour le <strong>compte professionnel</strong>{" "}qui se connecte à l&apos;application, Synergy
          Solutions est <strong>responsable de traitement</strong>.
        </p>
        <p>
          Pour les <strong>données des clientes et clients</strong>{" "}de l&apos;établissement — leurs
          rendez-vous, leurs coordonnées, leurs encaissements — Synergy Solutions n&apos;est que{" "}
          <strong>sous-traitant</strong>. C&apos;est l&apos;établissement qui décide de ce qui est
          collecté et pourquoi. Une personne qui souhaite exercer ses droits sur ces données
          s&apos;adresse donc à l&apos;établissement, pas à nous.
        </p>
      </LegalSection>

      <LegalSection title="Ce que l'application collecte">
        <p>
          <strong>Votre compte professionnel.</strong>{" "}Adresse e-mail et mot de passe, pour vous
          identifier auprès de votre établissement. Le mot de passe n&apos;est jamais conservé sur le
          téléphone : seul un jeton de session, valable quatre-vingt-dix jours, est stocké dans l&apos;espace
          sécurisé du système.
        </p>
        <p>
          <strong>Un identifiant d&apos;appareil pour les notifications.</strong>{" "}Si vous les
          activez, le téléphone reçoit de Google un jeton technique que nous conservons pour vous
          prévenir d&apos;une nouvelle réservation. Il ne permet ni de vous localiser, ni de vous
          identifier ailleurs. Vous pouvez couper les notifications à tout moment depuis
          l&apos;écran « Plus » : le jeton cesse alors d&apos;être utilisé.
        </p>
        <p>
          <strong>La position du téléphone, au moment d&apos;un encaissement sans contact
          uniquement.</strong>{" "}Les réseaux de cartes bancaires l&apos;exigent pour prévenir la
          fraude. Elle est transmise directement à Stripe par son composant de paiement : Synergy
          Solutions ne la reçoit pas, ne la stocke pas et n&apos;y a pas accès. Hors encaissement,
          aucune position n&apos;est relevée.
        </p>
        <p>
          <strong>Les données de votre établissement.</strong>{" "}Rendez-vous, fiches clientes,
          prestations, encaissements et journal de caisse. L&apos;application ne fait que les
          afficher : elles appartiennent à l&apos;établissement et vivent sur nos serveurs, en
          France.
        </p>
      </LegalSection>

      <LegalSection title="Ce que l'application ne fait pas">
        <p>
          Aucune publicité, aucun traceur publicitaire, aucune mesure d&apos;audience. Aucune donnée
          n&apos;est vendue, louée ou cédée à un tiers à des fins commerciales — cela vaut aussi
          pour les données des clientes de nos établissements, dont nous ne sommes que sous-traitant
          et que nous ne pourrions pas céder même si nous le voulions.
        </p>
        <p>
          <strong>Les numéros de carte bancaire ne transitent jamais par l&apos;application ni par
          nos serveurs.</strong>{" "}Ils sont lus et chiffrés par le composant de paiement de Stripe.
          Nous ne conservons que le montant, le moyen de paiement et la référence de la transaction.
        </p>
        <p>
          Les permissions Bluetooth et de stockage figurent dans l&apos;application parce que le
          composant de paiement de Stripe les déclare pour prendre en charge les terminaux de
          comptoir. Elles ne sont pas utilisées pour collecter quoi que ce soit.
        </p>
      </LegalSection>

      <LegalSection title="Qui d'autre intervient">
        <p>
          <strong>Stripe</strong>{" "}(Irlande / États-Unis) — encaissements par carte et sans contact.
          <br />
          <strong>Google Firebase Cloud Messaging</strong>{" "}(États-Unis) — acheminement des
          notifications vers le téléphone.
          <br />
          <strong>Brevo</strong>{" "}(France) — envoi des SMS de rappel et de confirmation.
          <br />
          <strong>Resend</strong>{" "}(États-Unis) — envoi des e-mails.
          <br />
          <strong>OVHcloud</strong>{" "}(France) — hébergement des serveurs et des bases de données.
        </p>
        <p>
          Les transferts hors Union européenne reposent sur les clauses contractuelles types de la
          Commission européenne.
        </p>
      </LegalSection>

      <LegalSection title="Combien de temps">
        <p>
          Le jeton de session expire au bout de quatre-vingt-dix jours. L&apos;identifiant de notification est
          conservé tant que vous restez connecté : il est supprimé à la déconnexion ou à la
          désinstallation.
        </p>
        <p>
          Les écritures du journal de caisse sont conservées <strong>six ans</strong>, comme la loi
          l&apos;impose aux logiciels de caisse, et ne peuvent être ni modifiées ni supprimées — y
          compris par nous.
        </p>
        <p>
          Les autres données de l&apos;établissement sont conservées pendant la durée du contrat,
          puis supprimées ou restituées selon ses instructions.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
          limitation, d&apos;opposition et de portabilité. Pour votre compte professionnel,
          écrivez-nous à <span className="mono">ethanlevivalensi@gmail.com</span> — nous répondons
          sous un mois.
        </p>
        <p>
          Pour les données d&apos;une personne ayant réservé chez un établissement, la demande doit
          être adressée à cet établissement, qui en est responsable. Nous l&apos;assistons si
          nécessaire, mais nous ne pouvons pas décider à sa place.
        </p>
        <p>
          Vous pouvez à tout moment introduire une réclamation auprès de la CNIL,{" "}
          <span className="mono">cnil.fr</span>.
        </p>
      </LegalSection>

      <LegalSection title="Suppression de votre compte">
        <p>
          La suppression d&apos;un compte professionnel se demande auprès de l&apos;administrateur de
          votre établissement, ou directement auprès de nous. Désinstaller l&apos;application ne
          supprime pas le compte : elle arrête seulement les notifications et efface le jeton de
          session conservé sur le téléphone.
        </p>
      </LegalSection>

      <LegalSection title="Modifications">
        <p>
          Cette politique peut évoluer avec l&apos;application. La date de dernière mise à jour
          figure en haut de cette page, et toute modification substantielle sera signalée dans
          l&apos;application.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
