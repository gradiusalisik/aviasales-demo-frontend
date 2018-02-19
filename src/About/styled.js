import styled from "styled-components";
import media from "../utils/media";

export const Info = styled.section`
  padding: 20px 6px;

  ${media.tablet`
    padding-bottom: 32px;
    padding-left: 8px;
    padding-right: 8px;
  `};
`;

export const Container = styled.div`
  ${media.desktop`
    margin-left: auto;
    margin-right: auto;
    max-width: 1030px;
  `};
`;

export const Content = styled.div`
  margin-bottom: 15px;

  ${media.desktop`
    margin-bottom: 24px;
  `};
`;

export const WrapTitle = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 10px;
  width: 16px;
  height: 15px;
`;

export const Title = styled.h3`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
`;

export const Link = styled.a`
  margin-left: 5px;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #00ace2;
  transition: color 0.3s;

  ${media.desktop`
    &:hover {
      color: #ff8b00;
    }
  `};
`;
