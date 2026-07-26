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
              Join Prima-Solution
            </h1>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Opportunities and hiring updates will be posted here.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-sm">
              <img
                src="/hiring_img.jpg"
                alt="Urgent hiring: Senior CAD Operator"
                className="mx-auto w-full max-w-xl rounded-lg border border-border"
              />
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
