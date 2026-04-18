import "@/index.css";
export const FormField = ({ label, type, name, value, placeholder, onChange, showPassword, setShowPassword }: { label: string; type: string; name: string; value: string; placeholder?: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; showPassword?: boolean; setShowPassword?: (show: boolean) => void }) => {
    if (label.toLowerCase() === 'password') {
         <div className="relative group">
                  <div className="flex justify-between items-end mb-2">
                    <label 
                      htmlFor="password" 
                      className="font-label block text-[10px] uppercase tracking-[0.2em] text-tertiary"
                    >
                      Password
                    </label>
                    {/* <a 
                      href="#" 
                      className="lg:hidden font-label text-[9px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    >
                      Forgot?
                    </a> */}
                  </div>
                  <div className="relative">
                    <input 
                        id="password"
                        type="password"
                        placeholder={placeholder || 'Enter your password'} 
                        className="font-label w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-sm text-primary transition-all duration-300 placeholder:text-outline/40" 
                        />
                        <button 
                      type="button"
                      onClick={() => setShowPassword!(!showPassword)}
                      className="absolute right-0 top-3 text-[#444748]/50 hover:text-[#1e1e1e]"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {showPassword ? 'visibility' : 'visibility_off'}
                      </span>
                    </button>
                    </div>
                </div>
    }
    return (
        <div className="relative group">
                  <label 
                    htmlFor={name} 
                    className="font-label block text-[10px] uppercase tracking-[0.2em] text-tertiary text-start"
                  >
                    {label}
                  </label>
                  <input 
                    id={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} 
                    className="font-label w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-sm text-primary transition-all duration-300 placeholder:text-outline/40" 
                  />
        </div>
    );
};