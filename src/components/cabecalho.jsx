import React from 'react';

import { Avatar, Anchor, Box, Header, Nav } from 'grommet';

const items = [
  { label: 'Sobre Mim', href: '#e' },
  { label: 'Formação', href: '#' },
  { label: 'Experiências', href: '#' },
  { label: 'REACT', href: '#' },
];

const avatarFoto =
  './Images/alexFoto.jpg';

const OnHeaderNav = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={grommet}>
  <Header pad="small">
    <Nav direction="row">
      {items.map((item) => (
        <Anchor color="white" href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
    <Box direction="row" align="center" gap="small">
      <Avatar src={avatarFoto}/>
      <Anchor color="white" href="https://github.com/ShimiSun">
        ShimiSun
      </Anchor>
    </Box>
    
  </Header>
  // </Grommet>
);

export const Cabecalhs = () => <OnHeaderNav />;
Cabecalhs.storyName = 'On Header';

export default {
  title: 'Controls/Nav/On Header',
};