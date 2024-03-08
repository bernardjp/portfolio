import { Title, Text } from '@mantine/core';
import classes from './Hero.module.css';
import { SectionWrapper } from '../SiteWrapper/SectionWrapper';

export function Hero({ navRef }: { navRef: React.MutableRefObject<HTMLDivElement> }) {
  return (
    <SectionWrapper navRef={navRef}>
      <Title className={classes.title} ta="center" mt={100}>
        Juan Pablo{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Bernard
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Software Developer
      </Text>
    </SectionWrapper>
  );
}
