import { createFileRoute } from "@tanstack/react-router";
import { AIBackground } from "@/components/AIBackground";
import { Portrait3D } from "@/components/Portrait3D";
import {
  Brain, Sparkles, Bot, Workflow, Github, Linkedin, Mail, FileDown, ExternalLink,
  Database, Code2, Cloud, Box, Cpu, GitBranch, Container, Zap, Network, Shield,
  Award, BookOpen, Briefcase, GraduationCap, ArrowUpRight, Terminal as TermIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Upadrasta Harsha Vardhan — AI Engineer & GenAI Builder" },
      { name: "description", content: "AI Automation QA Engineer specializing in Azure OpenAI, Copilot Studio agents, RAG systems, and AI-powered CI/CD pipelines." },
      { property: "og:title", content: "Upadrasta Harsha Vardhan — AI Engineer" },
      { property: "og:description", content: "Building AI systems where intelligence becomes part of engineering." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { v: "60%", l: "Less manual test effort", c: "cyan" },
  { v: "55%", l: "More regression coverage", c: "violet" },
  { v: "45%", l: "Faster release validation", c: "gold" },
  { v: "30%", l: "Fewer production defects", c: "green" },
];

const ZONES = [
  { icon: Brain, title: "Large Language Models", desc: "GPT-4o · Claude · Gemini — prompt engineering, evaluation harnesses, and conversational testing for production systems.", c: "cyan" },
  { icon: Network, title: "RAG Architectures", desc: "Documentation-aware agents with vector retrieval, hybrid search, and context-grounded generation pipelines.", c: "violet" },
  { icon: Bot, title: "Multi-Agent Systems", desc: "Copilot Studio + Azure OpenAI orchestration — task-routing agents, custom connectors, adaptive cards in Teams.", c: "gold" },
  { icon: Workflow, title: "AI-Powered CI/CD", desc: "Self-authoring test suites embedded in Azure DevOps and Jenkins — quality gates that learn and adapt.", c: "green" },
];

const PROJECTS = [
  { icon: "🧪", name: "Copilot Studio Test-Case Agent", desc: "Auto-generates PyTest / BDD suites from natural-language requirements. Pulls Azure DevOps acceptance criteria and commits scaffolded tests via Power Automate. Adaptive-card refinement in Teams.", stat: "60%", statLabel: "Faster authoring", tags: ["Azure OpenAI", "Copilot Studio", "PyTest"], c: "cyan" },
  { icon: "📊", name: "MongoDB NL → Query Agent", desc: "Translates plain-English questions into optimised MongoDB aggregation pipelines. Schema-aware prompting, explain-plan analysis, index-improvement suggestions, approval workflows.", stat: "GPT-4o", statLabel: "Schema-aware", tags: ["MongoDB Atlas", "GPT-4o", "Custom Connectors"], c: "violet" },
  { icon: "🌐", name: "Apigee API Creation Agent", desc: "Scaffolds full Apigee proxies — OpenAPI spec, policies (OAuth, quota, fault), and proxy bundles — from a plain-English description. Auto-triggers contract tests post-deploy.", stat: "days → hrs", statLabel: "Onboarding", tags: ["Apigee", "OpenAPI 3.0", "Power Automate"], c: "gold" },
  { icon: "📄", name: "Docs → Test-Case RAG Agent", desc: "Ingests PDFs, Confluence, SharePoint. RAG over the internal corpus produces Gherkin features + Playwright scripts. Webhook sync flags impacted tests on doc changes.", stat: "45%", statLabel: "Faster bootstrap", tags: ["RAG", "Playwright", "Confluence"], c: "green" },
  { icon: "🔌", name: "webMethods Integration Assistant", desc: "Parses webMethods audit logs and error journals for root-cause analysis in natural language. Generates SOAP/REST adapter configs and trigger definitions through guided dialogue.", stat: "35%", statLabel: "Faster MTTR", tags: ["webMethods", "REST/SOAP", "Copilot Studio"], c: "cyan" },
];

const EXPERIENCE = [
  { role: "Assistant Manager — AI Automation QA", org: "VOIS (Vodafone Intelligent Solutions)", period: "Sep 2025 — Present", bullets: [
    "Architected intelligent automation frameworks using Python, PyTest, Playwright, BDD (+40% maintainability).",
    "Deployed Azure OpenAI + Copilot Studio agents for test generation, defect prediction, doc-driven test creation.",
    "Led GenAI PoCs for AI-assisted test generation and intelligent defect prediction.",
    "Embedded AI quality gates into Azure DevOps & Jenkins — cut release validation time by 45%.",
  ]},
  { role: "Senior Executive — Automation QA Engineer", org: "VOIS", period: "Aug 2023 — Sep 2025", bullets: [
    "Designed modular Python automation frameworks (PyTest + BDD).",
    "Automated UI + service-level validation for microservices.",
    "Began early exploration of LLM-powered test generation with OpenAI APIs.",
  ]},
  { role: "Pioneer Technical Graduate — QA Automation", org: "VOIS", period: "Aug 2022 — Aug 2023", bullets: [
    "Built automated verification scripts using Python and BDD.",
    "Enabled CI-based execution for faster feedback loops.",
  ]},
];

const TECH = [
  { icon: Code2, name: "Python" },
  { icon: Cloud, name: "Azure OpenAI" },
  { icon: Bot, name: "Copilot Studio" },
  { icon: Sparkles, name: "Playwright" },
  { icon: Zap, name: "PyTest / BDD" },
  { icon: Database, name: "MongoDB" },
  { icon: Network, name: "Apigee" },
  { icon: GitBranch, name: "Azure DevOps" },
  { icon: Container, name: "Docker" },
  { icon: Cloud, name: "AWS" },
  { icon: Cpu, name: "LangChain" },
  { icon: Box, name: "FastAPI" },
];

const PRODUCTS = [
  { emoji: "🚀", name: "Insight Trove", desc: "AI-powered learning platform — personalized intelligence meets structured knowledge." },
  { emoji: "💍", name: "Rutvik", desc: "Smart Purohit booking system — digitizing sacred traditions with intelligent scheduling." },
  { emoji: "🎓", name: "Vidya4U", desc: "Career + learning ecosystem bridging education to employment end-to-end." },
];

const CERTS = [
  { name: "AWS Well-Architected Proficient", issuer: "Amazon Web Services", c: "gold" },
  { name: "Generative AI Foundations", issuer: "Skillsoft / MIT Horizon", c: "cyan" },
  { name: "Automation Pro I, II, III", issuer: "Workato", c: "violet" },
  { name: "DevSecOps Foundation", issuer: "Vodafone", c: "green" },
  { name: "Cyber Security Essentials", issuer: "Vodafone", c: "cyan" },
  { name: "STAR Award · Multiple Times", issuer: "VOIS — AI-driven QE recognition", c: "gold" },
];

const BLOGS = [
  { title: "Building Production-Grade Copilot Studio Agents", desc: "Patterns for orchestrating Azure OpenAI agents inside enterprise QA workflows.", tag: "AI Agents" },
  { title: "RAG Pipelines for Documentation-Aware Testing", desc: "Vector stores, hybrid retrieval, and grounded generation for Gherkin + Playwright suites.", tag: "RAG" },
  { title: "AI Quality Gates in Azure DevOps", desc: "Embedding LLM evaluators into CI/CD without slowing the release train.", tag: "DevOps" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />

      <AIBackground />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-border/50" style={{ background: "color-mix(in oklab, var(--background) 70%, transparent)" }}>
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="w-8 h-8 rounded-md grid place-items-center bg-cyan/10 border border-cyan/30 text-cyan">H</span>
            <span className="hidden sm:inline">Harsha<span className="text-cyan">.</span>ai</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 font-mono text-xs tracking-wider uppercase">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-cyan transition-colors">{n.label}</a></li>
            ))}
          </ul>
          <a href="/Harsha_Vardhan_Upadrasta_Resume_2026.pdf" target="_blank" rel="noopener"
             className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-cyan/40 text-cyan text-xs font-mono uppercase tracking-wider hover:bg-cyan/10 transition">
            <FileDown size={14} /> Resume
          </a>
        </nav>
      </header>

      <main id="top" className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* ── HERO ── */}
        <section className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center min-h-[80vh]">
          <div>
            <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-[0.25em] uppercase text-cyan">
              <span className="w-8 h-px bg-cyan" />
              AI Engineer · GenAI Builder · Automation Architect
            </div>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-tight" style={{ fontSize: "clamp(48px, 7vw, 92px)" }}>
              Upadrasta<br /><span className="gradient-text">Harsha Vardhan</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Building AI systems where <span className="text-foreground">intelligence becomes part of engineering itself</span> — Azure OpenAI agents, RAG pipelines, and self-authoring test suites shipped at enterprise scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Azure OpenAI", "Copilot Studio", "AI Agents", "RAG Systems", "LLM Eval", "QA Automation"].map((t, i) => (
                <span key={t} className={`font-mono text-[11px] px-3 py-1.5 rounded border uppercase tracking-wider ${
                  ["border-cyan/30 text-cyan bg-cyan/10","border-violet/30 text-violet bg-violet/10","border-gold/30 text-gold bg-gold/10","border-green/30 text-green bg-green/10"][i % 4]
                }`}>{t}</span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:upadrastaharsha09@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan text-primary-foreground font-semibold text-sm hover:glow-cyan transition">
                <Mail size={16} /> Get in touch
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-cyan/40 text-foreground font-semibold text-sm hover:bg-cyan/10 hover:text-cyan transition">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="/Harsha_Vardhan_Upadrasta_Resume_2026.pdf" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition">
                <FileDown size={16} /> Resume 2026
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Portrait3D />
          </div>
        </section>

        {/* ── METRICS ── */}
        <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border card-surface">
          {METRICS.map((m) => (
            <div key={m.l} className="relative p-8 text-center card-surface">
              <div className="font-display font-extrabold text-5xl" style={{ color: `var(--${m.c})` }}>{m.v}</div>
              <div className="mt-2 text-[11px] text-muted-foreground uppercase tracking-[0.15em]">{m.l}</div>
              <div className="absolute inset-x-0 bottom-0 h-0.5" style={{ background: `var(--${m.c})` }} />
            </div>
          ))}
        </section>

        {/* ── ABOUT ── */}
        <Section id="about" num="01" title="About">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 card-surface rounded-2xl p-8">
              <p className="text-foreground text-lg leading-relaxed">
                AI Automation QA Engineer with <span className="text-cyan font-semibold">3+ years</span> embedding GenAI into enterprise quality engineering at Vodafone.
                I design and ship Azure OpenAI + Copilot Studio agents — test-case generation, MongoDB NL queries, Apigee API scaffolding, and documentation-driven RAG pipelines.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My work lives at the seam of LLMs, automation frameworks, and CI/CD. I treat AI not as a feature, but as load-bearing infrastructure for how modern teams ship software.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Info icon={Briefcase} label="Current" value="Assistant Manager, VOIS" />
                <Info icon={GraduationCap} label="M.Tech CSE (AI & ML)" value="JNTU Kakinada, 2025" />
                <Info icon={Cloud} label="Stack" value="Azure · AWS · Python" />
                <Info icon={Shield} label="Based in" value="East Godavari, India" />
              </div>
            </div>
            <div className="card-surface rounded-2xl p-8 flex flex-col justify-center">
              <TermIcon className="text-cyan mb-4" size={28} />
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-cyan">❯</span> whoami</div>
                <div className="pl-4 text-muted-foreground">→ <span className="text-green">harsha</span> · AI Engineer</div>
                <div className="mt-3"><span className="text-cyan">❯</span> focus</div>
                <div className="pl-4 text-muted-foreground">→ <span className="text-violet">agentic</span> systems</div>
                <div className="pl-4 text-muted-foreground">→ <span className="text-gold">AI-native</span> QA</div>
                <div className="pl-4 text-muted-foreground">→ <span className="text-green">AI + sec</span></div>
                <div className="mt-3"><span className="text-cyan">❯</span> status<span className="inline-block w-2 h-3.5 bg-cyan ml-1 animate-blink align-middle" /></div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── AI ZONE ── */}
        <Section id="zone" num="02" title="AI Engineering Zone">
          <div className="grid md:grid-cols-2 gap-5">
            {ZONES.map((z) => (
              <div key={z.title} className="group card-surface rounded-2xl p-7 relative overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="absolute -top-px left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition" style={{ background: `linear-gradient(90deg, var(--${z.c}), transparent)` }} />
                <z.icon size={28} style={{ color: `var(--${z.c})` }} />
                <h3 className="mt-4 text-lg font-semibold">{z.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── WORK ── */}
        <Section id="work" num="03" title="Experience">
          <div className="relative pl-8 border-l border-border space-y-8">
            {EXPERIENCE.map((e, i) => (
              <div key={e.role} className="relative">
                <div className="absolute -left-[37px] top-2 w-3 h-3 rounded-full" style={{ background: ["var(--cyan)","var(--violet)","var(--gold)"][i], boxShadow: `0 0 16px ${["var(--cyan)","var(--violet)","var(--gold)"][i]}` }} />
                <div className="card-surface rounded-2xl p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <div className="text-cyan text-sm mt-1">{e.org}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3"><span className="text-cyan mt-1">▸</span><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── PROJECTS ── */}
        <Section id="projects" num="04" title="AI Agent Projects">
          <div className="grid gap-5">
            {PROJECTS.map((p) => (
              <div key={p.name} className="card-surface rounded-2xl p-7 relative overflow-hidden grid md:grid-cols-[1fr_auto] gap-6 items-start hover:translate-x-1 transition">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `var(--${p.c})` }} />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className={`font-mono text-[10px] px-2.5 py-1 rounded border uppercase tracking-wider border-${p.c}/30 text-${p.c} bg-${p.c}/10`} style={{ borderColor: `color-mix(in oklab, var(--${p.c}) 30%, transparent)`, color: `var(--${p.c})`, background: `color-mix(in oklab, var(--${p.c}) 8%, transparent)` }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-3xl whitespace-nowrap" style={{ color: `var(--${p.c})` }}>{p.stat}</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{p.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── STACK ── */}
        <Section id="stack" num="05" title="Tech Stack">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {TECH.map((t) => (
              <div key={t.name} className="card-surface rounded-xl p-5 text-center hover:border-cyan/40 hover:text-cyan transition group">
                <t.icon className="mx-auto text-muted-foreground group-hover:text-cyan transition" size={22} />
                <div className="mt-3 font-mono text-xs">{t.name}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── PRODUCTS ── */}
        <Section id="products" num="06" title="Products Built">
          <div className="grid md:grid-cols-3 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="card-surface rounded-2xl p-7 text-center hover:-translate-y-1 transition">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── CERTS ── */}
        <Section id="certs" num="07" title="Certifications & Awards">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CERTS.map((c) => (
              <div key={c.name} className="card-surface rounded-xl p-5 flex gap-4 items-start hover:border-cyan/30 transition">
                <Award size={22} style={{ color: `var(--${c.c})` }} className="shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-sm leading-tight">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
                </div>
              </div>
            ))}
            <a href="https://www.linkedin.com/in/harsha-upadrasta/details/certifications/" target="_blank" rel="noopener"
               className="card-surface rounded-xl p-5 flex items-center justify-between gap-3 hover:border-cyan/40 hover:text-cyan transition group">
              <div>
                <div className="font-semibold text-sm">All certifications</div>
                <div className="text-xs text-muted-foreground mt-1">View on LinkedIn</div>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-cyan transition" size={20} />
            </a>
          </div>
        </Section>

        {/* ── BLOG ── */}
        <Section id="blog" num="08" title="Writing & Blog">
          <div className="grid md:grid-cols-3 gap-5">
            {BLOGS.map((b, i) => (
              <a key={b.title} href="https://harshaupadrasta.hashnode.dev/" target="_blank" rel="noopener"
                 className="card-surface rounded-2xl p-6 block hover:-translate-y-1 transition group">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: ["var(--cyan)","var(--violet)","var(--gold)"][i] }}>
                  <BookOpen size={12} /> {b.tag}
                </div>
                <h3 className="font-semibold leading-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                <div className="mt-4 text-xs text-cyan flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  Read on Hashnode <ArrowUpRight size={12} />
                </div>
              </a>
            ))}
          </div>
          <a href="https://harshaupadrasta.hashnode.dev/" target="_blank" rel="noopener"
             className="mt-6 inline-flex items-center gap-2 text-sm text-cyan hover:underline font-mono">
            All posts on Hashnode <ArrowUpRight size={14} />
          </a>
        </Section>

        {/* ── QUOTE ── */}
        <section className="mt-24 card-surface rounded-2xl p-10 md:p-14 border border-cyan/20 relative overflow-hidden">
          <div className="absolute -top-8 left-6 font-display text-[180px] leading-none text-cyan opacity-5 pointer-events-none">"</div>
          <p className="font-display font-bold text-2xl md:text-3xl leading-snug max-w-3xl relative">
            I don't just use AI tools. I build systems where <span className="gradient-text">AI becomes part of engineering itself</span>.
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">— Harsha Vardhan · AI Engineer · GenAI Builder</p>
        </section>

        {/* ── CONTACT ── */}
        <Section id="contact" num="09" title="Connect">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <ConnectCard href="mailto:upadrastaharsha09@gmail.com" icon={Mail} label="Email" sub="upadrastaharsha09@gmail.com" c="cyan" />
            <ConnectCard href="https://www.linkedin.com/in/harsha-upadrasta/" icon={Linkedin} label="LinkedIn" sub="/harsha-upadrasta" c="violet" />
            <ConnectCard href="https://github.com/upadrastaharshavardhan" icon={Github} label="GitHub" sub="@upadrastaharshavardhan" c="gold" />
            <ConnectCard href="https://harshaupadrasta.hashnode.dev/" icon={BookOpen} label="Hashnode" sub="harshaupadrasta.dev" c="green" />
          </div>
        </Section>

        <footer className="mt-24 pt-8 border-t border-border text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-cyan">AI</span> · Automation · <span className="text-violet">Innovation</span> · © 2026 Harsha Vardhan
        </footer>
      </main>
    </div>
  );
}

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-24 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-xs text-cyan opacity-60">{num}</span>
        <h2 className="font-display font-bold text-2xl">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan/40 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function Info({ icon: Icon, label, value }: { icon: import("lucide-react").LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="text-cyan mt-0.5 shrink-0" size={16} />
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}

function ConnectCard({ href, icon: Icon, label, sub, c }: { href: string; icon: import("lucide-react").LucideIcon; label: string; sub: string; c: string }) {
  return (
    <a href={href} target="_blank" rel="noopener"
       className="card-surface rounded-2xl p-6 text-center transition hover:-translate-y-1 group"
       style={{ borderColor: `color-mix(in oklab, var(--${c}) 25%, var(--border))` }}>
      <Icon size={26} style={{ color: `var(--${c})` }} className="mx-auto" />
      <div className="mt-3 font-semibold text-sm">{label}</div>
      <div className="mt-1 text-[11px] text-muted-foreground font-mono truncate">{sub}</div>
    </a>
  );
}
