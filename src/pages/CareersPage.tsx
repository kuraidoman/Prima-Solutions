import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
  const [formData, setFormData] = useState({
    email: "",
    position: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({ email: "", position: "", message: "" });
    } catch (error) {
      console.error("Failed to send careers inquiry:", error);
      setStatus("error");
    }
  };

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
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              {/* Left Side: Quick E-mail Form */}
              <div className="bg-[#FFF1C5] rounded-[2rem] p-8 md:p-10 border border-gold-100/50">
                <h3 className="text-2xl font-bold text-charcoal text-center mb-8 uppercase tracking-wide">
                  Quick E-mail
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === "sending"}
                      required
                    />
                  </div>

                  <div className="relative">
                    <select
                      className="w-full appearance-none px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-gold outline-none transition-all cursor-pointer disabled:cursor-not-allowed"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      disabled={status === "sending"}
                      required
                    >
                      <option value="" disabled>
                        Select a position
                      </option>
                      {positions.map((position) => (
                        <option key={position} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal/50" />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your message..."
                      rows={6}
                      className="w-full px-6 py-4 rounded-3xl bg-white border-none shadow-sm focus:ring-2 focus:ring-gold outline-none resize-none transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={status === "sending"}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-7 bg-[#8C701C] hover:bg-[#d6ab2b] text-white font-bold rounded-full text-lg shadow-md transition-transform active:scale-95 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </Button>

                  {status === "success" && (
                    <p className="text-center text-sm font-medium text-green-700">
                      Application sent! We'll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-center text-sm font-medium text-red-700">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </div>

              {/* Right Side: Hiring Positions */}
              <div className="bg-white rounded-[2rem] border border-border shadow-sm p-8 md:p-10">
                <h3 className="text-2xl font-bold text-charcoal uppercase tracking-wide mb-6">
                  Hiring
                </h3>

                <div className="custom-scrollbar max-h-[560px] space-y-8 overflow-y-auto pr-2">
                  {positions.map((position, index) => (
                    <div key={position}>
                      <h4 className="text-lg font-semibold text-charcoal">
                        {index + 1}. {position}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-charcoal/80">
                        Qualifications:
                      </p>
                      <ul className="mt-1 ml-4 list-disc text-sm text-muted-foreground">
                        <li>(Placeholder here)</li>
                      </ul>
                    </div>
                  ))}
                </div>
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
