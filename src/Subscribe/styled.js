import styled from "styled-components";
import mask from "./images/mask.png";
import media from "../utils/media";

// ** index.js
export const Subscribe = styled.div`
  position: relative;
  padding-top: 32px;
  margin-bottom: 60px;

  ${media.xl`
    margin-bottom: 24px;
  `} &::before {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${mask});
    width: 100%;
    height: 7px;
    content: "";
  }
`;

export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 360px;
  text-align: center;

  ${media.xl`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `};
`;

export const WrapDescription = styled.div`
  ${media.xl`
    max-width: 360px;
    text-align: left;
  `};
`;
export const WrapForm = styled.div`
  ${media.xl`
    display: flex;
    align-items: center;
  `};
`;

export const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #5c5c5c;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 22px;
  color: #5c5c5c;

  ${media.xl`
    margin-bottom: 0;
  `};
`;

// ** Socials.js

export const Socials = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.xl`
    margin-bottom: 0;
    margin-right: 16px;
  `};
`;

export const LinkTwitter = styled.a`
  position: relative;
  overflow: hidden;
  width: 36px;
  height: 36px;
  background-color: #979797;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;

  &:not(:last-child) {
    margin-right: 7px;
  }

  &:hover {
    background-color: #55acee;
    transform: scale(1.1);
  }
`;

export const LinkFacebook = LinkTwitter.extend`
  &:hover {
    background-color: #3b5998;
  }
`;
export const LinkVk = LinkTwitter.extend`
  &:hover {
    background-color: #45668e;
  }
`;
export const LinkRss = LinkTwitter.extend`
  &:hover {
    background-color: #ff9d1b;
  }
`;

const IconPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Twitter = IconPosition.extend`
  width: 19px;
  height: 16px;
`;
export const Facebook = IconPosition.extend`
  width: 11px;
  height: 20px;
`;
export const Vk = IconPosition.extend`
  width: 20px;
  height: 11px;
`;
export const Rss = IconPosition.extend`
  width: 15px;
  height: 15px;
`;

// Forms.js

export const Form = styled.form``;

export const Field = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;
`;

export const Input = styled.input`
  padding-left: 13px;
  padding-right: 140px;
  width: 100%;
  height: 34px;
  color: #4a4a4a;
  background-color: white;
  border: 1px solid #a0b0b9;
  border-right: 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  &::placeholder {
    color: #a0b0b9;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 20px;
  height: 100%;
  background-color: #ff8e41;
  color: #fff;
  border: none;
  transition: background-color 0.3s;

  ${media.xl`
    &:hover {
      background-color: #ffa353;
    }
  `};
`;
