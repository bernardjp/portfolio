import { Container } from '@mantine/core';
import classes from './Footer.module.css';

function Footer() {
  return (
    <Container fluid className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Made by{' '}
        <a href="https://github.com/bernardjp/" target="_blank" rel="noreferrer">
          JP Bernard
        </a>{' '}
        with hard work.
      </Container>
    </Container>
  );
}

export { Footer };
