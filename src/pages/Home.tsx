import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dropDate = new Date("2026-04-20T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = dropDate.getTime() - now.getTime();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    setLoaded(true);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#FAFAF8] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8] via-[#F5F4ED] to-[#E8E6DC] opacity-50" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8B9A7D] opacity-20 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#C96442] opacity-15 animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-[#8B9A7D] opacity-10 animate-[float_7s_ease-in-out_infinite_2s]" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[#141413] tracking-tight mb-6 animate-[slideUp_0.8s_ease-out]">
            Born in the Streets,
            <br />
            <span className="text-[#8B9A7D]">Built for the Future</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5E5D59] max-w-2xl mx-auto mb-10 animate-[slideUp_0.8s_ease-out_0.2s]">
            Luxury streetwear at the intersection of architectural design and radical environmental responsibility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slideUp_0.8s_ease-out_0.4s]">
            <button className="group px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(139,154,125,0.3)] active:scale-95">
              Explore Collection
              <span className="ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
            <button className="group px-8 py-4 bg-[#8B9A7D] text-white rounded-full text-lg font-medium hover:bg-[#7A8A6C] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(139,154,125,0.4)] active:scale-95">
              Our Story
              <span className="ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-[bounce_2s_ease-in-out_infinite]">
          <div className="w-6 h-10 rounded-full border-2 border-[#5E5D59] flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#8B9A7D] rounded-full animate-[scrollDot_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">New Drop Coming Soon</h2>
          <p className="text-[#B0AEA5] mb-12">The next chapter of sustainable streetwear</p>
          
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-20 md:w-28 h-20 md:h-28 bg-[#2A2A2D] rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-semibold mb-3 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }}>
                  {String(item.value).padStart(2, "0")}
                </div>
                <span className="text-sm text-[#B0AEA5] uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-12 group px-8 py-4 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 hover:scale-105 active:scale-95">
            Get Notified
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-square bg-[#E8E6DC] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A7D] to-[#C96442] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">⟐</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8B9A7D] rounded-full opacity-80 animate-[float_4s_ease-in-out_infinite]" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#C96442] rounded-full opacity-60 animate-[float_5s_ease-in-out_infinite_1s]" />
            </div>
            
            <div>
              <span className="text-[#8B9A7D] uppercase tracking-wider text-sm font-medium">Hero Product</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#141413] mt-3 mb-6">
                The Essential Hoodie
              </h2>
              <p className="text-[#5E5D59] text-lg mb-6">
                14 months. 22 prototypes. One obsession: to create the perfect hoodie that feels premium but moves like activewear. Crafted from 400gsm Heavyweight Organic Cotton.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "100% Heavyweight Organic Cotton",
                  "Articulated elbows for unrestricted movement",
                  "Triple-stitched seams at high-stress points",
                  "Hidden bungee cord for customizable stack",
                  "Oversized technical pockets",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-[#5E5D59]">
                    <span className="w-2 h-2 bg-[#8B9A7D] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(26,26,26,0.3)] active:scale-95">
                Shop Now
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">The Origin</h2>
          <p className="text-xl text-[#B0AEA5] leading-relaxed mb-8">
            Gen Flow started in a small studio in London with a simple observation: luxury fashion was becoming too fast, and streetwear was losing its soul. We wanted to create pieces that could handle the pace of the city without leaving a footprint on the planet.
          </p>
          <p className="text-lg text-[#87867F] leading-relaxed">
            We believe the most sustainable garment is the one you never want to take off. That's why every piece is hand-inspected for quality, ensuring it stays in your rotation for years, not just a season.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marcus T.", text: "Finally, a hoodie that holds its shape after months of wear. Worth every penny.", rating: 5 },
              { name: "Sarah K.", text: "The sustainability commitment is real. You can feel the quality the moment you put it on.", rating: 5 },
              { name: "James R.", text: "I bought three pieces and get compliments every time. The sage green is perfect.", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-[#C96442] text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#5E5D59] mb-6">"{testimonial.text}"</p>
                <p className="font-semibold text-[#141413]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#8B9A7D]">
        <div className="max-w-2xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join the Movement</h2>
          <p className="text-[#E8E6DC] mb-8">Get early access to new drops and exclusive content</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-6 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/30"
            />
            <button className="group px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-105 active:scale-95">
              Subscribe
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
