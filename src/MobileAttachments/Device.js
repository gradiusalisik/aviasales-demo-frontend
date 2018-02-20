import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import { Link, Logo, Text } from "./styled";

const Device = props => (
  <Link href={props.href}>
    <Logo>
      <Icon icon={props.icon} />
    </Logo>
    <Text>{props.text}</Text>
  </Link>
);

Device.propTypes = {
  icon: pt.string,
  text: pt.string,
  href: pt.string
};

Device.defaultProps = {
  href: "#"
};

export default Device;
