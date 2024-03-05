import React from 'react';
import { Container } from '@mantine/core';
import classes from './SiteWrapper.module.css';

type Props = {
  children: React.ReactNode;
};

function SiteWrapper(props: Props) {
  return (
    <Container size="lg" className={classes.wrapper}>
      {props.children}
    </Container>
  );
}

export { SiteWrapper };
