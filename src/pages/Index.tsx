import Header from '../components/Header';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <About />
        <WhyUs />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
