import { Eyebrow } from "./eyebrow";
import { IndustryTabs } from "./industry-tabs";

export function IndustriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-az">
        <div className="max-w-3xl">
          <Eyebrow>Industries</Eyebrow>
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
