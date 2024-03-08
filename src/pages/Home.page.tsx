import { SiteWrapper } from '@/components/SiteWrapper/SiteWrapper';
import { Hero } from '@/components/Hero/Hero';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { useNavbar } from '@/hooks/useNavbar';

export function HomePage() {
  const { handler, ref } = useNavbar();

  return (
    <>
      <Header navHandler={handler} />
      <SiteWrapper>
        <Hero navRef={ref.home} />
        <AboutMe navRef={ref.about} />
        <Portfolio navRef={ref.projects} />
        <ContactMe navRef={ref.contact} />
      </SiteWrapper>
      <Footer />
    </>
  );
}
