import { Title, Text, Container } from '@mantine/core';
import classes from './AboutMe.module.css';

export function AboutMe() {
  return (
    <Container id="about-me" size="lg">
      <Title className={classes.title} ta="center" mt={100}>
        About{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Me
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Personal Information
      </Text>
    </Container>
  );
}
