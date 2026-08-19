"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import Button from "@/components/ui/Button";

const steps = [
  "About You",
  "Treatment",
  "Your Needs",
  "Documents",
  "Timeline",
];

const treatmentOptions = [
  "Consultation",
  "Dental Cleaning",
  "Tooth Filling",
  "Tooth Extraction",
  "Teeth Whitening",
  "Braces",
  "Other",
];

const documentTypes = [
  "X-Ray",
  "CT Scan",
  "Dental Photographs",
  "Previous Treatment Documents",
];

const timelineOptions = [
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  treatment: string;
  needs: string;
  documents: Record<string, string>;
  timeline: string;
};

const initialData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  treatment: "",
  needs: "",
  documents: {},
  timeline: "",
};

function inputClasses() {
  return "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink";
}

export default function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const isLastStep = step === steps.length - 1;

  const canContinue = () => {
    if (step === 0) return data.fullName.trim() && data.email.trim() && data.phone.trim() && data.country.trim();
    if (step === 1) return data.treatment.trim().length > 0;
    if (step === 2) return data.needs.trim().length > 0;
    if (step === 4) return data.timeline.trim().length > 0;
    return true;
  };

  const handleNext = () => {
    if (isLastStep) {
      setSubmitted(true);
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleFile = (type: string, files: FileList | null) => {
    const name = files?.[0]?.name ?? "";
    setData((prev) => ({ ...prev, documents: { ...prev.documents, [type]: name } }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-[2rem] border border-navy/10 bg-white p-12 text-center shadow-sm"
      >
        <CheckCircle2 size={56} className="text-pink" />
        <h2 className="mt-6 font-serif text-3xl text-navy">
          Your Request Has Been Received
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-soft">
          Thank you, {data.fullName.split(" ")[0] || "there"}. A dental care coordinator
          will review your information and send your personalized treatment plan within
          24–48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-10 flex items-center justify-between gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                i <= step ? "bg-pink text-white" : "bg-blush text-navy-soft"
              }`}
            >
              {i + 1}
            </div>
            <span className="hidden text-center text-[11px] text-navy-soft sm:block">
              {label}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3 }}
        >
          {step === 0 && (
            <div>
              <h2 className="font-serif text-2xl text-navy">Tell us about yourself</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  className={inputClasses()}
                  placeholder="Full Name"
                  value={data.fullName}
                  onChange={(e) => setData({ ...data, fullName: e.target.value })}
                  suppressHydrationWarning
                />
                <input
                  className={inputClasses()}
                  placeholder="Email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  suppressHydrationWarning
                />
                <input
                  className={inputClasses()}
                  placeholder="Phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  suppressHydrationWarning
                />
                <input
                  className={inputClasses()}
                  placeholder="Country"
                  value={data.country}
                  onChange={(e) => setData({ ...data, country: e.target.value })}
                  suppressHydrationWarning
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="font-serif text-2xl text-navy">
                What treatment are you interested in?
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {treatmentOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setData({ ...data, treatment: option })}
                    className={`rounded-xl border px-4 py-4 text-left text-sm font-medium transition-colors ${
                      data.treatment === option
                        ? "border-pink bg-pink-light text-pink"
                        : "border-navy/15 text-navy-soft hover:border-pink/50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-serif text-2xl text-navy">
                Tell us about your dental needs
              </h2>
              <textarea
                rows={6}
                className={`${inputClasses()} mt-6 resize-none`}
                placeholder="Describe your dental concerns, goals or any relevant history..."
                value={data.needs}
                onChange={(e) => setData({ ...data, needs: e.target.value })}
                suppressHydrationWarning
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-serif text-2xl text-navy">
                Upload dental documents
              </h2>
              <p className="mt-2 text-sm text-navy-soft">
                Optional, but helps our team prepare a more accurate treatment plan.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {documentTypes.map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-navy/20 px-4 py-4 text-sm text-navy-soft transition-colors hover:border-pink"
                  >
                    <span className="flex items-center gap-2">
                      <Upload size={16} className="text-pink" />
                      {type}
                    </span>
                    <span className="max-w-[40%] truncate text-xs">
                      {data.documents[type] || "Choose file"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFile(type, e.target.files)}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="font-serif text-2xl text-navy">
                Preferred travel timeline
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setData({ ...data, timeline: option })}
                    className={`rounded-xl border px-4 py-4 text-left text-sm font-medium transition-colors ${
                      data.timeline === option
                        ? "border-pink bg-pink-light text-pink"
                        : "border-navy/15 text-navy-soft hover:border-pink/50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between border-t border-navy/10 pt-6">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 0}
          className="inline-flex items-center gap-1 text-sm font-medium text-navy-soft transition-colors hover:text-pink disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <Button onClick={handleNext} disabled={!canContinue()} size="lg">
          {isLastStep ? "Get My Personalized Treatment Plan" : "Continue"}
          {!isLastStep && <ChevronRight size={16} />}
        </Button>
      </div>
    </div>
  );
}
