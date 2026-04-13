import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const measurements = [
  { name: "Chest", xs: 34, s: 36, m: 38, l: 40, xl: 42, xxl: 44 },
  { name: "Waist", xs: 28, s: 30, m: 32, l: 34, xl: 36, xxl: 38 },
  { name: "Hips", xs: 36, s: 38, m: 40, l: 42, xl: 44, xxl: 46 },
  { name: "Inseam", xs: 30, s: 31, m: 32, l: 33, xl: 34, xxl: 35 },
];

const fitGuide = [
  { type: "True to Size", desc: "Our standard fit. Relaxed but not boxy.", icon: "◻" },
  { type: "Relaxed", desc: "Oversized silhouette with extra room throughout.", icon: "◼" },
  { type: "Slim", desc: "Clean, tapered fit for a modern look.", icon: "◻" },
];

export default function SizeGuide() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedProduct, setSelectedProduct] = useState("hoodies");

  const products = [
    { id: "hoodies", name: "Hoodies" },
    { id: "joggers", name: "Joggers" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#141413] tracking-tight mb-4">
            Size Guide
          </h1>
          <p className="text-xl text-[#5E5D59]">Find your perfect fit</p>
        </div>
      </section>

      {/* Product Selector */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  selectedProduct === product.id
                    ? "bg-[#1A1A1A] text-white shadow-lg"
                    : "bg-[#E8E6DC] text-[#5E5D59] hover:bg-[#D8D6CC]"
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Size Selector */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-semibold text-center mb-8">Select Your Size</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-16 h-16 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-110 active:scale-95 ${
                    selectedSize === size
                      ? "bg-[#8B9A7D] text-white shadow-lg scale-110"
                      : "bg-[#E8E6DC] text-[#5E5D59] hover:bg-[#D8D6CC]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            
            {/* Size Details */}
            <div className="bg-[#FAFAF8] rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-[#141413] mb-4">Your Selection: {selectedSize}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {measurements.map((m) => (
                  <div key={m.name} className="flex justify-between items-center py-3 border-b border-[#E8E6DC]">
                    <span className="text-[#5E5D59]">{m.name}</span>
                    <span className="font-semibold text-[#141413]">{m[selectedSize.toLowerCase() as keyof typeof m]} inches</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fit Recommendation */}
            <div className="text-center">
              <p className="text-[#5E5D59]">
                <span className="font-semibold text-[#8B9A7D]">Recommendation:</span> For a relaxed fit, size up. For true to size, order your usual size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Size Chart */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Size Chart</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#E8E6DC]">
                  <th className="py-4 px-4 text-left text-[#5E5D59] font-medium">Size</th>
                  <th className="py-4 px-4 text-center text-[#5E5D59] font-medium">Chest</th>
                  <th className="py-4 px-4 text-center text-[#5E5D59] font-medium">Waist</th>
                  <th className="py-4 px-4 text-center text-[#5E5D59] font-medium">Hips</th>
                  <th className="py-4 px-4 text-center text-[#5E5D59] font-medium">Inseam</th>
                </tr>
              </thead>
              <tbody>
                {measurements[0] && sizes.map((size, i) => (
                  <tr key={size} className={`border-b border-[#E8E6DC] hover:bg-[#FAFAF8] transition-colors duration-300 ${selectedSize === size ? "bg-[#8B9A7D]/10" : ""}`}>
                    <td className="py-4 px-4 font-semibold text-[#141413]">{size}</td>
                    <td className="py-4 px-4 text-center text-[#5E5D59]">{measurements[0][size.toLowerCase() as keyof typeof measurements[0]]}"</td>
                    <td className="py-4 px-4 text-center text-[#5E5D59]">{measurements[1][size.toLowerCase() as keyof typeof measurements[0]]}"</td>
                    <td className="py-4 px-4 text-center text-[#5E5D59]">{measurements[2][size.toLowerCase() as keyof typeof measurements[0]]}"</td>
                    <td className="py-4 px-4 text-center text-[#5E5D59]">{measurements[3][size.toLowerCase() as keyof typeof measurements[0]]}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fit Guide */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Fit Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fitGuide.map((fit, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{fit.icon}</div>
                <h3 className="font-semibold text-[#141413] mb-2">{fit.type}</h3>
                <p className="text-[#5E5D59] text-sm">{fit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Technical Breakdown</h2>
          <div className="space-y-6">
            {[
              { title: "Signature Motif", desc: "Includes tonal embroidery—a repeating icon that establishes our unique aesthetic voice." },
              { title: "The Foundation", desc: "Crafted from 400gsm Heavyweight Organic Cotton for a structured silhouette that holds its shape wash after wash." },
              { title: "Engineered Fit", desc: "Features articulated elbows and a tapered ankle with hidden bungee cord to provide a customizable 'stack' and unrestricted movement." },
              { title: "Durability Over Trends", desc: "Reinforced with triple-stitched seams at high-stress points and a garment-dyed finish for a rich, lived-in feel." },
              { title: "Practical Utility", desc: "Includes oversized technical pockets with water-resistant zippers for secure storage in urban environments." },
            ].map((detail, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-10 h-10 bg-[#8B9A7D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{detail.title}</h3>
                  <p className="text-[#B0AEA5]">{detail.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Care Instructions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "⟼", title: "Wash Cold", desc: "Use cold water to preserve fabric integrity and color" },
              { icon: "⊘", title: "Air Dry", desc: "Lay flat or hang dry for best results" },
              { icon: "☌", title: "No Bleach", desc: "Skip the bleach to maintain fabric quality" },
              { icon: "⊜", title: "Iron Low", desc: "If needed, iron on low heat inside out" },
            ].map((care, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{care.icon}</div>
                <h3 className="font-semibold text-[#141413] mb-2">{care.title}</h3>
                <p className="text-[#5E5D59]">{care.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
