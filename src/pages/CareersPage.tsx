import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
              Join Prima Solution
            </h1>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Opportunities and hiring updates will be posted here.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-sm">
              <p className="text-large font-bold uppercase tracking-[0.24em] text-gold">
                Hiring Post
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-charcoal">
                NOW HIRING
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Job openings, role details, and application instructions will be
                added soon.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
