import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — Synergy Solutions",
};

export default function MentionsLegales() {
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales" updated="juillet 2026">
      <LegalSection title="Éditeur du site">
        <p>
          Le site synergysolutions.fr est édité par Ethan Levi Valensi, entrepreneur individuel
          (micro-entreprise), exerçant sous le nom commercial <strong>Synergy Solutions</strong>.
        </p>
        <p>Adresse : 641 chemin Costelongue, 13680 Lançon-Provence, France</p>
        <p>SIRET : 106 285 729 00013</p>
        <p>TVA non applicable, article 293 B du Code général des impôts</p>
        <p>Email : ethanlevivalensi@gmail.com — Téléphone : 07 68 49 05 80</p>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>Ethan Levi Valensi.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Le site est hébergé par :</p>
        <p>
          Hetzner Online GmbH
          <br />
          Industriestraße 25, 91710 Gunzenhausen, Allemagne
          <br />
          hetzner.com
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, visuels, code source, identité
          visuelle) est la propriété exclusive de Synergy Solutions, sauf mention contraire. Toute
          reproduction, représentation, modification ou exploitation, totale ou partielle, sans
          autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Synergy Solutions s&apos;efforce d&apos;assurer l&apos;exactitude des informations
          diffusées sur ce site, mais ne peut garantir l&apos;absence d&apos;erreur ou d&apos;omission.
          L&apos;utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
        </p>
      </LegalSection>

      <LegalSection title="Médiation de la consommation">
        <p>
          Conformément à l&apos;article L. 616-1 du Code de la consommation, en cas de litige, le
          client peut recourir gratuitement à un service de médiation de la consommation.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
