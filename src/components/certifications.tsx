import Image from "next/image";

const certifications = [
  { src: "/images/mpif.svg", alt: "MPIF", w: 64, h: 67 },
  { src: "/images/new-iso-9001-logo.webp", alt: "ISO 9001", w: 188, h: 188 },
  { src: "/images/new-iso-13485-logo.webp", alt: "ISO 13485", w: 188, h: 184 },
  { src: "/images/aiag.svg", alt: "AIAG", w: 150, h: 40 },
  { src: "/images/made-in-usa.svg", alt: "Made in USA", w: 77, h: 59 },
  { src: "/images/itar.svg", alt: "ITAR Registered", w: 138, h: 57 },
];

export function Certifications() {
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="container-az flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {certifications.map((cert) => (
          <Image
            key={cert.alt}
            src={cert.src}
            alt={cert.alt}
            width={cert.w}
            height={cert.h}
            className="h-14 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
