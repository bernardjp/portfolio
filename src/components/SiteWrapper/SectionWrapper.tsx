import { Container } from '@mantine/core';
import classes from './SiteWrapper.module.css';

type SectionProp = {
  children: React.ReactNode;
  navRef: React.MutableRefObject<HTMLDivElement>;
};

export function SectionWrapper(props: SectionProp) {
  const { navRef, children } = props;
  return (
    <Container size="lg" className={classes.sectionWrapper} ref={navRef}>
      {children}
    </Container>
  );
}
