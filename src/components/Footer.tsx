import { Phone, Mail, MapPin, FacebookIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 relative overflow-hidden bg-dark text-dark-foreground"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer_img.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/70" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 border-b border-dark-foreground/15 pb-12 lg:grid-cols-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="font-poppins font-bold text-xl">
              <img src="/PrimaSolution_bg.png" alt="PrimaSolution" className="h-16" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Col 1: Location & Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <MapPin className="w-5 h-5 text-gold" />
                </span>
                <p className="text-dark-foreground/80 text-sm">
                  LS2R 2nd Flr, Lemon Square Bldg, EDSA, Quezon City
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <Phone className="w-5 h-5 text-gold" />
                </span>
                <a
                  href="tel:(02) 8294 0871"
                  className="text-dark-foreground/80 text-sm hover:text-gold transition-colors"
                >
                  (02) 8294 0871
                </a>
              </div>
            </div>

            {/* Col 2: Email & Facebook */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <Mail className="w-5 h-5 text-gold" />
                </span>
                <a
                  href="mailto:primastruct.engineering@gmail.com"
                  className="text-dark-foreground/80 text-sm hover:text-gold transition-colors break-all"
                >
                  primastruct.engineering@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <FacebookIcon className="w-5 h-5 text-gold" />
                </span>
                <a
                  href="https://www.facebook.com/profile.php?id=61572640858240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-foreground/80 text-sm hover:text-gold transition-colors"
                >
                  Prima Solution Development and Construction Corp.
                </a>
              </div>
            </div>
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
