import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Synergy Solutions",
  description:
    "Quelles données personnelles nous traitons, pour qui, avec quels prestataires, et comment exercer vos droits.",
};

export default function Confidentialite() {
  return (
    <LegalPage eyebrow="RGPD" title="Politique de confidentialité" updated="septembre 2026">
      <LegalSection title="Qui traite vos données">
        <p>
          Ethan Levi Valensi — Synergy Solutions, entrepreneur individuel, 641 chemin Costelongue,
          13680 Lançon-Provence. SIRET 106 285 729 00013. Contact :{" "}
          <span className="mono">ethanlevivalensi@gmail.com</span>
        </p>
      </LegalSection>

      <LegalSection title="Deux rôles bien distincts">
        <p>
          Synergy Solutions intervient tantôt comme <strong>responsable de traitement</strong>, tantôt
          comme <strong>sous-traitant</strong>, et les deux ne donnent pas les mêmes droits ni les
          mêmes interlocuteurs.
        </p>
        <p>
          Nous sommes <strong>responsable</strong> pour ce site vitrine et pour la relation
          commerciale avec nos propres clients : nous décidons seuls de ces traitements.
        </p>
        <p>
          Nous sommes <strong>sous-traitant</strong> pour les logiciels que nous exploitons pour le
          compte de nos clients — en particulier BookFlow, notre logiciel de réservation. Les données
          des personnes qui réservent chez un établissement appartiennent à cet établissement : il
          décide de ce qui est collecté et pourquoi, nous ne faisons que les traiter sur ses
          instructions.
        </p>
      </LegalSection>

      <LegalSection title="1. Ce site vitrine">
        <p>
          Aucun cookie, aucun outil de mesure d&apos;audience, aucune publicité. La seule donnée
          personnelle traitée est celle que vous transmettez volontairement via le formulaire de
          contact : nom, établissement (facultatif), email, téléphone (facultatif) et message.
        </p>
        <p>
          En soumettant le formulaire, votre messagerie s&apos;ouvre avec un email pré-rempli. Les
          données ne transitent par aucun serveur ni base de données de Synergy Solutions : elles
          partent directement depuis votre propre client de messagerie, et servent uniquement à
          répondre à votre demande.
        </p>
      </LegalSection>

      <LegalSection title="2. Nos clients professionnels">
        <p>
          Pour suivre nos projets, nos abonnements et notre facturation, nous conservons les
          coordonnées professionnelles de nos clients (nom, raison sociale, adresse, email,
          téléphone), les documents contractuels et les informations de paiement nécessaires. Ces
          traitements reposent sur l&apos;exécution du contrat et sur nos obligations légales,
          notamment comptables.
        </p>
        <p>
          Les numéros de carte bancaire ne nous sont jamais transmis ni stockés : les paiements sont
          traités par Stripe, qui seul manipule ces données.
        </p>
      </LegalSection>

      <LegalSection title="3. BookFlow — les données des personnes qui réservent">
        <p>
          Quand un institut, un salon ou un restaurant utilise BookFlow, nous traitons pour son
          compte : nom et prénom, téléphone, email, historique des rendez-vous, prestations réservées
          et encaissées, notes laissées par l&apos;établissement (préférences, allergies), nombre de
          rendez-vous non honorés, et les messages de confirmation ou de rappel envoyés.
        </p>
        <p>
          Lorsque l&apos;établissement demande une empreinte bancaire ou un paiement en ligne, les
          coordonnées de la carte sont saisies directement chez Stripe et ne transitent jamais par nos
          serveurs : nous ne conservons qu&apos;une référence technique permettant à
          l&apos;établissement de débiter le montant convenu en cas d&apos;absence.
        </p>
        <p>
          Chaque établissement est cloisonné : ses données ne sont accessibles ni aux autres
          établissements, ni utilisées à d&apos;autres fins. Nous ne revendons aucune donnée et ne
          faisons aucun profilage publicitaire.
        </p>
      </LegalSection>

      <LegalSection title="Prestataires techniques">
        <p>
          Nous faisons appel à des prestataires qui peuvent accéder à des données personnelles pour
          exécuter un service précis, sans jamais pouvoir les réutiliser pour leur compte :
        </p>
        <p>
          <strong>Hébergement</strong> — OVHcloud, sur des serveurs situés en France.
          <br />
          <strong>Paiements, empreintes bancaires et virements</strong> — Stripe.
          <br />
          <strong>Envoi des SMS</strong> — Brevo.
          <br />
          <strong>Envoi des emails transactionnels</strong> — Resend.
          <br />
          <strong>Facturation</strong> — Abby ou Pennylane, uniquement si l&apos;établissement a
          connecté lui-même son logiciel de facturation : dans ce cas, les factures sont créées dans
          son propre compte, chez l&apos;éditeur qu&apos;il a choisi.
          <br />
          <strong>Outils internes de gestion</strong> — Vercel et Supabase, pour notre suivi
          commercial et notre facturation.
        </p>
        <p>
          Certains de ces prestataires peuvent traiter des données hors de l&apos;Union européenne.
          Ces transferts sont encadrés par les clauses contractuelles types de la Commission
          européenne.
        </p>
      </LegalSection>

      <LegalSection title="Durées de conservation">
        <p>
          <strong>Demandes de contact</strong> — le temps du traitement, puis la durée de la relation
          commerciale éventuelle.
          <br />
          <strong>Données traitées pour un client (BookFlow, hébergement)</strong> — pendant toute la
          durée du contrat. À son terme, elles sont restituées à l&apos;établissement puis supprimées
          de nos systèmes, sauvegardes comprises, dans un délai raisonnable.
          <br />
          <strong>Documents comptables</strong> — dix ans, conformément au code de commerce.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Les échanges sont chiffrés (HTTPS). Les données de chaque établissement sont isolées les
          unes des autres au niveau de la base de données elle-même, pas seulement de
          l&apos;interface. Les identifiants d&apos;accès aux logiciels tiers connectés par nos
          clients sont chiffrés avant stockage. Les accès administrateur sont nominatifs et limités
          aux personnes qui en ont besoin.
        </p>
        <p>
          Les sauvegardes sont automatiques, stockées hors du serveur qu&apos;elles protègent, selon
          la politique détaillée sur notre page{" "}
          <a href="/sauvegardes" className="text-[var(--cyan)] hover:underline">
            Sauvegardes
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
          limitation, d&apos;opposition et de portabilité sur vos données personnelles.
        </p>
        <p>
          <strong>Vous avez pris rendez-vous chez un établissement qui utilise BookFlow ?</strong> Vos
          données lui appartiennent : adressez-vous d&apos;abord à lui. Si vous nous écrivez
          directement, nous transmettrons votre demande à l&apos;établissement concerné et
          l&apos;aiderons à y répondre.
        </p>
        <p>
          Pour tout autre cas, écrivez à <span className="mono">ethanlevivalensi@gmail.com</span>.
          Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).
        </p>
      </LegalSection>

      <LegalSection title="Évolution de cette politique">
        <p>
          Cette politique est mise à jour lorsque nos traitements évoluent — nouveau service, nouveau
          prestataire. La date de dernière mise à jour figure en haut de cette page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
