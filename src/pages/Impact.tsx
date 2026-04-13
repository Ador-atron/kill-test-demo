import { useEffect, useState } from "react";

const metrics = [
  { value: "100%", label: "Organic Cotton", desc: "Every garment" },
  { value: "0", label: "Carbon Footprint", desc: "Net zero by 2030" },
  { value: "22", label: "Prototypes", desc: "Per hero product" },
  { value: "14", label: "Months Development", desc: "For the perfect fit" },
];

export default function Impact() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    const el = document.getElementById("metrics");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = [100, 0, 22, 14];
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters(targets.map(t => Math.round((t * step) / steps)));
        if (step >= steps) clearInterval(timer);
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 sm:mb-6 animate-[slideUp_0.8s_ease-out]">
            Our Impact
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#B0AEA5] leading-relaxed animate-[slideUp_0.8s_ease-out_0.2s]">
            We aren't just selling clothes; we're inviting you to join a movement toward "slow streetwear."
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#141413] mb-6">
                The Mission
              </h2>
              <p className="text-lg text-[#5E5D59] leading-relaxed mb-6">
                We believe high-end style shouldn't come at the cost of the environment. That's why we only use 100% organic cotton and recycled materials for every drop. Our goal is to provide a versatile "wardrobe system" for the modern professional—minimalist essentials that are as durable as they are bold.
              </p>
              <p className="text-lg text-[#5E5D59] leading-relaxed">
                We don't chase trends; we build uniforms for the modern rebel—pieces designed in London, crafted from earth-first materials, and engineered to outlast the season. Wear it hard. Keep it forever.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#E8E6DC] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[150px] text-[#8B9A7D] opacity-50 animate-[pulse_3s_ease-in-out_infinite]">♻</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B9A7D] rounded-full opacity-80 animate-[float_5s_ease-in-out_infinite]" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#C96442] rounded-full opacity-60 animate-[float_6s_ease-in-out_infinite_1s]" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="py-24 bg-[#8B9A7D]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16">The Numbers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl md:text-6xl font-semibold text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                  {counters[i]}{metric.value.includes("%") ? "%" : ""}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{metric.label}</h3>
                <p className="text-[#E8E6DC] text-sm">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">Earth-First Materials</h2>
          <div className="space-y-6">
            {[
              { title: "Heavyweight Organic Cotton", desc: "400gsm fabric that holds its shape wash after wash. No pesticides, no synthetic fertilizers." },
              { title: "Recycled Technical Components", desc: "Water-resistant zippers and hardware made from post-consumer recycled materials." },
              { title: "Low-Impact Dyes", desc: "Garment-dyed using processes that minimize water usage and eliminate harmful chemicals." },
            ].map((material, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B9A7D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#141413] mb-2">{material.title}</h3>
                    <p className="text-[#5E5D59]">{material.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Our Promise</h2>
          <blockquote className="text-xl md:text-2xl text-[#B0AEA5] leading-relaxed mb-8">
            "The most sustainable garment is the one you never want to take off."
          </blockquote>
          <p className="text-lg text-[#87867F]">
            Every garment is hand-inspected for quality, ensuring it stays in your rotation for years, not just a season. We don't chase seasons—we build legacies.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
