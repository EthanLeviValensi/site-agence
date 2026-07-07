import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LegalSection } from "@/components/LegalPage";
import BackupTiers from "@/components/BackupTiers";

export const metadata: Metadata = {
  title: "Nos sauvegardes — Synergy Solutions",
  description:
    "Comment vos données sont sauvegardées : politique de rétention par heure, jour, semaine et mois, stockée hors serveur.",
};

export default function Sauvegardes() {
  return (
    <>
      <Nav />
      <main className="flex-1 pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mono-tag mb-3 text-[11px] text-[var(--cyan)]">Sauvegardes</p>
          <h1 className="text-4xl md:text-5xl">
            Vos données, <span className="accent-serif gradient-text">sauvegardées sans y penser.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--text-dim)]">
            Chaque site et chaque base de données que nous hébergeons est sauvegardé automatiquement,
            selon une politique de rétention dégressive : plus une sauvegarde est récente, plus elle
            est fréquente ; plus elle est ancienne, plus l&apos;intervalle s&apos;espace. De quoi
            retrouver aussi bien une erreur d&apos;il y a une heure qu&apos;un état d&apos;il y a un
            an.
          </p>

          <div className="mt-12">
            <BackupTiers />
            <p className="mono-tag mt-3 text-[10px] text-[var(--text-faint)]">
              ✦ le rythme du pouls de chaque carte suit sa vraie fréquence de sauvegarde
            </p>
          </div>

          <div className="mt-14 space-y-9">
            <LegalSection title="Où sont stockées les sauvegardes ?">
              <p>
                Sur un espace de stockage séparé du serveur qui fait tourner votre site (Object
                Storage OVH), pour qu&apos;une panne ou un incident sur le serveur n&apos;affecte
                jamais les sauvegardes. Les sauvegardes ne sont donc jamais au même endroit que vos
                données actives.
              </p>
            </LegalSection>

            <LegalSection title="C'est inclus dans mon hébergement ?">
              <p>
                Oui. La politique de sauvegarde décrite ici fait partie du forfait d&apos;hébergement,
                sans surcoût ni action de votre part — elle tourne automatiquement, en continu.
              </p>
            </LegalSection>

            <LegalSection title="Que se passe-t-il en cas de panne du serveur ?">
              <p>
                Vos données ne dépendent pas du serveur physique : elles sont restaurées depuis la
                dernière sauvegarde disponible sur un serveur de remplacement. La perte de données
                maximale correspond à l&apos;intervalle entre deux sauvegardes, soit au pire une
                heure sur les données les plus récentes.
              </p>
            </LegalSection>

            <LegalSection title="Puis-je demander la restauration d'une version précise ?">
              <p>
                Oui, sur simple demande — précisez la date ou la période approximative que vous
                souhaitez récupérer, et nous restaurons la version correspondante disponible dans la
                politique de rétention ci-dessus.
              </p>
            </LegalSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
