import styled from "styled-components";
import media from "../utils/media";

export const Attachments = styled.div`
  padding-top: 24px;
  padding-left: 12px;
  padding-right: 12px;
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
    padding-left: 6px;
    padding-right: 45px;
  `};
`;

export const Container = styled.div`
  ${media.md`
    display: flex;
    align-items: center;
  `};

  ${media.xl`
    margin-left: auto;
    margin-right: auto;
    max-width: 1030px;
  `};
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  color: #fff;

  ${media.md`
    font-size: 32px;
    line-height: 40px;
    text-align: left;
  `};
`;

export const WrapRating = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.md`
    margin-bottom: 40px;
    justify-content: flex-start;
  `};
`;

export const Rating = styled.img`
  margin-right: 8px;
  width: 70px;
  height: 10px;
`;

export const Body = styled.div`
  margin-right: -12px;
  margin-left: -12px;
  display: flex;
  align-items: center;

  ${media.md`
    margin-right: 0;
    margin-left: 0;
  `};
`;

export const Phone = styled.img`
  margin-right: 15px;
  width: 162px;
  height: 213px;

  ${media.md`
    display: none;
  `};
`;

export const PhoneTablet = styled.img`
  margin-right: 18px;
  margin-top: -55px;
  display: none;
  width: 244px;
  height: 312px;
  flex: 0 0 auto;

  ${media.md`
    display: block;
  `};

  ${media.xl`
    margin-right: 80px;
  `};
`;

export const WrapAttach = styled.div`
  ${media.md`
    padding-bottom: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 20px;

    ${media.md`
      margin-bottom: 0;
      padding-right: 27px;
      margin-right: 17px;
      padding-top: 3px;
      padding-bottom: 4px;
      border-right: 1px solid #fff;
    `};
  }
`;

export const Logo = styled.div`
  margin-right: 8px;
  width: 18px;
  height: 23px;
  color: #fff;
`;

export const Text = styled.span`
  position: relative;
  font-size: 14px;
  color: #fff;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${media.xl`
    ${Link}:hover & {
      &:before{
        opacity: 1;
      }
    }
  `};
`;
