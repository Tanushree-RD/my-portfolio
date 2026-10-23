"use client";

import { type ReactElement } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import FadeInSection from "./components/FadeInSection";

const techStack = [
  "c",
  "c++",
  "html",
  "css",
  "javascript",
  "react",
  "nextjs",
  "node",
  "tailwind",
  "firebase",
  "python",
  "git",
  "github",
];

const socials: { label: string; href: string; icon: ReactElement }[] = [
  { label: "GitHub", href: "https://github.com/Tanushree-RD", icon: <FiGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanushree-rd/",
    icon: <FiLinkedin />,
  },
  { label: "Twitter", href: "https://x.com/serotoninwave", icon: <FiTwitter /> },
  { label: "Instagram", href: "https://www.instagram.com/tanushreeiei/", icon: <FiInstagram /> },
  { label: "Email", href: "mailto:tanushreer021@gmail.com", icon: <FiMail /> },
];

const featuredProject = {
  title: "Lunara",
  description: "A privacy-first cycle intelligence platform that combines Flow, Mood, and Body tracking to generate adaptive insights based on personal health patterns.",
  techStack: ["Next.js", "Firebase Auth", "Firestore", "TailwindCSS", "OpenAI API"],
  github: "https://github.com/Tanushree-RD/lunara",
  live: "https://lunara-teal.vercel.app/",
};

const latestBlog = {
  title: "Understanding Purchasing Power Parity Through Tech Salaries",
  link: "https://medium.com/@serotoninwave/understanding-purchasing-power-parity-through-tech-salaries-7197e4a2dd7b",
  category: "Tech • Economics",
  description:
    "Everyone loves converting Silicon Valley salaries into rupees. But does ₹1.7 crore actually make someone rich? This article explains Purchasing Power Parity through real software engineering salary examples and why exchange rates don't tell the whole story.",
  readTime: "3 min read",
};

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
      {/* ───────── Intro ───────── */}
      <section className="mb-14">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Hyy I&apos;m Tanushree{" "}
          <span className="text-muted">aka sero</span>
        </h1>
        <p className="mt-4 text-base font-medium leading-relaxed text-foreground md:text-lg">
          CS Undergraduate
        </p>
      </section>

      {/* ───────── About ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          About
        </h2>
        <p className="text-sm leading-relaxed text-muted lowercase">
          I'm 18, and I enjoy designing and building things.
          I'm mostly into web development, and lately I've been exploring
          backend development, automation, and systems while improving my
          DSA skills along the way.
        </p>
      </FadeInSection>

      {/* ───────── Other than tech ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Beyond Tech
        </h2>
        <p className="text-sm leading-relaxed text-muted lowercase">
          When I&apos;m AFK, I&apos;m usually into fashion design, upcycling clothes,
          or experimenting with makeup — basically anything where I can create
          something new. I&apos;m also probably reading something, singing randomly,
          getting a game of football in, or playing chess once in a while.
        </p>
      </FadeInSection>

      {/* ───────── Education ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Education
        </h2>
        <p className="text-sm font-medium text-foreground lowercase">
          St Joseph Engineering College
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted lowercase">
          Bachelor of Engineering in Computer Science and Business Systems
        </p>
        <p className="mt-1 text-xs text-muted lowercase">2025 – 2029</p>
        <p className="mt-1 text-xs text-muted lowercase">CGPA: 9.70</p>
      </FadeInSection>

      {/* ───────── Tech Stack ───────── */}
      <FadeInSection className="mb-16">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Tech Stack
        </h2>
        <div className="marquee-container overflow-hidden">
          <div className="marquee-track flex w-max gap-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap rounded-full border border-border px-3 py-1 text-[11px] text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ───────── Socials ───────── */}
      <FadeInSection className="mb-16">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Socials
        </h2>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === "Email" ? undefined : "_blank"}
              rel={s.label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              className="text-foreground text-lg transition-all duration-200 hover:scale-125 hover:text-accent-dark hover:drop-shadow-[0_2px_8px_rgba(232,137,158,0.35)]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </FadeInSection>

      {/* ───────── Featured Project ───────── */}
      <FadeInSection className="mb-16">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Featured Project
        </h2>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
          {/* Project Card — matches /experiments card style */}
          <article className="group flex-1 border border-border p-5 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {featuredProject.title}
              </h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted lowercase">
              {featuredProject.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2 py-0.5 text-[10px] text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
              >
                GitHub →
              </a>
              {featuredProject.live && (
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>

          {/* Show More button */}
          <Link
            href="/experiments"
            className="shrink-0 rounded-full border border-border px-5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-accent-dark/40 hover:text-accent-dark hover:shadow-[0_4px_16px_rgba(232,137,158,0.2)]"
          >
            Show More →
          </Link>
        </div>
      </FadeInSection>

      {/* ───────── Latest Blog ───────── */}
      <FadeInSection className="mb-10">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Latest Blog
        </h2>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
          {/* Blog Card — matches /blogs card style */}
          <a
            href={latestBlog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block flex-1 border border-border p-5 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-dark hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]"
          >
            <article>
              <div className="flex items-center gap-2 text-[11px] text-muted">
                {latestBlog.category && (
                  <>
                    <span>{latestBlog.category}</span>
                    <span>·</span>
                  </>
                )}
                <span>{latestBlog.readTime}</span>
              </div>
              <h3 className="mt-2 text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent-dark">
                {latestBlog.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted lowercase">
                {latestBlog.description}
              </p>
              <span className="mt-3 inline-block text-xs text-accent-dark underline decoration-border underline-offset-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Read on Medium →
              </span>
            </article>
          </a>

          {/* Show More button */}
          <Link
            href="/blogs"
            className="shrink-0 rounded-full border border-border px-5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-accent-dark/40 hover:text-accent-dark hover:shadow-[0_4px_16px_rgba(232,137,158,0.2)]"
          >
            Show More →
          </Link>
        </div>
      </FadeInSection>
    </main>
  );
}
