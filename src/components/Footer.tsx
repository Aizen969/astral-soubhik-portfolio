import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative py-12 px-4 bg-card/30 backdrop-blur-md border-t border-primary/20">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow-purple transition-all duration-300 hover:scale-110 group"
            >
              <social.icon className="w-5 h-5 group-hover:text-primary-glow transition-colors" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Soubhik Sadhu. All Rights Reserved.
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse-glow" />
            </span>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
