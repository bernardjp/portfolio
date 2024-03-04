import { Title, Text } from '@mantine/core';
import classes from './Portfolio.module.css';

export function Portfolio() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        PORTFOLIO
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        These are some of my projects!
      </Text>
    </>
  );
}
