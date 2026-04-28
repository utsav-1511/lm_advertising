import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Megaphone,
  Printer,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import STATS from "../data/stats";
import {
  CEO_PROFILE,
  HERO_IMAGE,
  PROCESS_STEPS,
  SERVICES,
  STORY_POINTS,
} from "../data/AboutData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: "easeOut" },
  variants: fadeInUp,
};

const strengths = [
  {
    icon: MapPin,
    title: "Local Market Understanding",
    description: "We know how location, traffic, and everyday visibility affect an outdoor campaign.",
  },
  {
    icon: Ruler,
    title: "Readable Design",
    description: "Artwork is planned for real viewing distance, not only for a screen preview.",
  },
  {
    icon: Printer,
    title: "Print To Installation",
    description: "Design, production, material selection, and site execution stay connected.",
  },
  {
    icon: ShieldCheck,
    title: "Responsive Support",
    description: "Clients get clear updates and practical help through the campaign cycle.",
  },
];

const StatCard = ({ label, value }) => (
  <div className="rounded-lg border border-[var(--app-card-border)] bg-[var(--app-card-bg)] p-5 backdrop-blur">
    <p className="text-3xl font-black text-[#FF3B3B] md:text-4xl">{value}</p>
    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
      {label}
    </p>
  </div>
);

const StrengthCard = ({ icon: Icon, title, description }) => (
  <motion.article
    {...sectionAnimation}
    className="rounded-lg border border-[var(--app-card-border)] bg-[var(--app-card-bg)] p-6"
  >
    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF3B3B]/10 text-[#FF3B3B]">
      <Icon size={22} />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
  </motion.article>
);

const ProcessStep = ({ step, index }) => (
  <motion.div {...sectionAnimation} className="relative pl-10">
    <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF3B3B] text-sm font-bold text-white">
      {index + 1}
    </span>
    <h3 className="text-xl font-bold">{step.title}</h3>
    <p className="mt-2 leading-7 text-[var(--text-secondary)]">{step.description}</p>
  </motion.div>
);

const About = () => {
  return (
    <main className="w-full overflow-x-hidden bg-[var(--app-bg)] text-[var(--text-primary)]">
      <section className="relative min-h-[92svh] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="LM Advertising workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-[var(--app-bg)]" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-6 pb-14 pt-32 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl text-white"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
              <Megaphone size={15} />
              About LM Advertising
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Outdoor advertising made practical, visible, and reliable.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We help businesses in and around Prayagraj turn ideas into hoardings,
              signs, print work, and brand visuals that people can actually notice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-12 md:grid-cols-3 lg:px-20">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        <motion.div {...sectionAnimation}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF3B3B]">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            A grounded advertising partner for growing businesses.
          </h2>
        </motion.div>

        <motion.div {...sectionAnimation} className="space-y-5 text-lg leading-8 text-[var(--text-secondary)]">
          {STORY_POINTS.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-[var(--app-card-border)] bg-[var(--app-card-bg)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:px-20">
          <motion.div {...sectionAnimation}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF3B3B]">
              What We Handle
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Strategy, design, print, and outdoor execution under one roof.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <motion.div
                key={service}
                {...sectionAnimation}
                className="flex items-start gap-3 rounded-lg border border-[var(--app-card-border)] bg-[var(--app-bg)] p-5"
              >
                <CheckCircle className="mt-0.5 shrink-0 text-[#FF3B3B]" size={20} />
                <p className="font-semibold leading-7">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
        <motion.div {...sectionAnimation} className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF3B3B]">
            Why Clients Work With Us
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            We focus on the details that make outdoor campaigns work in the real world.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <StrengthCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-20">
        <motion.div {...sectionAnimation}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF3B3B]">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Simple communication from first call to final installation.
          </h2>
        </motion.div>

        <div className="space-y-9 border-l border-[var(--app-card-border)] pl-6">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-20">
        <motion.div
          {...sectionAnimation}
          className="overflow-hidden rounded-lg border border-[var(--app-card-border)] bg-[var(--app-card-bg)]"
        >
          <img
            src={CEO_PROFILE.image}
            alt={CEO_PROFILE.name}
            className="h-full min-h-[360px] w-full object-cover"
          />
        </motion.div>

        <motion.div
          {...sectionAnimation}
          className="flex flex-col justify-center rounded-lg border border-[var(--app-card-border)] bg-[var(--app-card-bg)] p-7 md:p-10"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF3B3B]">
            Founder Note
          </p>
          <blockquote className="mt-5 text-xl font-medium leading-9 md:text-2xl">
            “{CEO_PROFILE.message}”
          </blockquote>
          <div className="mt-8 border-t border-[var(--app-card-border)] pt-6">
            <h3 className="text-xl font-bold">{CEO_PROFILE.name}</h3>
            <p className="mt-1 text-[var(--text-secondary)]">{CEO_PROFILE.role}</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
