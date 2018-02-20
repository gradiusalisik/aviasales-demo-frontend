import styled, { css } from "styled-components";
import media from "../utils/media";

export const TabsContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.tablet`
    flex-wrap: nowrap;
  `};

  ${media.desktop`
    margin-left: auto;
    margin-right: auto;
    max-width: 624px;
  `};
`;

export const Tab = styled.a`
  margin-bottom: 24px;
  display: block;
  min-width: 92px;
  text-align: center;
  color: #00ace2;
  width: 33%;

  ${media.tablet`
    width: 100%;
  `};

  ${media.desktop`
    ${props =>
      props.active ||
      css`
        cursor: pointer;

        &:hover {
          ${Logo} {
            box-shadow: 0 3px 5px 0 rgba(90, 137, 163, 0.19);
            transform: translateY(-5px);
          }

          ${Text} {
            color: #ff8b00;
          }
        }
      `}

  `};

  ${props =>
    props.active &&
    css`
      ${Logo} {
        box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
      }

      ${Text} {
        position: relative;
        display: inline-block;
        color: #5c5c5c;

        &::before {
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 1px;
          content: "";
          background-color: #00ace2;
        }
      }
    `};
`;

export const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;
  transform: translateY(0);
`;

export const LogoImage = styled.div`
  width: 22px;
  height: 22px;
`;

export const Text = styled.span`
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #00ace2;
  transition: color 0.3s;
`;
