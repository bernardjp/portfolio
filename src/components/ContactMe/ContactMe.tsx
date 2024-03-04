import { Title, Text } from '@mantine/core';
import classes from './ContactMe.module.css';

export function ContactMe() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Contact{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Me
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Let&apos;s work together
      </Text>
    </>
  );
}
