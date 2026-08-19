"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { currencies, type CurrencyOption } from "@/data/currencies";

export default function CurrencySelector({
  value,
  onChange,
  label = "Select country",
}: {
  value: CurrencyOption;
  onChange: (currency: CurrencyOption) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function focusOption(index: number) {
    const target = optionRefs.current[(index + currencies.length) % currencies.length];
    target?.focus();
  }

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => focusOption(0));
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-pink/40"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {value.flag}
        </span>
        <span>{value.country}</span>
        <span className="text-navy-soft">
          {value.code} • {value.symbol}
        </span>
        <ChevronDown
          size={16}
          className={`text-navy-soft transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            aria-label={label}
            className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-xl border border-navy/10 bg-white py-1 shadow-lg"
          >
            {currencies.map((option, i) => (
              <li key={option.countryCode}>
                <button
                  ref={(el) => {
                    optionRefs.current[i] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={option.countryCode === value.countryCode}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      focusOption(i + 1);
                    } else if (event.key === "ArrowUp") {
                      event.preventDefault();
                      focusOption(i - 1);
                    }
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition hover:bg-blush/40 ${
                    option.countryCode === value.countryCode
                      ? "bg-blush/60 text-pink"
                      : "text-navy"
                  }`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {option.flag}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium">{option.country}</span>
                    <span className="text-xs text-navy-soft">
                      {option.code} • {option.symbol}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
