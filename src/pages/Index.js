import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import ServiceExplainer from '../components/ServiceExplainer';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ServiceExplainer />
      <ProcessSection />
      
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;