export function AIBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Soft premium aurora gradients */}
      <div
        className="absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cyan) 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 60%)" }}
      />
      <div
        className="absolute -bottom-1/3 left-1/3 h-[60vh] w-[60vh] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.13 0.02 260 / 0.4) 70%, oklch(0.13 0.02 260) 100%)",
        }}
      />

      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(to bottom, oklch(0.13 0.02 260) 0%, transparent 100%)" }}
      />
    </div>
  );
}
