import { useEffect, useState } from "react";

export default function VerifyEmail() {
    const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(59);
//   const inputRefs = useRef([]);

  // Handle OTP Input focus shift
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (element : any, index : any) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  // Simple Countdown Timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  
    return(
        <div className="bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased min-h-screen flex flex-col selection:bg-tertiary-fixed">
      {/* Decorative Border detail (Visible only on Desktop) */}
        <div className="fixed inset-0 border-[16px] border-[#f9f9f9] pointer-events-none z-40 hidden md:block"></div>
        {/* Header - Adapts from minimal mobile to brand-heavy desktop */}

      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Floating Background Initial (Mobile Visual Anchor) */}
        <div className="fixed bottom-0 right-0 -z-10 opacity-5 pointer-events-none md:hidden">
          <h2 className="font-serif text-[12rem] italic leading-none select-none">A</h2>
        </div>

        <div className="w-full max-w-xl flex flex-col items-center">
          {/* Hero Section */}
          <section className="mb-12 md:mb-16 text-center md:text-left md:w-full">
            <h1 className="font-serif text-5xl md:text-6xl text-primary font-light mb-6 tracking-tight leading-tight">
              Verification
            </h1>
            <p className="font-sans text-[#444748] text-[11px] uppercase tracking-widest leading-relaxed">
              Please enter the 4-digit code sent to your email
            </p>
          </section>

          {/* Verification Form */}
          <form className="w-full flex flex-col items-center">
            {/* Input Container */}
            <div className="flex gap-4 md:gap-8 mb-16">
              {otp.map((data, index) => (
                <div 
                  key={index} 
                  className="w-16 h-20 md:w-20 md:h-24 bg-[#eeeeee] border-b border-[#c4c7c7] focus-within:border-[#1e1e1e] transition-all duration-300"
                >
                  <input
                    type="text"
                    maxLength={1}
                    className="w-full h-full bg-transparent border-none text-center text-3xl font-serif font-light text-[#1e1e1e] focus:ring-0 outline-none"
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onFocus={e => e.target.select()}
                    placeholder="—"
                  />
                </div>
              ))}
            </div>

            {/* Primary Action */}
            <button 
              type="submit"
              className="w-full max-w-xs py-5 bg-[#333333] text-white font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] active:scale-[0.98] hover:bg-[#1e1e1e] transition-all duration-300"
            >
              VERIFY
            </button>

            {/* Meta Info / Resend */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="text-[10px] font-sans text-[#444748] uppercase tracking-widest md:hidden">
                Didn't receive the code?
              </p>
              <button 
                type="button"
                disabled={timer > 0}
                className="text-[11px] font-semibold text-[#bdaa7d] uppercase tracking-widest hover:text-[#1e1e1e] transition-colors duration-300 underline underline-offset-8 decoration-[#f6e0b0] disabled:no-underline disabled:text-[#444748]/60"
              >
                {timer > 0 ? `Resend code in 00:${timer.toString().padStart(2, '0')}` : 'RESEND EMAIL'}
              </button>
              <div className="h-[1px] w-12 bg-[#f6e0b0] hidden md:block"></div>
            </div>
          </form>

          {/* Desktop Visual Anchor: Faded Editorial Image */}
          <div className="mt-24 w-full h-48 md:h-80 relative overflow-hidden hidden md:block">
            <img 
              alt="Minimalist architectural space" 
              className="w-full h-full object-cover grayscale opacity-20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3M9_gWRyWXiM9S3jCNtO_jcetdfElj3gAdPZgr0AJp9Mog-j6JeeQIfhPYGdtELT3BbLURBDNtAA8cNGUWSMSBDLML_jVpWC4F1sugq7qaj5mRdxUAe47Ho0x6ZbAairs330Wqsm6UbF5aq9lTUy0nkBKZJ8DZswZHG0jTpHOoPAlatd2bFXKfNNtqSsx8p-wuruzCEBlvvXliQcUB5PqiHbWR-QfDaI02fr7yEclctV3-psigMCtX71TOkjGk_9tzGnEkLyUJtM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f9f9f9] to-transparent"></div>
          </div>
        </div>
      </main>
        </div>
    )
}