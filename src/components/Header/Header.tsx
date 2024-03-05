import { Container } from '@mantine/core';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

function Header() {
  return (
    <Container fluid className={classes.wrapper} id="header">
      <Container size="lg" className={classes.container}>
        <a href="#hero">IN/JP</a>
        <Container
          styles={{ root: { display: 'flex', alignItems: 'center', margin: 0, padding: 0 } }}
        >
          <a href="#about-me">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact-me">Cntact Me</a>
          <ColorSchemeToggle />
        </Container>
      </Container>
    </Container>
  );
}

export { Header };
