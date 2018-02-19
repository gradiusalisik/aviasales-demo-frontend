import React from "react";
import { PropTypes as pt } from "prop-types";
import { NavContent, Title, Links, Link, LinkMore, LinkWrap } from "./styled";

const Nav = props => (
  <NavContent>
    <Title>{props.title}</Title>
    <Links>
      {props.list.map((link, key) => (
        <LinkWrap key={key}>
          <Link href={link.href || "#"}>{link.text}</Link>
        </LinkWrap>
      ))}
    </Links>
    {props.showMore && (
      <LinkMore href={props.hrefShowMore}>
        {props.showMore}&nbsp;&rarr;
      </LinkMore>
    )}
  </NavContent>
);

Nav.propTypes = {
  title: pt.string,
  list: pt.array,
  showMore: pt.string,
  hrefShowMore: pt.string
};

Nav.defaultProps = {
  hrefShowMore: "#"
};

export default Nav;
