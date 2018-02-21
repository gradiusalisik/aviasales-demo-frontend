import styled from "styled-components";
import media from "../utils/media";

// index.js
export const Wrapper = styled.div`
  padding-right: 6px;
  padding-top: 32px;
  padding-bottom: 24px;
  padding-left: 6px;

  ${media.md`
    padding-top: 41px;
    padding-bottom: 40px;
  `};
`;

export const Container = styled.div`
  ${media.xl`
    margin-left: auto;
    margin-right: auto;
    max-width: 1240px;
  `};
`;

export const Line = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
  width: 100%;
  background-color: #e0e6e8;
`;

export const WrapLinks = styled.div`
  margin-bottom: 16px;
  padding-right: 35px;
  display: flex;
  flex-wrap: wrap;
`;

export const LinkSearch = styled.a`
  display: block;
  font-size: 12px;
  color: #5b5b5c;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s;

  ${media.md`
    text-align: left;
  `};

  ${media.xl`
    &:hover {
      color: #FD8A27;
    }
  `};
`;

const Description = LinkSearch.withComponent("span");

export const Copyright = Description.extend`
  ${media.xl`
    text-align: right;
  `};
`;

export const Bottom = styled.div`
  ${media.xl`
    display: flex;
    justify-content: space-between;
  `};
`;

export const Wrap = styled.div`
  ${media.xl`
    flex-direction: column;
    justify-content: space-between;

    &:last-child {
      display: flex;
    }
  `};
`;

export const WrapAttach = styled.div`
  margin-bottom: 24px;
  padding-top: 16px;

  ${media.md`
    display: flex;
    align-items: center;
  `};

  ${media.xl`
    padding-top: 0;
  `};
`;

// Nav.js

export const NavContent = styled.nav`
  width: 47%;
  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 27px;

    ${media.md`
      margin-bottom: 15px;
    `};
  }

  ${media.md`
    width: 25%;
  `};

  ${media.xl`
    width: 100%;
  `};
`;

export const Title = styled.h3`
  margin-bottom: 13px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #4a4a4a;

  ${media.md`
    margin-bottom: 17px;
  `};
`;

export const Links = styled.ul`
  margin-bottom: 4px;
  font-size: 0;
`;

export const LinkWrap = styled.li``;

export const Link = styled.a`
  padding-top: 8px;
  padding-bottom: 8px;
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #5b5b5c;
  transition: color 0.3s;

  ${media.xl`
    &:hover {
      color: #FD8A27;
    }
  `};
`;

export const LinkMore = Link.extend`
  display: block;
  color: #4a4a4a;
`;

// *** index.js ****
export const LinkInfo = Link.extend`
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 8px;
`;
// *** end index.js

// Menu.js

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.md`
    justify-content: flex-start;
  `};

  ${media.xl`
    justify-content: space-between;
    flex-wrap: nowrap;
  `};
`;
