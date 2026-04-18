export default function SideEditorialImage({url, alt} : {url: string, alt: string}) {
    {/* 
        what are the parameters
        1. url of the image
        2. alt text for the image
        3. optional caption text to overlay on the image (e.g. "The Seller Portal: Curation meets commerce.")
        */}
    return (
        <div className="hidden lg:block relative bg-[#eeeeee] overflow-hidden group">
            <div className="absolute inset-0 bg-[#1e1e1e]/10 z-10"></div>
            <img 
              src={url}
              alt={alt} 
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute bottom-12 left-12 z-20 text-[#ffffff]">
              <h2 className="font-serif text-4xl mb-2 tracking-tight">The Seller Portal</h2>
              <p className="font-sans text-xs uppercase tracking-[0.3em] opacity-80">Curation meets commerce.</p>
            </div>

            <div className="absolute bottom-12 left-0 w-full flex justify-center">
               <span className="font-serif italic text-2xl rotate-90 text-[#534521] whitespace-nowrap opacity-50">
                Est. 2026
              </span>
            </div>
          </div>
    )
};