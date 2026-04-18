import React, { useState, useRef } from 'react';

const Proposal = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    social: '',
    aesthetic: 'Bauhaus Minimal',
    process: ''
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTextareaInput = (e) => {
    handleInputChange(e);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposal Submitted:', formData);
  };

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-sans min-h-screen flex flex-col selection:bg-[#f6e0b0]">
      
      {/* Mobile Top Navigation (Transactional) */}
      <header className="lg:hidden w-full px-8 py-10 flex justify-between items-center bg-[#f9f9f9]">
        <a href="#" className="text-[#1a1c1c] hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined">close</span>
        </a>
        <div className="font-serif italic text-2xl tracking-tight text-[#1e1e1e]">ATELIER</div>
        <div className="w-6"></div> {/* Spacer for symmetry */}
      </header>

      {/* Desktop Top Navigation (Full) */}
      <nav className="hidden lg:flex bg-[#f9f9f9]/80 backdrop-blur-md text-[#333333] font-serif tracking-tight fixed top-0 w-full z-50 px-8 py-6 justify-between items-center">
        <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif italic text-[#1e1e1e]">ATELIER</div>
          <div className="flex space-x-12">
            <a href="#" className="text-[#444748] hover:text-[#1e1e1e] transition-colors duration-300 font-sans text-sm">Shop</a>
            <a href="#" className="text-[#444748] hover:text-[#1e1e1e] transition-colors duration-300 font-sans text-sm">Editorial</a>
            <a href="#" className="text-[#444748] hover:text-[#1e1e1e] transition-colors duration-300 font-sans text-sm">Archive</a>
          </div>
          <div className="flex items-center space-x-6">
            <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity">person</span>
            <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity">shopping_bag</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="px-8 pb-20 pt-4 lg:pt-32 lg:pb-24 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 w-full flex-grow">
        
        {/* Left Column: Visual & Contextual Anchor */}
        <div className="lg:w-5/12 flex flex-col justify-center max-w-md mx-auto lg:max-w-none">
          
          {/* Mobile Hero Copy */}
          <div className="mb-12 lg:hidden">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#444748] mb-4 block">Merchant Application</span>
            <h1 className="font-serif font-bold text-5xl leading-[1.1] text-[#1e1e1e] mb-6 tracking-tight">Become a Curator.</h1>
            <p className="text-[#444748] text-sm leading-relaxed max-w-[85%]">
              Submit your brand proposal for our editorial team to review. We value craft, intent, and aesthetic permanence.
            </p>
          </div>

          {/* Desktop Hero Copy */}
          <div className="hidden lg:block mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#444748] mb-4 block">Merchant Application</span>
            <h1 className="font-serif text-6xl xl:text-7xl leading-tight text-[#1e1e1e] tracking-tight">
              Join the <span className="italic font-serif">Atelier</span> Collective.
            </h1>
            <p className="text-[#444748] font-sans leading-relaxed max-w-md mb-12 mt-6">
              We curate a global community of artisans who value the architecture of minimalism. Submit your proposal to begin your journey as an Atelier merchant.
            </p>
          </div>

          {/* Desktop Aesthetic Image */}
          <div className="hidden lg:block aspect-[4/5] bg-[#eeeeee] overflow-hidden relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_4mEzHIOjku3_DoywbirfvjfGv7EbHcpwBLvDF8fGcz2Gh2nB4UyvyB7ngTZOGSG6dujnbki5V7dTV2kBNDIPgXPuD9P7akyTlup7UYTVJwx2rWBc8fNgfHL8pu9CuOC29UpxNnrClK4naUjzNOl3EESA1ytwtyb7YbdBd6huarjHd6PgfxykyeyZ8RCp_DUlyaM9jrso0Vs4WWELZZ6pnyMON4qVCPrs5WjIJBLHogj7YKK-fHfaYlrD8E1YC0D5qnwxhLVJKy8" 
              alt="Minimalist artisan studio" 
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:w-7/12 flex items-center justify-center">
          <div className="w-full lg:bg-[#ffffff] lg:p-16 xl:p-24 max-w-md lg:max-w-none mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-16">
              
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#6c5d36] font-medium mb-2 block">Brand Name</label>
                <input 
                  type="text" 
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-3 lg:py-4 px-0 font-serif text-lg lg:text-xl placeholder:text-[#c4c7c7] focus:ring-0 focus:border-[#1e1e1e] transition-colors" 
                  placeholder="The Maison Studio" 
                  required
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#6c5d36] font-medium mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-3 lg:py-4 px-0 font-serif text-lg lg:text-xl placeholder:text-[#c4c7c7] focus:ring-0 focus:border-[#1e1e1e] transition-colors" 
                  placeholder="contact@brand.com" 
                  required
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-[#6c5d36] font-medium mb-2 block">Social Presence</label>
                  <input 
                    type="text" 
                    name="social"
                    value={formData.social}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-3 lg:py-4 px-0 font-serif text-lg lg:text-xl placeholder:text-[#c4c7c7] focus:ring-0 focus:border-[#1e1e1e] transition-colors" 
                    placeholder="instagram.com/brand" 
                  />
                </div>
                
                {/* Desktop-only Additions (Progressively enhanced) */}
                <div className="relative group hidden lg:block">
                  <label className="block text-[10px] uppercase tracking-widest text-[#6c5d36] font-medium mb-2">Primary Aesthetic</label>
                  <select 
                    name="aesthetic"
                    value={formData.aesthetic}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-4 px-0 focus:ring-0 focus:border-[#1e1e1e] font-serif text-xl appearance-none cursor-pointer"
                  >
                    <option>Bauhaus Minimal</option>
                    <option>Wabi-Sabi</option>
                    <option>Modern Industrial</option>
                    <option>Scandinavian Clean</option>
                  </select>
                </div>
              </div>

              <div className="relative group hidden lg:block">
                <label className="block text-[10px] uppercase tracking-widest text-[#6c5d36] font-medium mb-2">Tell us about your process</label>
                <textarea 
                  ref={textareaRef}
                  name="process"
                  value={formData.process}
                  onChange={handleTextareaInput}
                  className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-4 px-0 focus:ring-0 focus:border-[#1e1e1e] placeholder:text-[#dadada] font-serif text-xl transition-all resize-none overflow-hidden" 
                  placeholder="Briefly describe your production methods..." 
                  rows={1}
                />
              </div>

              {/* Mobile-only Image Upload Element */}
              <div className="pt-4 lg:hidden">
                <label className="text-[10px] uppercase tracking-widest text-[#6c5d36] font-medium mb-4 block">Aesthetic Direction</label>
                <div className="w-full aspect-[4/5] bg-[#eeeeee] overflow-hidden group relative cursor-pointer">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_KoxAI3pPPnP3EH5lC7HnZmnQzDajF622u1AdgDSiduqtcosHsw1miJfuMuilpIuSexJrykyitxhXPcZEMYbqmIxe6vZMGXcJBRVz7w4BPrLkkBQbChPdUYqPQ8Rg1NBVfUwG1V8WAM3HFX3BPPLXmJ7ZjqwBmbNxlm523n1Bh1TWtenYtrQVOrmZ3TgAoKop3HV8rnZPSPHS-AKH_llFRxkiCwervHgZBuk3cyPRu7CleiwP2t3XUlMIvfUyPlWdP3Xw_dn444" 
                    alt="Editorial moodboard" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#f9f9f9]/90 px-6 py-4 border border-[#c4c7c7]/20 flex flex-col items-center">
                      <span className="material-symbols-outlined mb-2 text-[#1e1e1e]">upload_file</span>
                      <span className="text-[9px] uppercase tracking-widest text-[#1e1e1e]">Upload Moodboard</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-8 lg:flex lg:flex-col lg:items-start lg:gap-8">
                <button 
                  type="submit" 
                  className="w-full lg:w-auto bg-[#333333] text-white py-5 lg:px-12 text-[11px] lg:text-xs uppercase tracking-[0.25em] lg:tracking-[0.3em] font-bold hover:bg-[#1e1e1e] transition-colors active:scale-[0.98] flex items-center justify-center group"
                >
                  Submit Proposal
                  <span className="material-symbols-outlined hidden lg:inline-block ml-4 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <p className="text-[9px] lg:text-[10px] text-center lg:text-left text-[#444748] mt-6 lg:mt-0 uppercase tracking-widest leading-loose lg:max-w-sm">
                  By submitting, you agree to our <span className="lg:hidden"><br/></span>
                  <a href="#" className="underline lg:no-underline lg:border-b lg:border-[#444748] underline-offset-4 decoration-[#c4c7c7]">Partner Terms & Conditions</a>
                </p>
              </div>

            </form>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <footer className="w-full px-12 py-16 lg:py-20 flex flex-col items-center space-y-8 bg-[#eeeeee] lg:bg-[#f9f9f9] border-t border-[#c4c7c7]/20 mt-auto">
        <div className="font-serif italic text-xl text-[#1e1e1e] lg:mb-4">ATELIER</div>
        <nav className="flex flex-wrap justify-center gap-x-8 lg:gap-12 gap-y-4">
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#444748] hover:text-[#1e1e1e] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#444748] hover:text-[#1e1e1e] transition-colors">Terms of Service</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#444748] hover:text-[#1e1e1e] transition-colors hidden lg:inline-block">Shipping & Returns</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#444748] hover:text-[#1e1e1e] transition-colors">Contact</a>
        </nav>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#444748]/60 lg:text-[#444748]">
          © 2024 Atelier Minimal. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default Proposal;