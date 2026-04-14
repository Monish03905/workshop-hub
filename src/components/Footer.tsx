const Footer = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground">
      <span className="text-[10px] uppercase tracking-[0.4em]">
        © 2024 Ariston Academy of Curated Thought
      </span>
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-primary transition-colors">Legal</a>
        <a href="#" className="hover:text-primary transition-colors">Governance</a>
        <a href="#" className="hover:text-primary transition-colors">Ethics</a>
      </div>
    </div>
  </footer>
);

export default Footer;
