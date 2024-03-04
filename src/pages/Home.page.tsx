import { Hero } from '@/components/Hero/Hero';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { AboutMe } from '@/components/AboutMe/AboutMe';

export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Hero />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </>
  );
}
