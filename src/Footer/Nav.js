import React from 'react';
import { PropTypes as pt } from 'prop-types';
import {
  Nav as NavContent,
  Title,
  NavLinks as Content,
  Link,
  LinkMore,
  LinkContent as Links,
} from './styled';

const Nav = props => (
  <NavContent>
    <Title>{props.title}</Title>
    <Content>
      {props.list.map(link => (
        <Links key={link.id}>
          <Link href={link.href || '#'}>{link.text}</Link>
        </Links>
      ))}
    </Content>
    {props.showMore && <LinkMore href={props.hrefShowMore}>{props.showMore}&nbsp;&rarr;</LinkMore>}
  </NavContent>
);

Nav.propTypes = {
  title: pt.string,
  list: pt.arrayOf(pt.shape({})),
  showMore: pt.string,
  hrefShowMore: pt.string,
};

Nav.defaultProps = {
  hrefShowMore: '#',
  title: '',
  list: [],
  showMore: '',
};

export default Nav;
