import { useState } from "react";
import { FormField } from "@/components/form-field";
import Footer from "@/components/footer";

export default function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    
    return(
        <div className="select-none bg-background text-on-surface font-body antialiased min-h-screen flex flex-col relative z-0">
        {/* Visual Anchor Image (Mobile Only) */}
        <div className="lg:hidden fixed bottom-0 right-0 -z-10 w-1/3 h-64 opacity-10 grayscale pointer-events-none">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHMoEj8YbiyMBTWEE4wCt-umB2Hh7KPNn4-vgoYS9Jcu_nI9bJhZnEuphjw9BP6-3w9CGmz9i4DDOAGChJ00zm7IVI34pqZiseA2hFK0HUqFrvKZbzucI6pMr944ns5nzzzw7iRyJTe3XSUtxYv4rUAKewEdr2VEaAEu9We-NK6iFVVZpgP0_Y_PS2lfALPmh3GSF8UYlrefINnKVEqTVoMePlg_0qFV6hM1oSLZciRBl3u09GIOAZfb2KzA-E9-U5BxZc24TOyj0')" }}
          />
        </div>
             <main className="flex-grow flex flex-col lg:flex-row min-h-screen">
        
          
          {/* Left Side: Editorial Context (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:block lg:col-span-5 h-[700px] bg-[#eeeeee] overflow-hidden relative group">
            <img 
              alt="Minimalist luxury fashion" 
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-JXw88zyq3obiVmY-KsdmtEefvP8a6BQlLnkOGm9W6jLaOIT2TyQD7HoZsgXSn_DAe0uu2OqxBqMa4QcKdZ0A5oa_MmDBS9ZQ6lloCecOSSRxDsFHEPa_eH7AyrdR2zOvWzyNOoRFrw77MRNcY_y5aWul9TcC6l4BWqUQlF6up6FiRIX58RxcvWhvNVj9JsgzVHaBRctS_VgwS0DONxMnomwDyqLYDy__LMJiY0efa_MOBAw2UongdFCqmlUWhpBQCjfoncWNlg"
            />
            <div className="absolute bottom-12 left-0 w-full flex justify-center">
               <span className="font-serif italic text-2xl rotate-90 text-[#534521] whitespace-nowrap opacity-50">
                Est. 2026
              </span>
            </div>
          </div>

          {/* Right Side: Signup Form */}
          <div className="flex-1 flex flex-col justify-center px-8 py-16 lg:p-24 bg-surface z-10">
          <div className="w-full max-w-sm mx-auto flex flex-col space-y-10 lg:space-y-12">
              
              {/* Branding Header */}
              <section className="mb-12 lg:mb-16">
                <h1 className="font-serif text-5xl lg:text-6xl leading-tight tracking-tight text-[#1e1e1e] mb-4">
                  Join the <span className="italic lg:not-italic">Collective.</span>
                </h1>
                <p className="font-sans text-sm text-[#444748] max-w-xs leading-relaxed">
                  Curated archives and premium editorial access. Define your aesthetic journey with Atelier.
                </p>
              </section>

              {/* Form Section */}
              <form className="space-y-10 lg:space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-8">

                {/* Username */}
              <FormField
                    label="Username"
                    type="text"
                    name="username"
                    value=""
                    onChange={() => {}}
              />

                {/* Email */}
                <FormField
                    label="Email"
                    type="email"
                    name="email"
                    value=""
                    onChange={() => {}}
                />

                {/* Password */}
                <FormField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value=""
                    onChange={() => {}}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />

                {/* Confirm Password (Hidden on large screens to match minimal editorial style, or kept for UX) */}
                <FormField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value=""
                    onChange={() => {}}
                />

                {/* Action CTA */}
                <div className="pt-4 lg:pt-8 flex flex-col space-y-6">
                  <button 
                    type="submit"
                    className="w-full bg-[#333333] text-white py-5 px-8 flex justify-between lg:justify-center items-center group transition-all duration-300 active:scale-95"
                  >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold lg:mr-3">SIGN UP</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  
                  <p className="text-[10px] text-[#444748] leading-loose tracking-widest uppercase text-center lg:text-left">
                    By joining, you agree to our <a href="#" className="underline underline-offset-4 text-[#1e1e1e]">Terms</a> and <a href="#" className="underline underline-offset-4 text-[#1e1e1e]">Privacy</a>.
                  </p>
                </div>
                    </div>
              </form>
            
          </div>
        </div>
      </main>
      <Footer />
        </div>
    )
}