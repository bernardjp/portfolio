import { Button, Container } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarHandler } from '@/hooks/useNavbar';
import classes from './Navbar.module.css';

// IDEA: The anchor should be underlined when the corresponding section is in view.
// Implementation (?): use a viewport scanner? intersection scanner?

function NavbarButton(props: { onClick: () => void; children: React.ReactNode }) {
  const { onClick, children } = props;
  return (
    <Button component="a" className={classes.link} onClick={onClick}>
      {children}
    </Button>
  );
}

function Navbar({ handler }: { handler: NavbarHandler }) {
  return (
    <Container component="nav" className={classes.nabvar}>
      <NavbarButton onClick={() => handler.about()}>About Me</NavbarButton>
      <NavbarButton onClick={() => handler.projects()}>Projects</NavbarButton>
      <NavbarButton onClick={() => handler.contact()}>Contact Me</NavbarButton>
      <ColorSchemeToggle />
    </Container>
  );
}

export { Navbar, NavbarButton };
