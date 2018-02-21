import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";
import media from "../utils/media";
import Icon from "../Icon";

const Link = styled.a`
  padding-left: 14px;
  padding-right: 14px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 125px;
  height: 42px;
  text-decoration: none;
  color: #fff;
  background-color: #1e292d;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:not(:last-child) {
    margin-bottom: 8px;

    ${media.md`
      margin-right: 10px;
      margin-bottom: 0;
    `};
  }

  ${media.md`
    margin-right: 0;
    margin-left: 0;
  `};

  ${media.xl`
    &:hover {
      background-color: rgba(30, 41, 45, 0.8);
    }
  `};
`;

const IconWrap = styled.div`
  margin-right: 10px;
  width: 21px;
  height: 21px;
`;

const WrapText = styled.div``;

const Download = styled.span`
  margin-bottom: 1px;
  display: block;
  font-size: 9px;
  color: #fff;
`;

const Attach = styled.span`
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
`;

const Attachment = props => (
  <Link href={props.href}>
    <IconWrap>
      <Icon icon={props.icon} />
    </IconWrap>
    <WrapText>
      {props.download && <Download>Скачайте в</Download>}{" "}
      <Attach>{props.attach}</Attach>
    </WrapText>
  </Link>
);

Attachment.propTypes = {
  href: pt.string,
  icon: pt.string,
  download: pt.bool,
  attach: pt.string
};

Attachment.defaultProps = {
  href: "#"
};

export default Attachment;
