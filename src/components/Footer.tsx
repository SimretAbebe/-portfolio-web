const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 mt-12 bg-background">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-display font-bold text-foreground mb-1">Simret Abebe</p>
          <p className="text-sm text-muted-foreground mb-4">
            Full Stack Developer & AI Enthusiast
          </p>
          <div className="text-xs text-muted-foreground">
            © {currentYear} Simret Abebe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
