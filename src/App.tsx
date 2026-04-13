import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Impact from "./pages/Impact";
import SizeGuide from "./pages/SizeGuide";
import { useState, useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/impact", label: "Our Impact" },
    { path: "/size-guide", label: "Size Guide" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-[#141413] tracking-tight hover:scale-105 transition-transform duration-300">
            Gen Flow
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === link.path ? "text-[#8B9A7D]" : "text-[#5E5D59] hover:text-[#141413]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <button className="relative p-2 hover:scale-110 transition-transform duration-300 group">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">⊙</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B9A7D] text-white text-xs rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">0</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:scale-110 transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-all duration-300 hover:translate-x-2 ${
                  location.pathname === link.path ? "text-[#8B9A7D]" : "text-[#5E5D59]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Gen Flow</h3>
              <p className="text-[#B0AEA5] mb-6 max-w-md">
                Luxury streetwear at the intersection of architectural design and radical environmental responsibility. Born in London, built for the future.
              </p>
              <div className="flex gap-4">
                {["IG", "TW", "TK"].map((social) => (
                  <button key={social} className="w-10 h-10 bg-[#2A2A2D] rounded-full flex items-center justify-center text-sm font-medium hover:bg-[#8B9A7D] hover:scale-110 transition-all duration-300">
                    {social}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <div className="space-y-2">
                {["All Products", "Hoodies", "Joggers", "New Arrivals"].map((item) => (
                  <Link key={item} to="/shop" className="block text-[#B0AEA5] hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                {[
                  { label: "Our Impact", path: "/impact" },
                  { label: "Size Guide", path: "/size-guide" },
                ].map((item) => (
                  <Link key={item.label} to={item.path} className="block text-[#B0AEA5] hover:text-white transition-colors duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#2A2A2D] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#5E5D59] text-sm">© 2026 Gen Flow. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-[#5E5D59]">
              <Link to="#" className="hover:text-white transition-colors duration-300">Privacy</Link>
              <Link to="#" className="hover:text-white transition-colors duration-300">Terms</Link>
              <Link to="#" className="hover:text-white transition-colors duration-300">Shipping</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/size-guide" element={<SizeGuide />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
