import React from 'react';
import Nav from './Nav';
import { list } from './index.mock';
import { Menu } from './styled';

export default () => (
  <Menu>
    {list.map(nav => (
      <Nav key={nav.id} title={nav.title} showMore={nav.showMore} list={nav.list} />
    ))}
  </Menu>
);
