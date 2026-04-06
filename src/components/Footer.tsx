import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-dark-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo & Tagline */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-3">
              Prima<span className="text-gold">Struct</span>
            </h3>
            <p className="text-dark-foreground/70 italic">
              "Performance at its Best."
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="text-dark-foreground/80 text-sm">
                LS2R 2nd Flr, Lemon Square Bldg, EDSA, Quezon City
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <a
                href="tel:09260536612"
                className="text-dark-foreground/80 text-sm hover:text-gold transition-colors"
              >
                09260536612
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <a
                href="mailto:primastruct.engineering@gmail.com"
                className="text-dark-foreground/80 text-sm hover:text-gold transition-colors break-all"
              >
                primastruct.engineering@gmail.com
              </a>
            </div>
          </div>

          {/* Col 3: Copyright */}
          <div className="md:text-right">
            <p className="text-dark-foreground/60 text-sm">
              © 2024 Prima-Solution Development and Construction Corp.
            </p>
            <p className="text-dark-foreground/60 text-sm mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
