import ScrollDemo from "./ScrollDemo";
import { KioskStage, DispatchStage, PaymentStage, PrinterStage } from "./kds/stages";

const STAGES = [
  {
    tag: "01 — Borne de commande",
    title: "Le client commande seul",
    desc: "Une borne tactile simple, sans file d'attente ni appel manqué au comptoir.",
    Visual: KioskStage,
  },
  {
    tag: "02 — Dispatching",
    title: "La commande part droit en cuisine",
    desc: "Chaque ticket s'affiche en temps réel sur l'écran cuisine, trié et chronométré.",
    Visual: DispatchStage,
  },
  {
    tag: "03 — Encaissement",
    title: "Paiement encaissé au même endroit",
    desc: "Carte ou sans contact, l'encaissement est relié directement à la commande.",
    Visual: PaymentStage,
  },
  {
    tag: "04 — Impression",
    title: "Le ticket sort en cuisine, sans erreur",
    desc: "Impression automatique dès l'encaissement — plus de commande criée ou mal comprise.",
    Visual: PrinterStage,
  },
];

export default function KdsDemo() {
  return (
    <ScrollDemo
      id="kds"
      eyebrow="Démonstration"
      heading={
        <>
          Un <span className="accent-serif gradient-text">écran de cuisine</span>, de bout en bout.
        </>
      }
      stages={STAGES}
    />
  );
}
