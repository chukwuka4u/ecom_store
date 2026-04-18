export default function TopNavigation() {
    return (
        <nav className="bg-[#f9f9f9]/80 backdrop-blur-lg fixed top-0 w-full z-50">
        <div className="flex justify-center lg:justify-between items-center px-8 py-3 lg:py-4 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-serif italic text-[#1e1e1e] tracking-tight">ATELIER</div>
          {/* Desktop-only support link */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#444748] hover:text-[#1e1e1e] transition-colors">
              Support
            </a>
          </div>
        </div>
      </nav>
    )
};