import { useState } from "react";
import Button, { SignInWithAppleButton, SignInWithGoogleButton } from "./button";
import { FormField } from "./form-field";
import { Link } from "react-router-dom";

export default function AuthForm() {
  {/**
    
    what are the parameters
      1. handleSubmit: function to handle form submission
      2. formData: object containing form field values
      3. setFormData: function to update form field values
      4. headerContent: text to display in the header section
      5. headerTitle: text to display in the header title
      6. showForgotPassword: boolean to determine whether to show "Forgot password?" link
      7. showSocialLogins: boolean to determine whether to show social login buttons
      8. redirectText: text to display for redirecting to signup or signin
      9. linkText: text to display for the redirect link
      10. linkPath: path to redirect to for the redirect link
      11. signupRedirectPath: path to redirect to for signup
      12. signupRedirectText: text to display for signup redirect link 
    */}

    const [forlgata, setForlgata] = useState({
        email: '',
        password: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForlgata(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', forlgata);
      };
    
        return (
            <div className="flex-1 flex flex-col justify-center px-8 py-16 lg:p-24 bg-surface z-10">
          <div className="w-full max-w-sm mx-auto flex flex-col space-y-10 lg:space-y-12">
          
          {/* Header (Responsive) */}
            <header className="flex flex-col mb-2 lg:space-y-2">
              <h1 className="font-serif text-5xl lg:text-6xl leading-tight tracking-tight text-[#1e1e1e] mb-4">
                  Join the <span className="italic">Collective.</span>
                </h1>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] mt-2 text-on-surface-variant lg:text-xs">Sign in to your account</p>
            </header>


            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="space-y-8">
                
                {/* Email Field */}
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value=""
                  onChange={() => {}}
                />

                {/* Password Field */}
                <FormField
                  label="Password"
                  type="password"
                  name="password"
                  value=""
                  onChange={() => {}}
                />
              </div>

              {/* Primary Action */}
              <div className="flex flex-col space-y-4">
                <Button title="Sign in as Vendor" type="submit" />
                <a 
                  href="#" 
                  className="hidden lg:block font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors text-right"
                >
                  Forgot password?
                </a>
              </div>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4 lg:my-0">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink mx-4 font-label text-[9px] lg:text-[10px] uppercase tracking-[0.4em] lg:tracking-widest text-on-surface-variant lg:text-outline bg-surface">
                OR
              </span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>

            {/* Social Logins */}
            <SignInWithGoogleButton />
            <SignInWithAppleButton />

            {/* Mobile Footer / Redirect (Hidden on Desktop) */}
            <div className=" pt-12 text-center mt-auto lg:pt-4">
              <p className="font-label text-[10px] lg:text-xs text-on-surface-variant tracking-wider lg:tracking-wide">
                New to Atelier? 
                <Link to="/signup" className="text-primary font-semibold underline underline-offset-4">Create an Account</Link>
              </p>
            </div>
          </div>
        </div>
        )
}