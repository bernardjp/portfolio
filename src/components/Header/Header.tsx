import { Container } from '@mantine/core';
import classes from './Header.module.css';
import { Navbar, NavbarButton } from './Navbar/Navbar';
import { NavbarHandler } from '@/hooks/useNavbar';

type HeaderProps = {
  navHandler: NavbarHandler;
};

function Header(props: HeaderProps) {
  const { navHandler } = props;

  return (
    <Container component="header" fluid className={classes.wrapper} id="header">
      <Container size="lg" className={classes.container}>
        <NavbarButton onClick={() => navHandler.home()}>IN/JP</NavbarButton>
        <Navbar handler={navHandler} />
      </Container>
    </Container>
  );
}

export { Header };
