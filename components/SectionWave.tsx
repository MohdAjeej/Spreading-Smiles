type SectionWaveProps = {
  color: string;
  position?: "top" | "bottom";
  className?: string;
};

/**
 * Organic wave divider. Renders a curved shape filled with `color`,
 * absolutely positioned to overlap the edge of its parent section
 * (parent must be `relative`) so two sections appear to meet along a
 * soft, blob-like seam instead of a straight line.
 */
export default function SectionWave({
  color,
  position = "bottom",
  className = "",
}: SectionWaveProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-10 overflow-hidden leading-[0] ${
        position === "bottom" ? "bottom-0 translate-y-[1px]" : "top-0 -translate-y-[1px] rotate-180"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="h-[52px] w-full sm:h-[80px] md:h-[110px]"
      >
        <path
          d="M0,32 C180,90 360,0 600,26 C840,52 1000,100 1260,54 C1350,38 1410,44 1440,50 L1440,110 L0,110 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
