import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales BookFlow — Synergy Solutions",
  description:
    "Prix, commissions, paiements en ligne, absences facturées, facturation électronique et engagements du service BookFlow.",
};

export default function ConditionsBookFlow() {
  return (
    <LegalPage eyebrow="BookFlow" title="Conditions générales du service" updated="septembre 2026">
      <LegalSection title="Qui fournit le service">
        <p>
          BookFlow est édité par Ethan Levi Valensi — Synergy Solutions, entrepreneur individuel, 641
          chemin Costelongue, 13680 Lançon-Provence. SIRET 106 285 729 00013. TVA non applicable,
          article 293 B du CGI. Contact : <span className="mono">ethanlevivalensi@gmail.com</span>
        </p>
        <p>
          Ces conditions complètent les{" "}
          <a href="/cgv" className="text-[var(--cyan)] hover:underline">conditions générales de vente</a>{" "}
          et la{" "}
          <a href="/confidentialite" className="text-[var(--cyan)] hover:underline">politique de confidentialité</a>.
          Elles s&apos;appliquent à tout établissement abonné à BookFlow.
        </p>
      </LegalSection>

      <LegalSection title="Ce que couvre l'abonnement">
        <p>
          L&apos;abonnement mensuel donne accès au logiciel de réservation : page de réservation en
          ligne, agenda, gestion des prestations et des intervenants, interface d&apos;administration,
          hébergement, sauvegardes et mises à jour. Il inclut un nombre de réservations et de SMS
          précisé dans la formule souscrite.
        </p>
        <p>
          Les options — paiement en ligne, facturation électronique automatique — sont incluses dans
          les formules Premium et Pro, et facturées 5 € par mois et par option dans les autres
          formules.
        </p>
      </LegalSection>

      <LegalSection title="Dépassements du forfait">
        <p>
          Un forfait dépassé <strong>ne bloque jamais une réservation ni un message</strong> : le
          dépassement est facturé, il n&apos;interrompt pas le service.
        </p>
        <p>
          Les réservations et SMS consommés au-delà du forfait sont facturés le mois suivant, au tarif
          unitaire de la formule : de 0,04 € à 0,08 € par réservation supplémentaire, et de 0,08 € à
          0,09 € par SMS supplémentaire. Le détail figure sur la facture, période par période.
        </p>
        <p>
          Un SMS est décompté par <strong>segment réellement envoyé</strong> : au-delà de 160
          caractères — ou de 70 caractères si le message contient des accents ou des emojis — un
          message est transmis en plusieurs segments par les opérateurs, et compté comme tel.
          L&apos;interface affiche ce découpage au moment où vous rédigez vos modèles.
        </p>
      </LegalSection>

      <LegalSection title="Paiement en ligne : commission et circuit de l'argent">
        <p>
          Quand l&apos;établissement active le paiement en ligne, les règlements de ses clients sont
          encaissés via <strong>Stripe</strong>, puis <strong>reversés automatiquement sur le compte
          Stripe de l&apos;établissement</strong>, qui reste le vendeur et le bénéficiaire des sommes.
          Synergy Solutions ne conserve jamais le produit des prestations.
        </p>
        <p>
          Une commission de service de <strong>1,9 % + 0,25 €</strong> est prélevée sur chaque
          paiement en ligne, quelle que soit la formule. Elle couvre les frais de traitement facturés
          par Stripe et Stripe Connect, qui varient selon le type de carte utilisé par le client
          final : elle correspond à notre prix de revient, et non à une marge sur le chiffre
          d&apos;affaires de l&apos;établissement.
        </p>
        <p>
          L&apos;ouverture d&apos;un compte Stripe au nom de l&apos;établissement est un préalable
          obligatoire. Les conditions de Stripe s&apos;appliquent à la relation entre
          l&apos;établissement et Stripe, notamment en matière de vérification d&apos;identité, de
          délais de versement et de litiges.
        </p>
      </LegalSection>

      <LegalSection title="Annulations et remboursements">
        <p>
          Une réservation payée en ligne puis annulée est{" "}
          <strong>remboursée intégralement au client final</strong>, automatiquement. Le montant déjà
          reversé à l&apos;établissement est repris à cette occasion.
        </p>
        <p>
          L&apos;établissement fixe lui-même le délai au-delà duquel son client ne peut plus annuler
          en ligne. Passé ce délai, l&apos;annulation se règle directement entre lui et son client.
        </p>
        <p>
          La commission de service et les frais prélevés par Stripe ne sont pas restitués : Stripe ne
          les restitue pas non plus en cas de remboursement.
        </p>
      </LegalSection>

      <LegalSection title="Empreinte bancaire et absences">
        <p>
          L&apos;établissement peut exiger une empreinte bancaire à la réservation et fixer, prestation
          par prestation, le montant mobilisable si le client ne se présente pas. Aucune somme
          n&apos;est prélevée tant que l&apos;absence n&apos;a pas été constatée par
          l&apos;établissement.
        </p>
        <p>
          <strong>Aucune commission n&apos;est prélevée sur une absence facturée.</strong>{" "}
          L&apos;intégralité du montant encaissé revient à l&apos;établissement, déduction faite des
          seuls frais de Stripe sur la transaction. Une absence est déjà une perte : Synergy
          Solutions ne s&apos;y sert pas.
        </p>
      </LegalSection>

      <LegalSection title="Facturation électronique : ce que BookFlow fait, et ce qu'il ne fait pas">
        <p>
          BookFlow peut transmettre automatiquement chaque encaissement au logiciel de facturation de
          l&apos;établissement — <strong>Abby ou Pennylane</strong> — pour y créer la facture
          correspondante, dans le compte de l&apos;établissement et sous sa propre numérotation.
        </p>
        <p>
          <strong>Synergy Solutions n&apos;est pas une plateforme agréée</strong> au sens de la réforme
          française de la facturation électronique, et n&apos;émet aucune facture au nom de
          l&apos;établissement. La conformité de la facture émise, sa transmission à
          l&apos;administration fiscale et le e-reporting des ventes aux particuliers relèvent du
          logiciel choisi par l&apos;établissement et de l&apos;offre qu&apos;il y a souscrite.
        </p>
        <p>
          Ce point mérite l&apos;attention : selon l&apos;offre souscrite chez l&apos;éditeur, certaines
          formules se limitent à préparer ou pré-remplir les factures, sans assurer leur transmission
          réglementaire. Il appartient à l&apos;établissement de vérifier auprès de son éditeur que son
          offre couvre ses obligations — rappel du calendrier : réception des factures électroniques
          obligatoire depuis le 1ᵉʳ septembre 2026, émission et e-reporting à compter du 1ᵉʳ septembre
          2027 pour les TPE et micro-entreprises.
        </p>
        <p>
          En cas d&apos;échec de transmission, l&apos;encaissement reste enregistré dans BookFlow et
          l&apos;erreur est affichée dans l&apos;interface, avec possibilité de relancer l&apos;envoi.
        </p>
      </LegalSection>

      <LegalSection title="Messages envoyés aux clients de l'établissement">
        <p>
          Les SMS et emails de confirmation, de rappel, de déplacement et d&apos;annulation sont
          envoyés pour le compte de l&apos;établissement, à partir des modèles qu&apos;il peut
          modifier. Il lui revient de s&apos;assurer que leur contenu est exact et loyal.
        </p>
        <p>
          Un lien d&apos;annulation est systématiquement présent dans les messages qui en nécessitent
          un : il ne peut pas être retiré des modèles.
        </p>
      </LegalSection>

      <LegalSection title="Données et réversibilité">
        <p>
          Les données des clients de l&apos;établissement lui appartiennent. Synergy Solutions les
          traite en qualité de sous-traitant, dans les conditions décrites dans la{" "}
          <a href="/confidentialite" className="text-[var(--cyan)] hover:underline">politique de confidentialité</a>.
        </p>
        <p>
          À la fin du contrat, l&apos;établissement peut demander l&apos;export de ses données
          (clients, réservations, encaissements). Elles sont ensuite supprimées de nos systèmes,
          sauvegardes comprises, dans un délai raisonnable.
        </p>
      </LegalSection>

      <LegalSection title="Disponibilité et limites">
        <p>
          BookFlow est hébergé en France et fait l&apos;objet de sauvegardes automatiques. Le service
          est fourni sans garantie de disponibilité ininterrompue : des interruptions peuvent survenir
          pour maintenance, ou du fait d&apos;un prestataire tiers (Stripe, opérateur SMS, logiciel de
          facturation).
        </p>
        <p>
          La responsabilité de Synergy Solutions ne peut excéder le montant des sommes versées par
          l&apos;établissement au titre des douze derniers mois d&apos;abonnement. Elle ne couvre pas
          les conséquences d&apos;un no-show, d&apos;un impayé, d&apos;un litige entre
          l&apos;établissement et son client, ni les obligations comptables et fiscales de
          l&apos;établissement.
        </p>
      </LegalSection>

      <LegalSection title="Durée, résiliation et évolution des tarifs">
        <p>
          L&apos;abonnement est mensuel, sans engagement de durée sauf mention contraire au devis. La
          résiliation prend effet à la fin de la période en cours ; les dépassements déjà consommés
          restent dus.
        </p>
        <p>
          Les tarifs, commissions et plafonds peuvent évoluer, notamment pour suivre les grilles
          tarifaires de nos prestataires de paiement. Toute évolution est annoncée au moins un mois à
          l&apos;avance et n&apos;a pas d&apos;effet rétroactif : une empreinte enregistrée ou un
          paiement déjà encaissé restent régis par les conditions en vigueur à ce moment-là.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          Les présentes conditions sont soumises au droit français. À défaut d&apos;accord amiable, le
          litige relève des tribunaux compétents du ressort du siège de Synergy Solutions.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
