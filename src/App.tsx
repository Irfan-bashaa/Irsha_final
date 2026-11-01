import Background from './components/ui/Background';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Services from './sections/Services';
import Domains from './sections/Domains';
import Process from './sections/Process';
import WhyIrsha from './sections/WhyIrsha';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Background />
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Domains />
        <Process />
        <WhyIrsha />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
