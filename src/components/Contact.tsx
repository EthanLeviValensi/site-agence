"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "ethanlevivalensi@gmail.com";
const CONTACT_PHONE = "07 68 49 05 80";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nom = form.get("nom")?.toString() ?? "";
    const etablissement = form.get("etablissement")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const telephone = form.get("telephone")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Demande de devis — ${etablissement || nom}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nÉtablissement : ${etablissement}\nEmail : ${email}\nTéléphone : ${telephone}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mono-tag mb-3 text-[11px] text-[var(--amber)]">Contact</p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Demander un devis.</h2>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[var(--text-dim)]">
            Chaque projet est différent — décrivez-moi le vôtre, je vous réponds avec un devis sous 48h.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mono-tag text-[12px] text-[var(--text)] transition-colors hover:text-[var(--mint)]"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="mono-tag text-[12px] text-[var(--text)] transition-colors hover:text-[var(--mint)]"
            >
              {CONTACT_PHONE}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card grid gap-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nom" name="nom" required />
            <Field label="Établissement" name="etablissement" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" required />
            <Field label="Téléphone" name="telephone" type="tel" />
          </div>
          <label className="grid gap-1.5">
            <span className="mono-tag text-[10px] text-[var(--text-dim)]">Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Votre établissement, ce que vous cherchez à résoudre..."
              className="rounded-sm border border-[var(--panel-line)] bg-[var(--ink)] px-3 py-2.5 text-[14px] text-[var(--text)] placeholder:text-[#565f68] focus:border-[var(--amber)] focus:outline-none"
            />
          </label>

          <button type="submit" className="btn btn--primary mt-2 justify-self-start">
            Envoyer la demande
          </button>
          {sent && (
            <p className="mono-tag text-[11px] text-[var(--mint)]">
              Votre messagerie s&apos;est ouverte — il ne reste plus qu&apos;à envoyer.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="mono-tag text-[10px] text-[var(--text-dim)]">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-sm border border-[var(--panel-line)] bg-[var(--ink)] px-3 py-2.5 text-[14px] text-[var(--text)] focus:border-[var(--amber)] focus:outline-none"
      />
    </label>
  );
}
