import Footer from '@/components/footer';
import SideEditorialImage from '@/components/side-editorial-image';
import MainContentArea from '@/components/main-content-area';
import AuthForm from '@/components/auth-forms';
import TopNavigation from '@/components/top-navigation';

const Signin = () => {
  

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col font-sans relative z-0">
      
      {/* Top Navigation */}
      <TopNavigation />

      {/* Main Content Area */}
      <MainContentArea>

          
          {/* Visual Editorial Column (Desktop Only) */}
          <SideEditorialImage 
            url="https://lh3.googleusercontent.com/aida-public/AB6AXuBxPTbNRDgtgfFipC8znuU2n6HIeBkmqFhjMeJqETGMMmsm1Fw4bL01iwRAEr0Hk29B9ZvmGtp8TF8opBHmaC_H70SmJsa689mtWmN63O_5V61s5locunsLWQiTtvOaEN9Dy-iJ_lhfFjTZ1AJcVUgHnu7sSMwrDejaMpjVUz4v_xT_xbfgyo-GL297hotBXO3r-yFJqwyuv_ombtFhp4cyqzxrfqsqoeq4BeGIKMsB-q_Zl8D4YA6nUa6ffE6mVlB0OA4PLbkWBU4" 
            alt="Luxury boutique interior"
           />

          {/* Content / Form Column */}
          <AuthForm />
        </MainContentArea>

{/* Footer */}
      <Footer />

      {/* Mobile-only Artistic Accent Image */}
      <div className="lg:hidden fixed bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none -z-10 translate-x-1/4 translate-y-1/4">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA39Zy0p6egj8jFNBNY0R0CCPiP3CnVfYiM0iAI5nbgbhjvWKzdDgIkzoNL8-Nu2ThxrNfNhmNL5knV3IuNiEDmoEAM9iu3Olk3xoBnW1Cuao4qIcL2kPkB2IY6vT1Xtf2V4t64GH_TSdA-cSrjeuaMMBji69wkTg6oT45ngFbxF1RYSIQAnvlAJD4jDgkmokAJWqBbKuALgX5OWGyQPUC24rVZeO6-3k4aF4YF8WmuCakj1bm3bvglmWtR9dxQHrXUqSIlsfQEie0" 
          alt="Abstract architectural detail" 
          className="w-full h-full object-cover grayscale" 
        />
      </div>

    </div>
  );
};

export default Signin;