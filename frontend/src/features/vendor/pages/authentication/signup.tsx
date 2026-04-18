import Footer from "@/components/footer";
import { FormField } from "@/components/form-field";
import { useState } from "react";

export default function Signup() {

  const [forlgata, setForlgata] = useState({
    brandName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForlgata((prev : any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Form submitted:', forlgata);
  };
  
  return (
    <div className="select-none bg-background text-on-surface font-body antialiased min-h-screen flex flex-col relative z-0">
        {/* Visual Anchor Image (Mobile Only) */}
        <div className="lg:hidden fixed bottom-0 right-0 -z-10 w-1/3 h-64 opacity-10 grayscale pointer-events-none">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHMoEj8YbiyMBTWEE4wCt-umB2Hh7KPNn4-vgoYS9Jcu_nI9bJhZnEuphjw9BP6-3w9CGmz9i4DDOAGChJ00zm7IVI34pqZiseA2hFK0HUqFrvKZbzucI6pMr944ns5nzzzw7iRyJTe3XSUtxYv4rUAKewEdr2VEaAEu9We-NK6iFVVZpgP0_Y_PS2lfALPmh3GSF8UYlrefINnKVEqTVoMePlg_0qFV6hM1oSLZciRBl3u09GIOAZfb2KzA-E9-U5BxZc24TOyj0')" }}
          />
        </div>

      <main className="flex-grow flex flex-col lg:flex-row min-h-screen">
        {/* Visual Anchor Section - Desktop Only */}

        {/* Left Side: Editorial Context (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:block lg:col-span-5 h-[700px] bg-[#eeeeee] overflow-hidden relative group">
            <img 
              alt="Minimalist luxury fashion" 
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105" 
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuCl8JUxIhZUPLgt9orn3pNUCXuFZTrVCizLO2KWDV-MlzDqq439aW_ER8BcHsRBo5gUH2Y2tqzuCkEJrziTR1PZC9RD_Pf2JhHQOdnncSeRnu7vdgaAUsGHUdUb1YqrWnkf3MrRrgb1m1odFkEEnAqeSdK4jd2zOewA1MY0SsRDLpIiXR60F0sGw-tahX6SmoPLBWZXbOJhym7VYuBc_JNu3Bg8lHYQ9lueNecFlXMP_1sYnFCsOGLRbSNUyE6QE3ZinJ93Jm2J9E4'
            />
            <div className="absolute bottom-12 left-0 w-full flex justify-center">
               <span className="font-serif italic text-2xl rotate-90 text-[#534521] whitespace-nowrap opacity-50">
                Est. 2026
              </span>
            </div>
          </div>

          {/* Form Section - Full width on Mobile, 7/12 on Desktop */}
        <section className="w-full lg:w-7/12 flex items-center justify-center p-8 pt-32 lg:p-24 bg-[#f9f9f9]">
          <div className="w-full max-w-lg">

            {/* Mobile Hero Section */}
            <div className="mb-16">
              <h1 className="font-serif text-[3.5rem] leading-[1.1] tracking-tight text-[#1e1e1e] font-normal mb-4">
                Curate your <span className="italic">legacy</span>.
              </h1>
              <p className="font-sans text-[#444748] uppercase tracking-[0.2em] text-[10px] max-w-[280px] leading-relaxed lg:max-w-[100%]">
                Join an exclusive community of artisans and curators defining the new standard of minimalist luxury.
              </p>
            </div>

            

            {/* Combined Form */}
            <form onSubmit={handleSubmit} className="space-y-10">
          
              <FormField 
                label="Brand Name"
                type="text"
                name="brandName"
                value={forlgata.brandName}
                onChange={handleInputChange}
                placeholder="THE ARTISAN CO."

              />

              <FormField
                label="Email"
                type="email"
                name="email"
                value={forlgata.email}
                onChange={handleInputChange}
                placeholder="PARTNER@ATELIER.COM"
              />


              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <FormField
                  label="Password"
                  type="password"
                  name="password"
                  value={forlgata.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                />

                <FormField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={forlgata.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  className="w-full bg-[#333333] text-white py-5 lg:py-6 font-sans font-medium lg:font-bold text-[12px] tracking-[0.3em] uppercase active:scale-[0.98] hover:bg-[#1e1e1e] transition-all duration-300"
                >
                  JOIN AS SELLER
                </button>
                
                <div className="mt-6 lg:mt-8 flex flex-col items-center space-y-4">
                  <p className="text-center font-sans text-[10px] text-[#444748] uppercase tracking-widest leading-relaxed">
                    By joining, you agree to our <a className="text-[#1e1e1e] underline lg:no-underline lg:border-b lg:border-[#1e1e1e]" href="#">Terms of Service</a> & <a className="text-[#1e1e1e] underline lg:no-underline lg:border-b lg:border-[#1e1e1e]" href="#">Privacy Policy</a>
                  </p>
                  
                  {/* Desktop Auth Switcher (Moved inline for mobile context) */}
                  <p className="text-[10px] uppercase tracking-widest text-[#444748] pt-2">
                    Already part of the collective? 
                    <a className="text-[#1e1e1e] font-bold border-b border-[#1e1e1e] ml-2" href="#">Sign In</a>
                  </p>
                </div>
              </div>
            </form>

             {/* Mobile-Only Visual Element */}
            <section className="mt-20 -mx-8 relative overflow-hidden h-[300px] lg:hidden">
              <div className="absolute inset-0 bg-[#f3f3f3]"></div>
              <img 
                className="w-[85%] h-full object-cover grayscale opacity-80 ml-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJDb_m6H-PXyrUZcZw4SqF5nFnaY2EbjdIM5NBEg2iPpxz1sfFCj10dOO86p1lWzR6PMUM9IPHAWu5Mlsms1KqZ188uHfnakXGEgnX5UOV2C_B1nxkvWJ-3A047AceIm4uIqF1556psISOq1DVlrYMMf_HF-TvI4gT4-pG4-dELuaRL-rOs49P2xeyYoak5scyAUUHNYwYizv8XBZzVSl_eBbRrdLIfPUlCgq8iKJ7JKk7MzOr0EgHuNLk8LjzDjYoAG1O0vONPhw" 
                alt="Boutique interior"
              />
              <div className="absolute bottom-10 left-8 z-10 bg-white p-8 max-w-[200px] shadow-sm">
                <p className="font-serif italic text-xl text-[#1e1e1e] leading-tight">The art of presence.</p>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer - Shared and Responsive */}
      <Footer />
    </div>
  )
}