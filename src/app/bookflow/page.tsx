import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BookFlow — Réservation en ligne pour instituts et restaurants",
  description:
    "Le logiciel de réservation que nous intégrons au site de nos clients : agenda, rappels SMS, empreinte bancaire, paiement en ligne, encaissement et facture automatique.",
};

// Le parcours réel d'un rendez-vous : c'est la promesse du produit, et c'est
// l'élément que la page doit rendre évident en un coup d'œil.
const ETAPES = [
  { titre: "Réservé", detail: "En ligne, sur votre site, à toute heure." },
  { titre: "Rappelé", detail: "Confirmation puis rappel SMS la veille." },
  { titre: "Honoré", detail: "Absence facturée si vous l'avez prévu." },
  { titre: "Encaissé", detail: "Prestations et ajouts, en un geste." },
  { titre: "Facturé", detail: "Dans votre logiciel de compta, tout seul." },
];

const CAPACITES = [
  {
    titre: "Un agenda qui connaît votre métier",
    texte:
      "Plusieurs praticiens, des prestations de durées différentes, un temps de battement entre deux rendez-vous, des congés : les créneaux proposés tiennent compte de tout ça, et se resserrent pour ne pas laisser de trous inutiles dans la journée.",
  },
  {
    titre: "Les oublis en moins",
    texte:
      "Confirmation par email ou SMS, rappel la veille et le matin même, message automatique en cas de déplacement ou d'annulation. Vos clientes se présentent, vous ne passez plus la journée au téléphone.",
  },
  {
    titre: "Les absences, enfin prises au sérieux",
    texte:
      "Empreinte bancaire à la réservation, montant que vous fixez par prestation, débité seulement si la personne ne vient pas. Vos habituées en sont dispensées automatiquement.",
  },
  {
    titre: "Payé d'avance, remboursé sans y penser",
    texte:
      "Vous pouvez demander le règlement au moment de la réservation. Si la cliente annule dans le délai que vous avez choisi, elle est remboursée automatiquement — sans que vous ayez à intervenir.",
  },
];

export default function BookFlowPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pb-28 pt-40 md:pt-48">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">BookFlow</p>
          <h1 className="text-4xl md:text-5xl">
            Le rendez-vous est pris. <span className="accent-serif gradient-text">La facture aussi.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--text-dim)]">
            BookFlow est notre logiciel de réservation pour les instituts de beauté, les salons et les
            restaurants. Il s&apos;installe dans le site que nous construisons pour vous — pas sur une
            plateforme où vos clientes verraient d&apos;abord vos concurrents — et il va jusqu&apos;au
            bout : de la prise de rendez-vous à la facture déposée dans votre comptabilité.
          </p>

          {/* Signature de la page : la vie d'un rendez-vous, de bout en bout. */}
          <ol className="mt-16 border-t border-[var(--line)]">
            {ETAPES.map((etape, i) => (
              <li
                key={etape.titre}
                className="flex items-baseline gap-5 border-b border-[var(--line)] py-4"
              >
                <span
                  className="mono-tag shrink-0 text-[10px]"
                  style={{
                    color: `color-mix(in oklab, var(--cyan) ${i * 25}%, var(--violet))`,
                  }}
                >
                  0{i + 1}
                </span>
                <span className="w-24 shrink-0 text-[15px]">{etape.titre}</span>
                <span className="text-[14px] leading-relaxed text-[var(--text-dim)]">
                  {etape.detail}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-20 space-y-9">
            {CAPACITES.map((c) => (
              <section key={c.titre} className="border-t border-[var(--line)] pt-7">
                <h2 className="text-lg">{c.titre}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">{c.texte}</p>
              </section>
            ))}

            <section className="border-t border-[var(--line)] pt-7">
              <h2 className="text-lg">Votre comptabilité se remplit toute seule</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">
                Quand vous encaissez un rendez-vous dans BookFlow, la facture correspondante est créée
                et finalisée dans <strong>votre propre compte</strong> chez votre logiciel de
                facturation — Abby ou Pennylane, au choix. Numérotation, format légal et déclarations
                restent chez l&apos;éditeur agréé que vous avez choisi ; BookFlow ne fait que lui
                transmettre ce que vous avez réellement encaissé.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">
                Vous connectez votre compte en un clic, et vous le débranchez quand vous voulez. Nous
                n&apos;émettons jamais de facture en votre nom depuis un compte qui ne serait pas le
                vôtre.
              </p>
            </section>

            <section className="border-t border-[var(--line)] pt-7">
              <h2 className="text-lg">L&apos;argent va chez vous, directement</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">
                Les paiements en ligne et les absences facturées arrivent sur votre propre compte
                Stripe, pas sur le nôtre. Vos données clientes vous appartiennent : elles restent
                cloisonnées, exportables, et supprimées de nos serveurs si vous partez. Notre travail
                est de faire tourner le logiciel, pas de s&apos;installer entre vous et votre
                clientèle.
              </p>
            </section>

            <section className="border-t border-[var(--line)] pt-7">
              <h2 className="text-lg">Comment on travaille</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">
                BookFlow n&apos;est pas vendu seul : il arrive avec le site que nous concevons pour
                votre établissement, sur mesure, sans WordPress ni thème acheté. Vous réglez un
                abonnement mensuel qui couvre l&apos;hébergement, les mises à jour et le logiciel de
                réservation ; les options — SMS, paiement en ligne, facturation automatique — se
                règlent selon ce dont vous avez vraiment besoin.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/#contact" className="btn btn--primary">
                  Demander une démonstration
                </a>
                <a href="/creations" className="btn btn--ghost">
                  Voir nos réalisations
                </a>
              </div>
            </section>
          </div>

          <p className="mt-16 border-t border-[var(--line)] pt-7 text-[13px] leading-relaxed text-[var(--text-faint)]">
            BookFlow est édité par Synergy Solutions — Ethan Levi Valensi, Lançon-Provence.
            <br />
            <a href="/confidentialite" className="text-[var(--cyan)] hover:underline">
              Confidentialité
            </a>{" "}
            ·{" "}
            <a href="/bookflow/conditions" className="text-[var(--cyan)] hover:underline">
              Conditions du service
            </a>{" "}
            ·{" "}
            <a href="/mentions-legales" className="text-[var(--cyan)] hover:underline">
              Mentions légales
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
