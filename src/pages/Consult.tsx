import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Consult = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just log it. We can add EmailJS later!
    console.log("Inquiry for Prima-struct:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Main Content - Added pt-32 to clear the fixed Navbar */}
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Main Grid Wrapper */}
          <div className="grid gap-12 lg:grid-cols-2 items-start bg-white rounded-[2rem] border border-border p-8 md:p-12 shadow-sm">
            
            {/* Left Side: Contact Details */}
            <div className="space-y-10">
              <div>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-charcoal">
                  Get In Touch
                </h1>
              </div>

              <div className="space-y-8">
                <section>
                  <h4 className="text-sm font-bold text-gold uppercase tracking-widest">Contact Number</h4>
                  <p className="mt-1 text-lg text-charcoal font-medium">+63 926 053 6612</p>
                </section>

                <section>
                  <h4 className="text-sm font-bold text-gold uppercase tracking-widest">Email</h4>
                  <p className="mt-1 text-lg text-charcoal font-medium">primastruct.engineering@gmail.com</p>
                </section>

                <section>
                  <h4 className="text-sm font-bold text-gold uppercase tracking-widest">Office Addresses</h4>
                  <div className="mt-2 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                    LS2R 2nd Flr, Lemon Square Bldg, EDSA, Quezon City
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Side: Quick E-mail Form */}
            <div className="bg-[#FFF1C5] rounded-[2.5rem] p-8 md:p-10 border border-gold-100/50">
              <h3 className="text-2xl font-bold text-charcoal text-center mb-8 uppercase tracking-wide">
                Quick E-mail
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={8}
                    className="w-full px-6 py-4 rounded-3xl bg-white border-none shadow-sm focus:ring-2 focus:ring-gold outline-none resize-none transition-all"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full py-7 bg-[#8C701C] hover:bg-[#d6ab2b] text-white font-bold rounded-full text-lg shadow-md transition-transform active:scale-95"
                >
                  Send
                </Button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consult;