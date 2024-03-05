import { Title, Text, Container } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container id="hero" size="lg" className={classes.container}>
      <Title className={classes.title} ta="center" mt={100}>
        Juan Pablo{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Bernard
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Software Developer
      </Text>
    </Container>
  );
}
