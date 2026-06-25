import { IndustryTabs } from "./industry-tabs";

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-az">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
            <GearIcon />
            Industries
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Engineering Innovation Across Every Sector
          </h2>
          <p className="mt-4 leading-relaxed text-muted-soft">
            We serve a diverse range of industries where precision, performance, and speed matter
            most. From automotive and aerospace to medical, defense, and energy—we deliver tailored
            additive manufacturing solutions that meet industry-specific standards and accelerate
            time to market.
          </p>
        </div>
        <IndustryTabs />
      </div>
    </section>
  );
}
