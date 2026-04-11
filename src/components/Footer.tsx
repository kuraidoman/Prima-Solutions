import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-28 bg-white text-charcoal py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo & Tagline */}
          <div className="flex flex-col items-start text-left">
            <a href="#" className="font-poppins font-bold text-xl text-dark">
              <img src="/PrimaSolution.png" alt="PrimaSolution" className="h-16" />
            </a>
            
            <p className="text-charcoal/70 italic ml-4 mt-5">
              "Performance at its Best."
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="text-charcoal/80 text-sm">
                LS2R 2nd Flr, Lemon Square Bldg, EDSA, Quezon City
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <a
                href="tel:(02) 8294 0871"
                className="text-charcoal/80 text-sm hover:text-gold transition-colors"
              >
                (02) 8294 0871
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <a
                href="mailto:primastruct.engineering@gmail.com"
                className="text-charcoal/80 text-sm hover:text-gold transition-colors break-all"
              >
                primastruct.engineering@gmail.com
              </a>
            </div>
          </div>

          {/* Col 3: Copyright */}
          <div className="md:text-right">
            <p className="text-charcoal/60 text-sm">
              © 2024 Prima-Solution Development and Construction Corp.
            </p>
            <p className="text-charcoal/60 text-sm mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
