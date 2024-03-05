import { SiteWrapper } from '@/components/SiteWrapper/SiteWrapper';
import { Hero } from '@/components/Hero/Hero';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export function HomePage() {
  return (
    <>
      <Header />
      <SiteWrapper>
        <Hero />
        <AboutMe />
        <Portfolio />
        <ContactMe />
      </SiteWrapper>
      <Footer />
    </>
  );
}
