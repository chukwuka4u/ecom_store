export default function Button({ title, type = "button" }: { title: string; type?: "button" | "submit" | "reset" }) {
    return (
        <button 
                  type={type} 
                  className="flex items-center justify-center space-x-3 w-full py-4 bg-[#1e1e1e] text-[#ffffff] hover:opacity-90 transition-opacity active:scale-[0.98]"
                >
                  <span>{title}</span>
                </button>
    )
}

export function SignInWithGoogleButton() {
  return (
    <button type="button" className="flex items-center justify-center space-x-3 w-full py-4 border border-[#c4c7c7]/40 hover:bg-[#f3f3f3] transition-colors active:scale-[0.98]">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
      </svg>
      <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#1e1e1e]">Sign in with Google</span>
    </button>
  );
}

export function SignInWithAppleButton() {
  return (
    <button type="button" className="flex items-center justify-center space-x-3 w-full py-4 bg-[#1e1e1e] text-[#ffffff] hover:opacity-90 transition-opacity active:scale-[0.98]">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 170 170">
        <path d="M150.37,130.25c-2.45,5.66-5.35,10.87-8.71,15.66c-8.58,12.27-18,24.41-31.91,24.41c-14.27,0-18.41-8.57-34.62-8.57 c-16.21,0-21.2,8.32-34.37,8.57c-13.43,0.25-24.16-12.27-32.99-24.91c-18.06-25.86-31.91-72.93-13.17-105.35 c9.31-16.1,25.92-26.21,44.11-26.46c13.68-0.25,26.6,9.15,35.01,9.15c8.41,0,24.31-11.41,40.61-9.72 c6.82,0.28,26.01,2.71,38.25,20.61c-0.99,0.61-22.84,13.31-22.59,39.63c0.25,31.7,27.85,42.54,28.36,42.79 C158.33,115.35,154.21,121.36,150.37,130.25z M119.11,32.74c-7.14,8.61-19.06,14.65-30.27,13.91 c-1.54-11.69,3.61-23.77,10.74-32.38c7.14-8.61,19.31-14.89,29.74-14.27C130.86,12.23,126.25,24.12,119.11,32.74z"></path>
      </svg>
      <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em]">Sign in with Apple</span>
    </button>
  );
}