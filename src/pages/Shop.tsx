import { useState } from "react";
import { Link } from "react-router-dom";

import EssentialHoodie from "/images/essential-hoodie-sage.png";
import UrbanJoggers from "/images/urban-joggers-charcoal.png";
import SignatureHoodie from "/images/signature-hoodie-black.png";
import ClassicJoggers from "/images/classic-joggers-stone.png";
import LimitedHoodie from "/images/limited-hoodie-terracotta.png";
import TechJoggers from "/images/tech-joggers-sage.png";

const products = [
  { id: 1, name: "Essential Hoodie", category: "hoodies", price: 185, color: "Sage", description: "400gsm Heavyweight Organic Cotton", img: EssentialHoodie },
  { id: 2, name: "Urban Joggers", category: "joggers", price: 145, color: "Charcoal", description: "Premium blend with hidden bungee", img: UrbanJoggers },
  { id: 3, name: "Signature Hoodie", category: "hoodies", price: 195, color: "Black", description: "Garment-dyed finish, triple-stitched", img: SignatureHoodie },
  { id: 4, name: "Classic Joggers", category: "joggers", price: 135, color: "Stone", description: "Tapered ankle with articulated knees", img: ClassicJoggers },
  { id: 5, name: "Limited Hoodie", category: "hoodies", price: 225, color: "Terracotta", description: "Limited edition colorway", img: LimitedHoodie },
  { id: 6, name: "Tech Joggers", category: "joggers", price: 165, color: "Sage", description: "Technical pockets with water-resistant zippers", img: TechJoggers },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = ["all", "hoodies", "joggers"];
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#141413] tracking-tight mb-3 sm:mb-4">
            Shop
          </h1>
          <p className="text-base sm:text-xl text-[#5E5D59]">Minimalist essentials built to last</p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation ${
                  activeCategory === cat
                    ? "bg-[#1A1A1A] text-white shadow-lg"
                    : "bg-[#E8E6DC] text-[#5E5D59] hover:bg-[#D8D6CC]"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] cursor-pointer ${hoveredId === product.id ? "scale-[1.03]" : ""}`}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-square bg-[#E8E6DC] relative overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#8B9A7D] to-[#C96442] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#1A1A1A] text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quick View
                  </div>
                  {hoveredId === product.id && (
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center opacity-0 animate-[slideUp_0.3s_ease-out_forwards]">
                      {["S", "M", "L", "XL"].map((size) => (
                        <button key={size} className="w-10 h-10 bg-white rounded-full text-sm font-medium hover:bg-[#8B9A7D] hover:text-white transition-all duration-200 hover:scale-110">
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#141413]">{product.name}</h3>
                    <span className="text-lg font-medium text-[#8B9A7D]">${product.price}</span>
                  </div>
                  <p className="text-[#5E5D59] text-sm mb-2">{product.description}</p>
                  <p className="text-[#87867F] text-sm">{product.color} • {product.category}</p>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#8B9A7D] origin-left transition-transform duration-500 ${hoveredId === product.id ? "scale-x-100" : "scale-x-0"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            {[
              { icon: "⟳", title: "Free Shipping", desc: "On all orders over $100" },
              { icon: "♻", title: "Sustainable", desc: "100% organic materials" },
              { icon: "⊜", title: "Easy Returns", desc: "30-day return policy" },
            ].map((feature, i) => (
              <div key={i} className="group animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#B0AEA5]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
