import { Briefcase, Mail, MapPin, DoorOpen, FacebookIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const positions = [
  {
    title: "Senior CAD Operator",
    qualifications: [
      "Bachelor's degree or Diploma in Civil Engineering, Architecture, Drafting Technology or a related field.",
      "At least 3-5 years of experience in CAD drafting or detailing, preferably in telecommunications, structural, or civil projects",
      "Experience in drafting telecom towers, rooftop sites, poles, foundations, and related structures is an advantage.",
      "Good understanding of engineering drawings and CAD drafting standards.",
    ],
  },
  {
    title: "Electrician",
    qualifications: [
      "1 Year Experience as Electrician",
      "With Valid NC2 Certificate",
      "With Complete Requirements",
      "Must be atleast Highschool Graduate",
      "Willing to be assigned at Luzon Area",
    ],
  },
  {
    title: "Site Engineer",
    qualifications: [
      "1-3 years of experience as a Site Engineer or Project Engineer",
      "Must be a Registered Civil Engineer",
      "Experience in telecommunication tower projects is an advantage",
      "Willing to travel and conduct regular site visits Cebu and Visayas Area Deployment"
    ],
  },
  {
    title: "Accounting Supervisor",
    qualifications: [
      "Graduate of Bachelors in Accounting, Finance, Financial Course",
      "At least 2-4 years experience in accounting/finance (construction industry preferred)",
      "Strong knowledge of Philippine taxation, especially BIR compliance",
      "Prepare and maintain accurate financial statements (Balance Sheet, Income Statement, Cash Flow)",
      "Prepare and file VAT, withholding taxes, income tax returns, and other statutory reports"
    ],
  },
  {
    title: "Project Coordinator",
    qualifications: [
      "Bachelor's Degree in Civil Engineering,Construction Management",
      "Minimum of 2-5 years of experience in project coordination, telecommunications, or construction projects",
      "Strong understanding of project management principles and construction processes.",
      "Ability to manage multiple projects and priorities simultaneously. Proficient in Excel (price comparison, tracking, reporting)",
      "Excellent organizational, communication, and problem-solving skills.",
    ],
  },
  {
    title: "Procurement Engineer",
    qualifications: [
      "Bachelor's Degree in Civil Engineering",
      "At least 2-5 years experience in procurement and/or logistics (construction preferred)",
      "Strong background in canvassing, negotiation, and supplier sourcing",
      "Deep understanding of construction materials and logistics flow",
      "Proficient in Excel (price comparison, tracking, reporting)",
      "With established network of multiple suppliers and transport providers is an advantage Skills & Competencies",
    ],
  },
  {
    title: "QA/Safety Engineer",
    qualifications: [
      "Minimum 1-3 years experience in QA/QC, HSE, or construction monitoring",
      "Licensed Engineer is an advantage",
      "Experience in telecommunications or tower construction is an advantage",
      "Knowledgable in construction quality standards and safety regulations",
      "Willing to conduct field/site inspections and travel when necessary",
      "With COSH Certificate & Safety Officer 3"
    ],
  },
  {
    title: "Site Acquisition Officer",
    qualifications: [
      "Bachelor’s degree in Engineering, Real Estate, Business, or any related field",
      "At least 1–3 years experience in telecom site acquisition or related field ",
      "Knowledgeable in telecom infrastructure development process",
      "Familiar with local permitting procedures and regulatory requirements in the Philippines",
      "Experience in technical site survey and report preparation",
      "Strong negotiation and communication skills",
      "Ability to work independently and manage multiple sites simultaneously",
      "Willing to travel extensively to project locations",
    ],
  },
  {
    title: "Telecom Riggers",
    qualifications: [
      "1–3 years of experience as a Riggers",
      "Experience in telecommunication tower projects is an advantage",
      "With Valid WAH Certificate",
      "Fit to Work with Heights",
      "Willing to travel to Nationwide",
      "Can work flexible schedules, overtime, weekends, and shifting assignments when required"
    ],
  },
  {
    title: "Project Manager",
    qualifications: [
      "3-5 years of experience as a Project Manager or Project Engineer",
      "Must be a Registered Civil Engineer",
      "Experience in telecommunication tower projects is an advantage",
      "Willing to travel and conduct regular site visits"
    ],
  },
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
                {positions.map(({ title, qualifications }, index) => (
                  <div
                    key={title}
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
                        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-sm font-bold text-charcoal/80">Qualifications:</p>
                      <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                        {qualifications.map((qualification) => (
                          <li key={qualification}>{qualification}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-dark">
                  <DoorOpen className="h-4 w-4" />
                  Open for Walk-in Applicants
                </span>

                <h3 className="mt-5 text-xl font-bold uppercase tracking-wide text-charcoal md:text-2xl">
                  Send Your Resume
                </h3>

                <div className="mt-5 grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-start sm:gap-x-12">
                  <a
                    href="mailto:marklester.pradas.prima@gmail.com"
                    className="group flex items-center gap-3 text-charcoal transition hover:text-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white transition group-hover:bg-gold group-hover:text-white">
                      <Mail className="h-5 w-5 text-gold transition group-hover:text-white" />
                    </span>
                    <span className="text-sm font-medium sm:text-base">
                      marklester.pradas.prima@gmail.com
                    </span>
                  </a>

                  <a
                    href="mailto:hrad.prima@gmail.com"
                    className="group flex items-center gap-3 text-charcoal transition hover:text-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white transition group-hover:bg-gold group-hover:text-white">
                      <Mail className="h-5 w-5 text-gold transition group-hover:text-white" />
                    </span>
                    <span className="text-sm font-medium sm:text-base">
                      hrad.prima@gmail.com
                    </span>
                  </a>

                  <div className="flex items-center gap-3 text-charcoal">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white">
                      <MapPin className="h-5 w-5 text-gold" />
                    </span>
                    <span className="text-left text-sm font-medium sm:text-base">
                      2nd Floor Lemon Square Building Munoz, Quezon City
                    </span>
                  </div>

                  <a
                    href="https://www.facebook.com/profile.php?id=61567403392989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-charcoal transition hover:text-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white transition group-hover:bg-gold group-hover:text-white">
                      <FacebookIcon className="h-5 w-5 text-gold transition group-hover:text-white" />
                    </span>
                    <span className="text-left text-sm font-medium sm:text-base">
                      Careers at Prima Solution Development and Construction Corp.
                    </span>
                  </a>
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
