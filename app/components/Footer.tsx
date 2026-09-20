export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden pt-16 md:pt-20 pb-0 select-none font-[family-name:var(--font-jetbrains)]">
            {/* Subtle horizontal divider */}
            <div className="mx-auto max-w-2xl px-6 mb-8 md:mb-10">
                <div className="h-px w-full bg-border/40" />
            </div>

            {/* Centered copyright text */}
            <div className="relative z-10 px-6 text-center mb-10 md:mb-14">
                <p className="text-[11px] tracking-wide text-muted">
                    © 2026 Tanushree RD. All rights reserved.
                </p>
            </div>

            {/* Oversized signature typography — gradient text, absolute centered */}
            <div
                className="footer-watermark-container relative w-full overflow-hidden"
                aria-hidden="true"
            >
                <span className="footer-watermark-text">
                    tanushree
                </span>
            </div>
        </footer>
    );
}
