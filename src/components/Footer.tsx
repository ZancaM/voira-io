import content from '@/data/content.json';

export const Footer = () => {
  const { footer } = content;

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-xl">Voira</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
