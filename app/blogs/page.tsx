import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | Tanushree RD",
    description:
        "Personal reflections, musings, and thoughts on life — published on Medium.",
};

const blogs = [
    {
        title: "Understanding Purchasing Power Parity Through Tech Salaries",
        link: "https://medium.com/@serotoninwave/understanding-purchasing-power-parity-through-tech-salaries-7197e4a2dd7b",
        category: "Tech • Economics",
        description:
            "Everyone loves converting Silicon Valley salaries into rupees. But does ₹1.7 crore actually make someone rich? This article explains Purchasing Power Parity through real software engineering salary examples and why exchange rates don't tell the whole story.",
        readTime: "3 min read",
    },
    {
        title: "Who Am I?",
        link: "https://medium.com/@serotoninwave/who-am-i-9d31559bd223",
        category: "Personal",
        description:
            "A personal reflection about how I went from preparing for NEET to exploring coding, design, fashion, and still figuring life out at 18.",
        date: "Feb 28, 2026",
        readTime: "2 min read",
    },
    {
        title: "No One Will Remember, So Why Take Life So Seriously?",
        link: "https://medium.com/@serotoninwave/no-one-will-remember-so-why-take-life-so-seriously-5b7dfb646b43",
        category: "Personal",
        description:
            "A short reflection on why overthinking mistakes is pointless when most things won't matter in the long run.",
        date: "Aug 24, 2025",
        readTime: "2 min read",
    },
];

export default function BlogsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-lg font-semibold tracking-tight text-foreground">
                    Blog
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                    Personal reflections and musings — published on Medium.
                </p>
            </header>

            {/* Blog List */}
            <section aria-label="Blog posts" className="flex flex-col gap-4">
                {blogs.map((blog, index) => (
                    <a
                        key={blog.title}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border border-border p-5 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-dark hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]"
                    >
                        <article>
                            <div className="flex items-center gap-2 text-[11px] text-muted">
                                {blog.category && (
                                    <>
                                        <span>{blog.category}</span>
                                        <span>·</span>
                                    </>
                                )}
                                {blog.date && (
                                    <>
                                        <time>{blog.date}</time>
                                        <span>·</span>
                                    </>
                                )}
                                <span>{blog.readTime}</span>
                                {index === 0 && (
                                    <span className="ml-auto rounded-full border border-accent-dark/30 bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent-dark">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h2 className="mt-2 text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent-dark">
                                {blog.title}
                            </h2>
                            <p className="mt-2 text-xs leading-relaxed text-muted">
                                {blog.description}
                            </p>

                            <span className="mt-3 inline-block text-xs text-accent-dark underline decoration-border underline-offset-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                Read on Medium →
                            </span>
                        </article>
                    </a>
                ))}
            </section>
        </main>
    );
}

