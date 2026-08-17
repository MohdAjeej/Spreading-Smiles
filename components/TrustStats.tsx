"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 10000, suffix: "+", label: "Happy Patients" },
  { value: 14, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: ".0", label: "Star Rating" },
  { value: 8, suffix: "+", label: "Dental Services" },
];

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="border-y border-navy/10 bg-white py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-serif text-3xl text-pink sm:text-4xl">
                {stat.label === "Potential Treatment Savings" ? (
                  <>
                    30–<Counter value={stat.value} suffix={stat.suffix} />
                  </>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-2 text-xs text-navy-soft sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
