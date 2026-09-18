"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// Les quatre formules réelles de BookFlow (catalogue `plans` côté API). Le
// texte parle en bénéfices, pas en options techniques : un professionnel
// choisit une offre parce qu'elle règle un problème, pas parce qu'elle coche
// une case.
type Tier = {
  code: string;
  name: string;
  price: string;
  pitch: string;
  reservations: string;
  sms: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
  fee: string;
  extra: string;
};

const OPTIONS = [
  {
    titre: "Paiement en ligne",
    texte:
      "Vos clients règlent au moment de réserver, et sont remboursés automatiquement s'ils annulent dans le délai que vous fixez. Les fonds arrivent sur votre compte, 1,9 % + 0,25 € par règlement — notre prix coûtant.",
  },
  {
    titre: "Facturation automatique",
    texte:
      "Chaque encaissement devient une facture dans votre propre compte Abby ou Pennylane, sous votre numérotation. Vous connectez votre logiciel en un clic, et vous le débranchez quand vous voulez.",
  },
];

const TIERS: Tier[] = [
  {
    code: "solo",
    name: "Solo",
    price: "29,99",
    pitch: "Vous travaillez seule, et vous voulez arrêter de gérer les rendez-vous par téléphone.",
    reservations: "300 rendez-vous / mois",
    sms: "100 SMS de rappel",
    fee: "1,9 % + 0,25 €",
    extra: "0,08 € le rendez-vous · 0,09 € le SMS",
    features: [
      "Réservation en ligne sur votre site",
      "Confirmations et rappels automatiques",
      "Empreinte bancaire contre les absences",
      "Fiches clients et historique",
      "Codes promo",
    ],
  },
  {
    code: "institut",
    name: "Institut",
    price: "59,99",
    pitch: "Vous êtes plusieurs : chacune son agenda, ses prestations et ses horaires.",
    reservations: "800 rendez-vous / mois",
    sms: "250 SMS de rappel",
    fee: "1,9 % + 0,25 €",
    extra: "0,08 € le rendez-vous · 0,09 € le SMS",
    features: [
      "Tout ce que contient Solo",
      "Praticiens illimités, agendas séparés",
      "Le client choisit avec qui",
      "Comptes salariés et droits par personne",
      "Liste d'attente sur les créneaux pleins",
      "Vos habitués dispensés d'empreinte",
    ],
  },
  {
    code: "premium",
    name: "Institut Premium",
    price: "79,99",
    pitch: "Le rendez-vous est payé d'avance et la facture part toute seule dans votre comptabilité.",
    reservations: "2 000 rendez-vous / mois",
    sms: "450 SMS de rappel",
    highlight: true,
    badge: "Le plus choisi",
    fee: "1,9 % + 0,25 €",
    extra: "0,04 € le rendez-vous · 0,08 € le SMS",
    features: [
      "Tout ce que contient Institut",
      "Les deux options comprises (valeur 10 €/mois)",
      "Remboursement automatique à l'annulation",
    ],
  },
  {
    code: "pro",
    name: "Pro",
    price: "119,99",
    pitch: "Vous ne voulez plus compter : ni les rendez-vous, ni les dépassements.",
    reservations: "Rendez-vous illimités",
    sms: "800 SMS de rappel",
    fee: "1,9 % + 0,25 €",
    extra: "Aucun dépassement sur les rendez-vous",
    features: [
      "Tout ce que contient Premium",
      "Rendez-vous sans limite",
      "Le plus gros volume de SMS de rappel",
      "Priorité sur les évolutions du logiciel",
    ],
  },
];

export default function BookFlowPricing() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="formules" className="mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Formules</p>
        <h2 className="text-3xl md:text-4xl">
          Une seule ligne sur votre facture. <span className="accent-serif gradient-text">Zéro commission sur vos soins.</span>
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--text-dim)]">
          Pas de pourcentage sur votre chiffre d&apos;affaires, pas de commission sur les clients que
          vous avez mis des années à fidéliser. Un abonnement mensuel, sans engagement, et
          l&apos;hébergement de votre site compris.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {TIERS.map((tier, i) => (
          <motion.article
            key={tier.code}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { y: -4 }}
            onMouseEnter={() => setOpen(tier.code)}
            onFocus={() => setOpen(tier.code)}
            className="relative flex flex-col rounded-2xl border p-6 transition-colors"
            style={{
              borderColor: tier.highlight ? "var(--violet)" : "var(--line)",
              background: tier.highlight
                ? "linear-gradient(160deg, rgba(139,107,255,0.10), rgba(46,230,214,0.04))"
                : "var(--surface)",
            }}
          >
            {tier.badge && (
              <span
                className="mono-tag absolute -top-2.5 left-6 rounded-full px-2.5 py-1 text-[9px] text-[#0a0b10]"
                style={{ background: "var(--grad-signature)" }}
              >
                {tier.badge}
              </span>
            )}

            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl">{tier.name}</h3>
              <p className="shrink-0 text-right">
                <span className="text-2xl font-semibold tracking-tight">{tier.price}</span>
                <span className="text-[13px] text-[var(--text-dim)]"> €/mois</span>
              </p>
            </div>

            <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-dim)]">{tier.pitch}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[tier.reservations, tier.sms].map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-[var(--line)] px-2.5 py-1 text-[12px] text-[var(--text)]"
                >
                  {label}
                </span>
              ))}
            </div>

            <ul className="mt-5 flex-1 space-y-2">
              {tier.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: reduce ? 0 : 0.1 + index * 0.04 }}
                  className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[var(--text-dim)]"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: tier.highlight ? "var(--cyan)" : "var(--violet-soft)" }}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div
              className="mt-6 border-t pt-4 text-[12px] leading-relaxed text-[var(--text-faint)]"
              style={{ borderColor: "var(--line)" }}
            >
              <p>
                Paiement en ligne : <span className="text-[var(--text-dim)]">{tier.fee}</span> par
                règlement encaissé — notre prix coûtant.
              </p>
              <p className="mt-1">Au-delà du forfait : {tier.extra}.</p>
            </div>

            <a
              href="/#contact"
              className={`btn mt-5 w-full ${tier.highlight ? "btn--primary" : "btn--ghost"}`}
            >
              {tier.highlight ? "Choisir Premium" : `Choisir ${tier.name}`}
            </a>

            {/* Liseré qui s'allume au survol : discret, mais la carte réagit. */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 bottom-0 h-px"
              style={{ background: "var(--grad-signature)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: open === tier.code ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.article>
        ))}
      </div>

      {/* Les deux options payantes, et le fait qu'elles cessent de l'être. */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h3 className="text-lg">Les options</h3>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[var(--text-dim)]">
          Deux modules qui se règlent 5 € par mois chacun sur Solo et Institut, et{" "}
          <span className="text-[var(--cyan)]">compris sans supplément dès Premium</span>.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {OPTIONS.map((option, i) => (
            <motion.div
              key={option.titre}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.08 }}
              whileHover={reduce ? undefined : { y: -3 }}
              className="rounded-2xl border border-[var(--line)] p-5"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-[15px]">{option.titre}</h4>
                <span className="shrink-0 text-[13px] text-[var(--text-dim)]">5 €/mois</span>
              </div>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--text-dim)]">{option.texte}</p>
              <p className="mono-tag mt-4 inline-block rounded-full px-2.5 py-1 text-[9px] text-[#0a0b10]" style={{ background: "var(--grad-signature)" }}>
                Inclus en Premium et Pro
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-8 overflow-hidden rounded-2xl border p-6"
        style={{ borderColor: "var(--violet-soft)", background: "var(--surface)" }}
      >
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--grad-signature)" }}
          />
          <h3 className="relative text-lg">
            Chaque fonction s&apos;allume ou s&apos;éteint. <span className="accent-serif gradient-text">La formule ne change pas.</span>
          </h3>
          <p className="relative mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--text-dim)]">
            Rien n&apos;est imposé. Vous décidez, depuis votre espace, si le client choisit son
            praticien, s&apos;il peut payer en ligne ou sur place, si une empreinte bancaire est
            demandée et sur quelles prestations, si les rappels partent par SMS, par email ou pas du
            tout, si vous validez chaque rendez-vous à la main, quel délai d&apos;annulation vous
            accordez, quel temps de battement séparer deux rendez-vous. Tout se règle en deux clics,
            et se change quand vous voulez — sans nous appeler et sans changer de formule.
          </p>
          <div className="relative mt-5 flex flex-wrap gap-2">
            {[
              "Choix du praticien",
              "Paiement en ligne",
              "Empreinte bancaire",
              "Rappels SMS",
              "Rappels email",
              "Validation manuelle",
              "Liste d'attente",
              "Codes promo",
              "Délai d'annulation",
              "Temps de battement",
            ].map((label, i) => (
              <motion.span
                key={label}
                initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: reduce ? 0 : i * 0.04 }}
                className="rounded-full border px-3 py-1.5 text-[12px] text-[var(--text-dim)]"
                style={{ borderColor: "var(--line)" }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 rounded-2xl border border-[var(--line)] p-6"
        style={{ background: "var(--surface)" }}
      >
        <h3 className="text-lg">Ce qui est compris dans toutes les formules</h3>
        <div className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {[
            "L'hébergement de votre site et ses mises à jour",
            "Vos données sauvegardées toutes les heures, en deux pays",
            "Les paiements versés sur votre compte, jamais sur le nôtre",
            "Vos clients vous appartiennent : aucune place de marché",
            "Sans engagement : vous partez quand vous voulez, avec vos données",
            "Une vraie personne au bout du fil, pas un formulaire",
          ].map((line) => (
            <p key={line} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[var(--text-dim)]">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--cyan)" }} />
              {line}
            </p>
          ))}
        </div>
        <p className="mt-5 text-[13px] leading-relaxed text-[var(--text-faint)]">
          Tarifs hors taxes, TVA non applicable (article 293 B du CGI). Les SMS au-delà du forfait
          sont facturés au segment réellement envoyé.
        </p>
      </motion.div>
    </section>
  );
}
