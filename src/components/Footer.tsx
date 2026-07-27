import { Phone, Mail, MapPin, FacebookIcon } from "lucide-react";

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

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:ml-auto lg:w-fit lg:justify-items-end">
            {/* Col 1: Location & Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <MapPin className="w-5 h-5 text-gold" />
                </span>
                <a
                  href="https://maps.app.goo.gl/bH9uyaigJJkeLEDt7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 text-sm leading-relaxed text-dark-foreground/80 transition-colors hover:text-gold"
                >
                  <span className="block">LS2R 2nd Flr, Lemon Square</span>
                  <span className="block">Bldg, EDSA, Quezon City</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-dark-foreground/5">
                  <Phone className="w-5 h-5 text-gold" />
                </span>
                <a
                  href="phone: +63 926 053 6612"
                  className="min-w-0 text-sm leading-relaxed text-dark-foreground/80 transition-colors hover:text-gold"
                >
                  +63 926 053 6612
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
                  className="min-w-0 text-sm leading-relaxed text-dark-foreground/80 transition-colors hover:text-gold"
                >
                  <span className="block">primastruct.engineering@gmail.com</span>
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
                  className="min-w-0 text-sm leading-relaxed text-dark-foreground/80 transition-colors hover:text-gold"
                >
                  <span className="block">Prima-Solution Development</span>
                  <span className="block">and Construction Corp.</span>
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
