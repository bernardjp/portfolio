import React from 'react';
import { Title, Text } from '@mantine/core';
import { SectionWrapper } from '../SiteWrapper/SectionWrapper';
import classes from './AboutMe.module.css';

export function AboutMe({ navRef }: { navRef: React.MutableRefObject<HTMLDivElement> }) {
  return (
    <SectionWrapper navRef={navRef}>
      <Title className={classes.title} ta="center" mt={100}>
        About{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Me
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        I’m a former Architect from Argentina walking my first steps in the Software Development
        world. Down this road I found that both of this disciplines share multiple facets: the use
        of problem-solving skills, abstract and critical thinking, and a fine balance between logic
        and creativity among other things. It&apos;s in my interest now to apply all of those skills
        to explore this new and exciting world.
      </Text>
    </SectionWrapper>
  );
}
