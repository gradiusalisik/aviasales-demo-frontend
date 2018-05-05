import React from 'react';
import styled from 'styled-components';
import media from '../utils/media';
import Icon from '../Icon';

const Socials = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const Link = styled.a`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  width: 33%;
  text-decoration: none;
  color: #4a4a4a;
  transition: color 0.3s;

  &:hover {
    color: #fd8a27;
  }

  ${media.md`
    margin-right: 30px;
    width: auto;
  `};
`;

const Text = styled.span`
  margin-left: 6px;
  font-size: 12px;
  color: currentColor;
`;

const LogoVk = styled.div`
  width: 16px;
  height: 9px;
`;

const LogoFB = styled.div`
  width: 8px;
  height: 14px;
`;

const LogoInstagram = styled.div`
  width: 13px;
  height: 13px;
`;

const LogoTwitter = styled.div`
  width: 15px;
  height: 12px;
`;

const LogoViber = styled.div`
  width: 14px;
  height: 14px;
`;

export default () => (
  <Socials>
    <Link href="/">
      <LogoVk>
        <Icon icon="vk" />
      </LogoVk>
      <Text>Вконтакте</Text>
    </Link>
    <Link href="/">
      <LogoFB>
        <Icon icon="fb" />
      </LogoFB>
      <Text>Фейсбук</Text>
    </Link>
    <Link href="/">
      <LogoInstagram>
        <Icon icon="instagram" />
      </LogoInstagram>
      <Text>Инстаграм</Text>
    </Link>
    <Link href="/">
      <LogoTwitter>
        <Icon icon="twitter" />
      </LogoTwitter>
      <Text>Твиттер</Text>
    </Link>
    <Link href="/">
      <LogoViber>
        <Icon icon="viber" />
      </LogoViber>
      <Text>Вайбер</Text>
    </Link>
  </Socials>
);
