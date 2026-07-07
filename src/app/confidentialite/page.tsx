import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Synergy Solutions",
};

export default function Confidentialite() {
  return (
    <LegalPage
      eyebrow="RGPD"
      title="Politique de confidentialité"
      updated="juillet 2026"
    >
      <LegalSection title="Responsable du traitement">
        <p>
          Ethan Levi Valensi — Synergy Solutions, 641 chemin Costelongue, 13680 Lançon-Provence.
          Contact : ethanlevivalensi@gmail.com
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Ce site ne dépose aucun cookie et n&apos;utilise aucun outil d&apos;analyse ou de suivi. La
          seule donnée personnelle traitée est celle que vous transmettez volontairement via le
          formulaire de contact : nom, établissement (facultatif), email, téléphone (facultatif) et
          message.
        </p>
      </LegalSection>

      <LegalSection title="Comment ces données sont utilisées">
        <p>
          En soumettant le formulaire, votre messagerie s&apos;ouvre avec un email pré-rempli à
          destination de ethanlevivalensi@gmail.com. Les données ne transitent par aucun serveur ni
          base de données de Synergy Solutions : elles sont envoyées directement depuis votre propre
          client de messagerie. Elles sont utilisées uniquement pour répondre à votre demande de
          devis.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les échanges par email sont conservés le temps nécessaire au traitement de votre demande
          puis, en cas de mise en relation commerciale, pour la durée de la relation contractuelle et
          les obligations légales de conservation, notamment comptables.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit
          d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition sur vos données
          personnelles. Pour l&apos;exercer, contactez ethanlevivalensi@gmail.com. Vous pouvez
          également introduire une réclamation auprès de la CNIL (cnil.fr).
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>Ce site n&apos;utilise aucun cookie de mesure d&apos;audience ou de publicité.</p>
      </LegalSection>
    </LegalPage>
  );
}
