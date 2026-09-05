"use client";

import { motion } from "framer-motion";
import {
  Check,
  Plane,
  Heart,
  Star,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const packages = [
  {
    name: "Essential Smile Journey",
    duration: "7 Days • 6 Nights",
    popular: false,
    price: "$1,200",
    priceNote: "(Approx. ₹99,000)",
    description:
      "Perfect for essential dental treatment with key attractions",
    destinations: ["Delhi", "Agra", "Mathura & Vrindavan"],
    included: [
      "Essential dental treatment sessions",
      "Airport pickup & drop",
      "Comfortable 3-star accommodation",
      "Daily breakfast",
      "Taj Mahal & Agra Fort experience",
      "Mathura & Vrindavan visit",
      "Local sightseeing transfers",
      "Dedicated patient assistance",
      "Post-treatment guidance",
    ],
    color: "from-blue to-blue-dark",
    icon: Heart,
  },
  {
    name: "Signature Smile Journey",
    duration: "10 Days • 9 Nights",
    popular: false,
    price: "$1,800",
    priceNote: "(Approx. ₹1,49,000)",
    description:
      "Most popular choice with extended sightseeing and premium stays",
    destinations: ["Delhi", "Agra", "Mathura", "Jaipur"],
    included: [
      "Comprehensive dental treatment sessions",
      "Airport pickup & drop",
      "Premium 4-star accommodation",
      "Daily breakfast & selected lunches",
      "Taj Mahal & Agra Fort",
      "Fatehpur Sikri",
      "Mathura & Vrindavan",
      "Jaipur city experience",
      "Amber Fort & Hawa Mahal",
      "Rajasthani cultural evening",
      "Inter-city transportation",
      "Dedicated patient coordinator",
      "Post-treatment care kit",
    ],
    color: "from-pink to-pink-dark",
    icon: Star,
  },
  {
    name: "Luxury Smile Journey",
    duration: "14 Days • 13 Nights",
    popular: false,
    price: "$2,500",
    priceNote: "(Approx. ₹2,07,000)",
    description:
      "Premium experience with wellness & luxury stays",
    destinations: [
      "Delhi",
      "Agra",
      "Mathura",
      "Jaipur",
      "Ranthambore",
    ],
    included: [
      "Extended dental treatment sessions",
      "Airport pickup & drop",
      "Luxury 4–5 star accommodation",
      "Daily breakfast & selected lunches",
      "Complete Signature Journey inclusions",
      "Optional Ranthambore safari",
      "Delhi heritage & landmark tour",
      "Lotus Temple & local markets",
      "Ayurvedic wellness experiences",
      "Fine dining experiences",
      "Professional photography",
      "Luxury vehicle transportation",
      "24/7 patient assistance",
      "Premium post-treatment care kit",
    ],
    color: "from-gold to-[#b91c1c]",
    icon: Sparkles,
  },
];

const additionalServices = [
  "Visa assistance guidance",
  "Travel insurance guidance",
  "Additional nights on request",
  "Family travel arrangements",
  "Personalized treatment packages",
];

export default function ItineraryPricing() {
  const [expandedPackages, setExpandedPackages] = useState<
    Record<string, boolean>
  >({});

  const togglePackage = (packageName: string) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [packageName]: !prev[packageName],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background Decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-pink/5 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue/5 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-pink">
            YOUR JOURNEY, OUR CARE
          </span>

          <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
            Complete Dental Journeys in India
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-balance text-base text-navy-soft">
            From expert dental care to comfortable stays and unforgettable
            experiences, our thoughtfully designed packages make your treatment
            journey simple, comfortable, and stress-free.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${
                pkg.popular
                  ? "border-4 border-pink"
                  : "border-2 border-navy/10"
              }`}
            >
              {/* Card Content */}
              <div className="flex h-full flex-col p-6">
                {/* Icon */}
                <div
                  className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${pkg.color} shadow-md`}
                >
                  <pkg.icon
                    size={28}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Package Name */}
                <h3 className="mt-5 font-serif text-xl font-bold text-navy">
                  {pkg.name}
                </h3>

                {/* Duration */}
                <p className="mt-1 text-sm font-medium text-pink">
                  {pkg.duration}
                </p>

                {/* Description */}
                <p className="mt-3 min-h-[40px] text-sm leading-relaxed text-navy-soft">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mt-5 rounded-xl border-2 border-navy/10 bg-gradient-to-br from-blush/30 to-white p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-navy">
                      {pkg.price}
                    </span>

                    <span className="text-sm text-navy-soft">
                      per person
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-navy-soft">
                    {pkg.priceNote}
                  </p>
                </div>

                {/* Destinations */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-pink">
                    Destinations
                  </p>

                  <div className="mt-2 flex min-h-[56px] flex-wrap content-start gap-2">
                    {pkg.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-navy"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                    Package Includes
                  </p>

                  <div className="min-h-[240px]">
                    <ul className="mt-3 space-y-2">
                      {(expandedPackages[pkg.name]
                        ? pkg.included
                        : pkg.included.slice(0, 5)
                      ).map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-navy-soft"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-pink"
                            strokeWidth={2.5}
                          />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand / Collapse */}
                    {pkg.included.length > 5 && (
                      <button
                        onClick={() => togglePackage(pkg.name)}
                        className="mt-3 flex items-center gap-1 text-sm font-medium text-pink transition-colors hover:text-pink-dark"
                      >
                        {expandedPackages[pkg.name] ? (
                          <>
                            <span>Show less</span>
                            <ChevronDown
                              size={16}
                              className="rotate-180 transition-transform"
                            />
                          </>
                        ) : (
                          <>
                            <span>
                              + {pkg.included.length - 5} more inclusions
                            </span>

                            <ChevronDown
                              size={16}
                              className="transition-transform"
                            />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                {/* mt-auto pushes all buttons to the same bottom position */}
                <div className="mt-auto pt-6">
                  <Button
                    href="/book-consultation"
                    variant={pkg.popular ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    Choose This Journey
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute bottom-0 left-0 h-2 w-0 bg-gradient-to-r ${pkg.color} transition-all duration-300 group-hover:w-full`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12"
        >
          <div className="rounded-2xl border-2 border-navy/10 bg-gradient-to-br from-white to-blush/20 p-6">
            <div className="mb-6 text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-pink">
                MORE THAN TREATMENT
              </span>

              <h3 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">
                Everything You Need for a Comfortable Journey
              </h3>
            </div>

            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-light">
                <Plane
                  size={24}
                  className="text-pink"
                  strokeWidth={1.75}
                />
              </div>

              {/* Services */}
              <div className="flex-1">
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {additionalServices.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-navy-soft"
                    >
                      <Check
                        size={16}
                        className="text-pink"
                        strokeWidth={2.5}
                      />

                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-8 rounded-xl border-2 border-pink/20 bg-gradient-to-r from-pink/5 to-blue/5 p-6 text-center"
        >
          <h4 className="font-serif text-xl font-semibold text-navy">
            Your Journey, Your Way
          </h4>

          <p className="mx-auto mt-2 max-w-3xl text-balance text-sm leading-relaxed text-navy-soft">
            Every patient is different. Dental treatment costs are determined
            separately according to your individual needs, while travel
            packages can be tailored to your treatment schedule, preferences,
            and stay.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}