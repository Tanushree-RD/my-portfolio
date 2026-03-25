import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects | Tanushree RD",
    description: "A collection of things I've built and explored.",
};

type Experiment = {
    title: string;
    description: string;
    status?: string;
    techStack: string[];
    image?: string;
    github: string;
    live?: string;
    isMobileScreenshot?: boolean;
    downloadApk?: string;
};

const experiments: Experiment[] = [
    {
        title: "Lunara",
        description:
            "A privacy-first cycle intelligence platform that combines Flow, Mood, and Body tracking to generate adaptive insights based on personal health patterns. Enables users to log daily cycle data and receive AI-assisted forecasting through secure authentication and encrypted Firestore storage.",
        techStack: ["Next.js", "Firebase Auth", "Firestore", "TailwindCSS", "OpenAI API"],
        image: "/projects/lunara.png",
        github: "https://github.com/Tanushree-RD/lunara",
        live: "https://lunara-teal.vercel.app/",
    },
    {
        title: "ASCII Art Generator",
        description: "Converts images and webcam feed into ASCII art using Python. Supports adjustable width, density, and real-time webcam ASCII output in the terminal.",
        techStack: ["Python", "OpenCV", "Pillow", "NumPy"],
        image: "/projects/ascii.png",
        github: "https://github.com/Tanushree-RD/ascii_art",
    },
    {
        title: "iBallBooster",
        description:
            "Android application to wirelessly control speaker output using ESP32 via Bluetooth Serial Communication (SPP). Enables real-time volume and bass control by transmitting commands from mobile UI to microcontroller over Bluetooth.",
        techStack: ["Kotlin", "Android SDK", "Bluetooth SPP", "ESP32"],
        image: "/projects/iballbooster.png",
        isMobileScreenshot: true,
        github: "https://github.com/Tanushree-RD/iballbooster",
        downloadApk:
            "https://github.com/Tanushree-RD/iballbooster/releases/latest",
    },
    {
        title: "Particle Playground",
        description:
            "An interactive particle animation playground where colorful particles burst and connect based on mouse movement.",
        techStack: ["HTML", "CSS", "JavaScript", "Canvas API"],
        image: "/projects/particle.png",
        github: "https://github.com/Tanushree-RD/particle-playground",
        live: "https://tanushree-rd.github.io/particle-playground/",
    },
    {
        title: "AI Job Checker",
        description:
            "A lightweight web app that estimates the likelihood of AI automation for a given job role.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "/projects/aijob.png",
        github: "https://github.com/Tanushree-RD/ai-job-checker",
        live: "https://ai-job-checker.vercel.app/",
    },
];

export default function ExperimentsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-lg font-semibold tracking-tight text-foreground">
                    Projects
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                    A collection of things I&apos;ve built — from full-stack apps to fun
                    side projects. Each one taught me something new.
                </p>
            </header>

            {/* Projects List */}
            <section aria-label="Projects list" className="flex flex-col gap-6">
                {experiments.map((experiment) => (
                    <article
                        key={experiment.title}
                        className="group overflow-hidden rounded-lg border border-border transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]"
                    >
                        {/* Mobile Screenshot (portrait, centered — e.g. iBallBooster) */}
                        {experiment.image && experiment.isMobileScreenshot && (
                            <div className="flex justify-center items-center py-4">
                                <Image
                                    src={experiment.image}
                                    alt={`${experiment.title} UI`}
                                    width={220}
                                    height={420}
                                    className="rounded-xl object-contain shadow-md"
                                />
                            </div>
                        )}

                        {/* Landscape Preview Image (existing projects) */}
                        {experiment.image && !experiment.isMobileScreenshot && (
                            <div className="relative w-full h-48 overflow-hidden rounded-xl">
                                <Image
                                    src={experiment.image}
                                    alt={`${experiment.title} preview`}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    sizes="(max-width: 672px) 100vw, 672px"
                                />
                            </div>
                        )}

                        {/* Card Content */}
                        <div className="p-5">
                            {/* Title + Status */}
                            <div className="flex items-center gap-3">
                                <h2 className="text-sm font-semibold text-foreground">
                                    {experiment.title}
                                </h2>
                                {experiment.status && (
                                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent-dark">
                                        {experiment.status}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="mt-2 text-xs leading-relaxed text-muted">
                                {experiment.description}
                            </p>

                            {/* Tech Stack Badges */}
                            {experiment.techStack && experiment.techStack.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {experiment.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-accent-soft/60 px-2.5 py-0.5 text-[10px] font-medium text-accent-dark transition-colors duration-200 hover:bg-accent-soft"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Links */}
                            <div className="mt-4 flex items-center gap-4">
                                <Link
                                    href={experiment.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                >
                                    GitHub →
                                </Link>
                                {experiment.downloadApk && (
                                    <Link
                                        href={experiment.downloadApk}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                    >
                                        Download APK →
                                    </Link>
                                )}
                                {experiment.live && (
                                    <Link
                                        href={experiment.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                    >
                                        Live Demo →
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
