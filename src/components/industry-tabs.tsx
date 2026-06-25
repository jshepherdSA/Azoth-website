"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleArrow } from "./circle-arrow";

type Industry = {
  key: string;
  label: string;
  body: string;
  href: string;
  image: string;
  width: number;
  height: number;
};

const industries: Industry[] = [
  {
    key: "automotive",
    label: "Automotive",
    body: "Azoth is seamlessly incorporated with over 15 Tier-One Automotive Suppliers and Original Equipment Manufacturers (OEMs), boasting a portfolio of over 50 distinctive components currently in serial production, each accompanied by robust levels three and four Production Part Approval Process (PPAP) documentation.",
    href: "/industries/automotive",
    image: "/images/cadillac-celestiq-new.png",
    width: 500,
    height: 500,
  },
  {
    key: "medical",
    label: "Medical",
    body: "Azoth supports leading medical device manufacturers with production-scale metal additive manufacturing, delivering precision-engineered components backed by ISO 13485-certified quality systems, validated materials, and full traceability from prototyping through serial production.",
    href: "/industries/medical",
    image: "/images/medical-27.png",
    width: 2000,
    height: 1200,
  },
  {
    key: "defense",
    label: "Defense",
    body: "Azoth partners with defense and national security manufacturers to produce mission-critical components through secure, U.S.-based additive manufacturing, combining ITAR-compliant processes, advanced materials, and rapid production capabilities for demanding applications.",
    href: "/industries/defense-industry",
    image: "/images/defense-new-1.png",
    width: 500,
    height: 500,
  },
  {
    key: "consumer-electronics",
    label: "Consumer Electronics",
    body: "Azoth enables consumer electronics companies to accelerate product development and production through advanced metal additive manufacturing, delivering complex, miniaturized components with high precision, rapid iteration, and scalable manufacturing flexibility.",
    href: "/industries/consumer-electronics",
    image: "/images/industries-tab-consumer-electronics-new.png",
    width: 500,
    height: 500,
  },
];

export function IndustryTabs() {
  const [active, setActive] = useState(industries[0].key);
  const current = industries.find((i) => i.key === active) ?? industries[0];

  return (
    <div className="mt-10">
      {/* Tab list */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-black/10">
        {industries.map((industry) => (
          <button
            key={industry.key}
            type="button"
            onClick={() => setActive(industry.key)}
            className={`-mb-px border-b-2 px-5 py-3 text-sm font-semibold capitalize transition-colors ${
              active === industry.key
                ? "border-brand text-brand"
                : "border-transparent text-muted hover:text-ink-soft"
            }`}
          >
            {industry.label}
          </button>
        ))}
      </div>

      {/* Panel — image shown in full; the text box flexes to fit */}
      <div className="mt-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <div className="lg:flex-1">
          <h3 className="text-2xl font-bold capitalize text-ink">{current.label}</h3>
          <p className="mt-4 leading-relaxed text-muted-soft">{current.body}</p>
          <Link
            href={current.href}
            className="mt-6 inline-flex items-center gap-2.5 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Learn More
            <CircleArrow tone="onRed" />
          </Link>
        </div>
        <div className="w-full lg:w-auto lg:shrink-0">
          <Image
            key={current.key}
            src={current.image}
            alt={current.label}
            width={current.width}
            height={current.height}
            className="mx-auto h-auto max-h-[340px] w-auto max-w-full rounded-2xl shadow-sm lg:max-w-[460px]"
            sizes="(max-width: 1024px) 100vw, 460px"
          />
        </div>
      </div>
    </div>
  );
}
