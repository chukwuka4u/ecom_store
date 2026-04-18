import AuthForm from "@/components/auth-forms";
import Footer from "@/components/footer";
import MainContentArea from "@/components/main-content-area";
import SideEditorialImage from "@/components/side-editorial-image";
import TopNavigation from "@/components/top-navigation";

export default function Signin() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("submitted")
  }
  
  return (
    <>
      <div className="select-none bg-background text-on-surface font-body antialiased min-h-screen flex flex-col relative z-0">
        <TopNavigation />

        {/* Main Content Area*/}
        <MainContentArea>
          
          {/* Editorial Side Panel (Hidden on Mobile, Visible on Desktop) */}
          <SideEditorialImage 
            url="https://lh3.googleusercontent.com/aida-public/AB6AXuBVlo6Ddd1EYIAZDW3JM08c6v9E23fGsRYrcniSRvGzpDWH0zANVKUD5YIfQWpMWS07oqt1jXoIBYVF_wAx4yEln2Zpqy04yGs5YpMthnkdrL0faRohX_08skLDn_ibZCi70lN7ZgfRawBwCGxZ1qg0tnKCyBCxtagErAqw3ESbJe38SZT5LXujY5SILStJEupNDhTqpEvGvG0Nxd8X1-pRSupk0wBbePMKF19mtPxDvCRRZFHp0GkwUpXYJ-D6KTZgpaTLlt73mAE" 
            alt="Architectural detail" 
          />

          {/* Login Form Section (Mobile & Desktop) */}
        <AuthForm />
            </MainContentArea>

        {/* Contextual Global Footer (Desktop optimized, collapses on Mobile) */}
        <Footer />
      </div>
    </>
  )
}