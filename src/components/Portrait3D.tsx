import portrait from "@/assets/harsha-portrait.png";

export function Portrait3D() {
  return (
    <div className="relative group">
      {/* Glowing orbital rings */}
      <div className="absolute inset-0 -m-8 rounded-full border border-cyan/30 animate-[spin_30s_linear_infinite]" />
      <div className="absolute inset-0 -m-16 rounded-full border border-violet/20 animate-[spin_45s_linear_infinite_reverse]" />
      <div className="absolute inset-0 -m-24 rounded-full border border-gold/10 animate-[spin_60s_linear_infinite]" />

      {/* Halo glow */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-60"
           style={{ background: "conic-gradient(from 0deg, var(--cyan), var(--violet), var(--gold), var(--cyan))" }} />

      {/* Photo frame */}
      <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan/40"
           style={{ boxShadow: "0 0 80px -10px color-mix(in oklab, var(--cyan) 60%, transparent), inset 0 0 40px color-mix(in oklab, var(--violet) 30%, transparent)" }}>
        <img src={portrait} alt="Harsha Vardhan Upadrasta" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0.13 0.02 260 / 0.7))" }} />
      </div>

      {/* Floating data chips */}
      <div className="absolute -top-2 -right-6 font-mono text-[10px] px-3 py-1.5 rounded-md card-surface border border-cyan/40 text-cyan animate-float">
        ● ONLINE
      </div>
      <div className="absolute bottom-8 -left-10 font-mono text-[10px] px-3 py-1.5 rounded-md card-surface border border-violet/40 text-violet animate-float" style={{ animationDelay: "1.5s" }}>
        AI · ENGINEER
      </div>
      <div className="absolute -bottom-2 right-4 font-mono text-[10px] px-3 py-1.5 rounded-md card-surface border border-gold/40 text-gold animate-float" style={{ animationDelay: "3s" }}>
        v2026.5
      </div>
    </div>
  );
}
