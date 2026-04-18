export default function Footer() {
    return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 relative z-20">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-12 py-8 lg:py-12 flex flex-col-reverse lg:flex-row justify-between items-center lg:space-y-0">
          <span className="font-label mt-6 lg:mt-0 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant text-center lg:text-left">
            © 2024 ATELIER MINIMAL. ALL RIGHTS RESERVED.
          </span>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 lg:space-x-8">
            <a href="#" className="font-label text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-label text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="font-label text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
    </footer>
    )
}