"use client";
import en from "@/i18n/en.json";
import de from "@/i18n/de.json";
import fr from "@/i18n/fr.json";
import it from "@/i18n/it.json";

type Lang = "en" | "de" | "fr" | "it";

const dict: Record<Lang, any> = { en, de, fr, it };

export interface SolonHeroProps {
  language: Lang;
}

export default function SolonHero({ language }: SolonHeroProps) {
  const t = dict[language]?.solon ?? dict.en.solon;
  return (
    <section className="py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[var(--navy)]">
          {t.title}
        </h1>
        <p className="mt-6 text-xl text-gray-600">{t.tagline}</p>
        <p className="mt-2 text-gray-500">{t.subtag}</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            className="px-5 py-3 rounded-md bg-[var(--navy)] text-white font-semibold hover:bg-[var(--navy-light)] transition"
            href="/dashboard/treasury"
          >
            {t.cta_primary}
          </a>
          <a
            className="px-5 py-3 rounded-md bg-white text-[var(--navy)] font-semibold hover:bg-gray-50 border border-[var(--navy)] transition"
            href="/dashboard/voting"
          >
            {t.cta_secondary}
          </a>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Pillar title={t.pillars.transactions} desc="All finances on Bitcoin" />
        <Pillar title={t.pillars.decisions} desc="Signed decisions with KPIs" />
        <Pillar title={t.pillars.marketplace} desc="Transparent procurement" />
        <Pillar title={t.pillars.voting} desc="Verified, weighted voting" />
      </div>

      <div className="mt-16 rounded-xl border border-gray-200 p-8 bg-white shadow-sm">
        <h3 className="font-semibold text-2xl text-[var(--navy)]">
          Revolutionary Transparency
        </h3>
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
          <li className="flex items-center gap-3">
            <CheckIcon />
            Radical Financial Transparency (Bitcoin blockchain)
          </li>
          <li className="flex items-center gap-3">
            <CheckIcon />
            Cryptographic Democracy (Signed votes & decisions)
          </li>
          <li className="flex items-center gap-3">
            <CheckIcon />
            Service Marketplace (Bitcoin-native procurement)
          </li>
          <li className="flex items-center gap-3">
            <CheckIcon />
            Global by Design (No traditional banking)
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm text-center hover:shadow-md transition-shadow">
      <div className="text-[var(--navy)] font-bold text-lg">{title}</div>
      <div className="text-gray-600 mt-2">{desc}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-[var(--navy)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
