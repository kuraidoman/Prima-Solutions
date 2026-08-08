import { Phone, Mail, MapPin, FacebookIcon, Youtube } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    href: "https://maps.app.goo.gl/bH9uyaigJJkeLEDt7",
    external: true,
    lines: ["LS2R 2nd Flr, Lemon Square", "Bldg, EDSA, Quezon City"],
  },
  {
    icon: Phone,
    href: "tel:+639260536612",
    lines: ["+63 926 053 6612"],
  },
  {
    icon: Mail,
    href: "mailto:primastruct.engineering@gmail.com",
    lines: ["primastruct.engineering@gmail.com"],
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=61572640858240",
    external: true,
    lines: ["Prima-Solution Development", "and Construction Corp."],
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@PrimaSolution",
    external: true,
    lines: ["Prima Solution YouTube", "@PrimaSolution"],
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/groups/243533281825181/user/61567403392989/",
    external: true,
    lines: ["Careers at Prima", "Facebook Page"],
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-dark text-dark-foreground"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer_down.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/70" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 border-b border-dark-foreground/15 pb-12 lg:grid-cols-5">
          {/* Logo */}
          <div className="flex items-center lg:col-span-2">
            <a href="#" className="font-poppins font-bold text-xl">
              <img src="/PrimaSolution_bg.png" alt="PrimaSolution" className="h-16" />
            </a>
          </div>

          {/* Contact and Social Links */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:ml-auto lg:max-w-4xl">
            {contactItems.map(({ icon: Icon, href, external, lines }) => (
              <div key={href} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="min-w-0 text-sm leading-relaxed text-dark-foreground/80 transition-colors hover:text-gold"
                >
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-dark-foreground/60 text-sm">
            © 2024 Prima-Solution Development and Construction Corp.
          </p>
          <p className="text-dark-foreground/60 text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
