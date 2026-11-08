import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects | Tanushree RD",
    description: "A collection of things I've built and explored.",
};

type Experiment = {
    title: string;
    subtitle?: string;
    description: string;
    status?: string;
    techStack: string[];
    image?: string;
    imagePosition?: string;
    imageFit?: "cover" | "contain";
    github: string;
    live?: string;
    documentation?: string;
    isMobileScreenshot?: boolean;
    downloadApk?: string;
};

const experiments: Experiment[] = [
    {
        title: "LEAPFROG-R + HYDRA",
        subtitle: "Crash-safe Key-Value Database & Torture Framework",
        description:
            "LEAPFROG-R is a crash-safe, single-file key-value database written entirely in Go. HYDRA is a deterministic torture-testing framework that repeatedly kills the database with kill -9 to verify durability, crash recovery, and atomic batch commits. Built by Team Pineapple during a 24-hour systems programming hackathon where we finished Runner-up.",
        status: "Featured",
        techStack: [
            "Go",
            "Systems Programming",
            "Concurrency",
            "File I/O",
            "Write-Ahead Logging",
            "Crash Recovery",
            "CRC32C",
            "CRC64",
            "CLI",
        ],
        image: "/projects/leapfrog.jpg",
        imagePosition: "top left",
        imageFit: "cover",
        github: "https://github.com/chethan-9817/pineapple",
        documentation: "https://github.com/chethan-9817/pineapple#readme",
    },
    {
        title: "Lunara",
        description:
            "A privacy-first cycle intelligence platform that combines Flow, Mood, and Body tracking to generate adaptive insights based on personal health patterns. Enables users to log daily cycle data and receive AI-assisted forecasting through secure authentication and encrypted Firestore storage.",
        techStack: ["Next.js", "Firebase Auth", "Firestore", "TailwindCSS", "OpenAI API"],
        image: "/projects/lunara.png",
        imagePosition: "top center",
        imageFit: "cover",
        github: "https://github.com/Tanushree-RD/lunara",
        live: "https://lunara-teal.vercel.app/",
    },
    {
        title: "ASCII Art Generator",
        description: "Converts images and webcam feed into ASCII art using Python. Supports adjustable width, density, and real-time webcam ASCII output in the terminal.",
        techStack: ["Python", "OpenCV", "Pillow", "NumPy"],
        image: "/projects/ascii.png",
        imagePosition: "center",
        imageFit: "cover",
        github: "https://github.com/Tanushree-RD/ascii_art",
    },
    {
        title: "iBallBooster",
        description:
            "Android application to wirelessly control speaker output using ESP32 via Bluetooth Serial Communication (SPP). Enables real-time volume and bass control by transmitting commands from mobile UI to microcontroller over Bluetooth.",
        techStack: ["Kotlin", "Android SDK", "Bluetooth SPP", "ESP32"],
        image: "/projects/iballbooster.png",
        imagePosition: "center",
        imageFit: "contain",
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
        imagePosition: "center",
        imageFit: "cover",
        github: "https://github.com/Tanushree-RD/particle-playground",
        live: "https://tanushree-rd.github.io/particle-playground/",
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
                        className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]"
                    >
                        {/* 16:9 Project Thumbnail with Intelligent Focal-Point Cropping */}
                        {experiment.image && (
                            <div className="project-image relative w-full aspect-video flex items-center justify-center overflow-hidden bg-card rounded-t-2xl">
                                <Image
                                    src={experiment.image}
                                    alt={`${experiment.title} preview`}
                                    fill
                                    className={`transition-transform duration-300 ease-out group-hover:scale-105 ${
                                        experiment.imageFit === "contain"
                                            ? "object-contain"
                                            : "object-cover"
                                    }`}
                                    style={{
                                        objectPosition: experiment.imagePosition || "center",
                                        objectFit: experiment.imageFit || "cover",
                                    }}
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

                            {/* Subtitle */}
                            {experiment.subtitle && (
                                <p className="mt-1 text-xs font-medium text-muted">
                                    {experiment.subtitle}
                                </p>
                            )}

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
                                {experiment.documentation && (
                                    <Link
                                        href={experiment.documentation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                    >
                                        Documentation →
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

