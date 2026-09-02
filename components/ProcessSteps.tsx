"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, FileText, Plane, Sparkles, HeartPulse, CheckCircle2, CreditCard, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Get in Touch",
    description: "Connect with our International Dental Tourism Team.",
    highlight: "No card payment required",
    color: "bg-blue",
    lightColor: "bg-blue/10",
    textColor: "text-blue",
  },
  {
    number: 2,
    icon: Search,
    title: "Preoperative Assessment",
    description: "Virtual Dental Assessment with our dental team. Share your concerns and diagnostic reports.",
    color: "bg-pink",
    lightColor: "bg-pink/10",
    textColor: "text-pink",
  },
  {
    number: 3,
    icon: FileText,
    title: "Treatment Proposal + Travel Itinerary",
    description: "Receive personalized treatment plan, cost proposal and customized travel itinerary.",
    color: "bg-gold",
    lightColor: "bg-gold/10",
    textColor: "text-gold",
  },
  {
    number: 4,
    icon: Plane,
    title: "Payment + Travel Arrangements",
    description: "We assist with payment, travel bookings, airport transfers and hotel accommodation.",
    color: "bg-blue-dark",
    lightColor: "bg-blue-dark/10",
    textColor: "text-blue-dark",
  },
  {
    number: 5,
    icon: Sparkles,
    title: "Dental Treatment + Royal Experience",
    description: "International-grade treatment with Royal Indian Travel Experience and wellness.",
    color: "bg-pink",
    lightColor: "bg-pink/10",
    textColor: "text-pink",
  },
  {
    number: 6,
    icon: HeartPulse,
    title: "Postoperative Care + Follow-Up",
    description: "Postoperative care, virtual follow-ups and ongoing support for smooth recovery.",
    color: "bg-blue",
    lightColor: "bg-blue/10",
    textColor: "text-blue",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
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
          <h2 className="mt-2 font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
            Your Journey to a Perfect Smile
          </h2>
          <div className="mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-sm text-navy-soft">
            <span className="font-medium text-navy">Connect</span>
            <ArrowRight size={16} className="text-pink" />
            <span className="font-medium text-navy">Assess</span>
            <ArrowRight size={16} className="text-pink" />
            <span className="font-medium text-navy">Plan</span>
            <ArrowRight size={16} className="text-pink" />
            <span className="font-medium text-navy">Travel</span>
            <ArrowRight size={16} className="text-pink" />
            <span className="font-medium text-navy">Treat & Experience</span>
            <ArrowRight size={16} className="text-pink" />
            <span className="font-medium text-navy">Follow Up</span>
          </div>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-pink/30 hover:shadow-xl"
            >
              {/* Step Number Badge - Top Right */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blush">
                <span className="font-serif text-lg font-bold text-pink">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <step.icon size={28} className="text-white" strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-navy-soft">
                  {step.description}
                </p>

                {step.highlight && (
                  <div className={`mt-4 inline-flex items-center gap-2 rounded-full ${step.lightColor} px-4 py-2`}>
                    <CreditCard size={16} className={step.textColor} />
                    <span className={`text-xs font-semibold ${step.textColor}`}>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-pink/20 bg-gradient-to-r from-pink/5 to-blue/5 px-6 py-3">
            <CheckCircle2 size={20} className="text-pink" />
            <p className="text-sm font-semibold text-navy">
              Trusted by patients from <span className="text-pink">50+ countries</span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-consultation" variant="primary" size="lg">
              Start Your Journey
            </Button>
            <Button href="/dental-tourism" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
