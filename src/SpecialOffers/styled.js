import styled from "styled-components";
import media from "../utils/media";
// index.js

export const Content = styled.div`
  padding-top: 16px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 24px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );

  ${media.md`
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  `};
`;

export const ContentWrap = styled.div`
  text-align: center;

  ${media.md`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  `};
`;

export const Container = styled.div`
  ${media.xl`
    margin-left: auto;
    margin-right: auto;
    max-width: 1030px;
  `};
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 28px;
  color: #fff;
`;

export const Link = styled.a`
  position: relative;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 16px;
  color: #fff;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background-color: #fff;
  }
`;

const TextSub = Link.withComponent("p");
export const SubText = TextSub.extend`
  &::before {
    display: none;
  }
`;

// Card.js

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;

    ${media.md`
      margin-bottom: 0;
      margin-right: 16px;
    `};

    ${media.xl`
      margin-right: 68px;
    `};
  }

  ${media.md`
    width: calc((100% - 32px) / 3)
  `};
`;

export const Head = styled.div`
  padding: 12px 16px;
  min-height: 63px;
  background-color: #cd2027;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  width: 65%;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;

  ${media.md`
    width: 78%;
  `};
`;

export const Logo = styled.img`
  width: 38px;
  height: 38px;
`;

export const Body = styled.div`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 208px;
  background-color: #fff;
`;

export const BodyWrap = styled.div``;

export const Wrap = styled.div`
  margin-bottom: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBrend = styled.img`
  width: 122px;
  height: 30px;

  ${media.md`
    width: 100px;
    height: 25px;
  `};
`;

export const WrapInfo = styled.div`
  padding-right: 8px;
`;

export const Price = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
`;

export const DateEnd = styled.p`
  font-size: 12px;
  color: #d93633;
`;

export const Description = styled.p`
  margin-bottom: 26px;
  font-size: 12px;
  line-height: 16px;
  color: #242424;
`;

export const DescriptionPrice = styled.span`
  margin-right: 3px;
  font-size: 12px;
  color: #5c5c5c;
`;

// CardList.js

export const List = styled.div`
  margin-bottom: 32px;

  ${media.md`
    display: flex;
  `};
`;
