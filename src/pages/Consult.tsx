import { Phone, Mail, MapPin, FacebookIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "LS2R 2nd Flr, Lemon Square Bldg, EDSA, Quezon City",
    href: "https://maps.app.goo.gl/bH9uyaigJJkeLEDt7",
  },
  {
    icon: Phone,
    label: "Contact Number",
    value: "+63 926 053 6612",
    href: "tel:+639260536612",
  },
  {
    icon: Mail,
    label: "Email",
    value: "primastruct.engineering@gmail.com",
    href: "mailto:primastruct.engineering@gmail.com",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Prima-Solution Development and Construction Corp.",
    href: "https://www.facebook.com/profile.php?id=61572640858240",
  },
  {
    icon: FacebookIcon,
    label: "Careers Page",
    value: "Careers at Prima Solution Development and Construction Corp.",
    href: "https://www.facebook.com/profile.php?id=61567403392989",
  },
];

const Consult = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-white p-8 shadow-sm md:p-12">
            <div className="text-center">
              <span className="text-gold text-sm font-bold uppercase tracking-[0.35em]">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl font-bold text-charcoal md:text-5xl">
                We'd love to hear from you!
              </h1>
              <p className="mt-4 text-muted-foreground mx-auto max-w-xl leading-relaxed">
                Reach out through any of the channels below and our team will get back to you.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 transition group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-5 w-5 text-gold transition group-hover:text-white" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold">
                      {label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-charcoal">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consult;
