"use client";

import { motion } from "framer-motion";
import { PhoneCall, Stethoscope, FileCheck2, PlaneTakeoff, Award, ShieldCheck, CheckCircle2, CreditCard, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: 1,
    icon: PhoneCall,
    title: "Get in Touch",
    description: "Connect with our International Dental Tourism Team.",
    highlight: "No card payment required",
    color: "bg-gradient-to-br from-blue to-blue-dark",
    lightColor: "bg-blue/10",
    textColor: "text-blue",
  },
  {
    number: 2,
    icon: Stethoscope,
    title: "Preoperative Assessment",
    description: "Virtual Dental Assessment with our dental team. Share your concerns and diagnostic reports.",
    color: "bg-gradient-to-br from-pink to-pink-dark",
    lightColor: "bg-pink/10",
    textColor: "text-pink",
  },
  {
    number: 3,
    icon: FileCheck2,
    title: "Treatment Proposal + Travel Itinerary",
    description: "Receive personalized treatment plan, cost proposal and customized travel itinerary.",
    color: "bg-gradient-to-br from-gold to-[#b91c1c]",
    lightColor: "bg-gold/10",
    textColor: "text-gold",
  },
  {
    number: 4,
    icon: PlaneTakeoff,
    title: "Payment + Travel Arrangements",
    description: "We assist with payment, travel bookings, airport transfers and hotel accommodation.",
    color: "bg-gradient-to-br from-blue-dark to-[#1e40af]",
    lightColor: "bg-blue-dark/10",
    textColor: "text-blue-dark",
  },
  {
    number: 5,
    icon: Award,
    title: "Dental Treatment + Royal Experience",
    description: "International-grade treatment with Royal Indian Travel Experience and wellness.",
    color: "bg-gradient-to-br from-pink to-[#ec4899]",
    lightColor: "bg-pink/10",
    textColor: "text-pink",
  },
  {
    number: 6,
    icon: ShieldCheck,
    title: "Postoperative Care + Follow-Up",
    description: "Postoperative care, virtual follow-ups and ongoing support for smooth recovery.",
    color: "bg-gradient-to-br from-blue to-[#0ea5e9]",
    lightColor: "bg-blue/10",
    textColor: "text-blue",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      {/* Background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-blue/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-0 h-64 w-64 rounded-full bg-pink/5 blur-3xl"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-pink">
            The Process
          </span>
          <h2 className="mt-2 font-serif text-3xl text-navy sm:text-4xl">
            Your Journey to a Perfect Smile
          </h2>
          <div className="mx-auto mt-3 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-xs text-navy-soft sm:text-sm">
            <span className="font-medium text-navy">Connect</span>
            <ArrowRight size={14} className="text-pink" />
            <span className="font-medium text-navy">Assess</span>
            <ArrowRight size={14} className="text-pink" />
            <span className="font-medium text-navy">Plan</span>
            <ArrowRight size={14} className="text-pink" />
            <span className="font-medium text-navy">Travel</span>
            <ArrowRight size={14} className="text-pink" />
            <span className="font-medium text-navy">Treat & Experience</span>
            <ArrowRight size={14} className="text-pink" />
            <span className="font-medium text-navy">Follow Up</span>
          </div>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border-2 border-navy/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-pink/30 hover:shadow-lg"
            >
              {/* Step Number Badge - Top Right */}
              <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-blush">
                <span className="font-serif text-xs font-bold text-pink">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${step.color} shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                <step.icon size={22} className="text-white" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <div className="mt-3">
                <h3 className="font-serif text-sm font-semibold text-navy">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-navy-soft">
                  {step.description}
                </p>

                {step.highlight && (
                  <div className={`mt-2 inline-flex items-center gap-1 rounded-full ${step.lightColor} px-2.5 py-1`}>
                    <CreditCard size={11} className={step.textColor} />
                    <span className={`text-[10px] font-semibold ${step.textColor}`}>
                      {step.highlight}
                    </span>
                  </div>
                )}
              </div>

              {/* Hover Effect - Bottom Border */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 ${step.color} transition-all duration-300 group-hover:w-full`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-pink/20 bg-gradient-to-r from-pink/5 to-blue/5 px-5 py-2.5">
            <CheckCircle2 size={18} className="text-pink" />
            <p className="text-xs font-semibold text-navy sm:text-sm">
              Trusted by patients from <span className="text-pink">50+ countries</span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/book-consultation" variant="primary" size="md">
              Start Your Journey
            </Button>
            <Button href="/dental-tourism" variant="secondary" size="md">
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
