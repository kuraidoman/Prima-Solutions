import { Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const positions = [
  "Senior CAD Operator",
  "Electrician",
  "Site Engineer",
  "Accounting Supervisor",
  "Project Coordinator",
  "Procurement Engineer",
  "QA/Safety Engineer",
  "Site Acquisition Officer",
  "Telecom Riggers",
  "Project Manager",
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold text-large font-bold uppercase tracking-[0.35em]">
              Careers
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-charcoal">
              Join Prima-Solution
            </h1>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Opportunities and hiring updates will be posted here.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-charcoal md:text-3xl">
                  We're Hiring
                </h2>
                <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {positions.map((position, index) => (
                  <div
                    key={position}
                    className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                        <Briefcase className="h-5 w-5 text-gold" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gold">
                          Position {index + 1}
                        </p>
                        <h3 className="text-lg font-semibold text-charcoal">{position}</h3>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-sm font-medium text-charcoal/80">Qualifications:</p>
                      <ul className="mt-2 ml-4 list-disc text-sm text-muted-foreground">
                        <li>(Placeholder here)</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
