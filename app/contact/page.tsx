import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Tanushree RD",
    description: "Get in touch — I'd love to hear from you.",
};

const socials = [
    { label: "github", href: "https://github.com/Tanushree-RD" },
    {
        label: "linkedin",
        href: "https://www.linkedin.com/in/tanushree-r-5a250a370",
    },
    { label: "twitter", href: "https://x.com/serotoninwave" },
    { label: "instagram", href: "https://www.instagram.com/tanushirie?igsi=MTNyY2sxaDh0anVtYg==" },
];

export default function ContactPage() {
    return (
        <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
            <section>
                <p className="text-sm text-foreground">contact me at</p>
                <a
                    href="mailto:tanushreer021@gmail.com"
                    className="mt-2 inline-block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                >
                    tanushreer021@gmail.com
                </a>

                <p className="mt-10 text-sm text-foreground">or find me here:</p>

                <ul className="mt-4 space-y-2">
                    {socials.map((s) => (
                        <li key={s.label}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                            >
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
