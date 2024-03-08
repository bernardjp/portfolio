import { Title, Text } from '@mantine/core';
import classes from './ContactMe.module.css';
import { SectionWrapper } from '../SiteWrapper/SectionWrapper';

export function ContactMe({ navRef }: { navRef: React.MutableRefObject<HTMLDivElement> }) {
  return (
    <SectionWrapper navRef={navRef}>
      <Title className={classes.title} ta="center" mt={100}>
        Contact{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Me
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Let&apos;s work together
      </Text>
    </SectionWrapper>
  );
}
