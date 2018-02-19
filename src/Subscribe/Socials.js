import React from "react";
import Icon from "../Icon";
import {
  Socials,
  LinkTwitter,
  Twitter,
  LinkFacebook,
  Facebook,
  LinkVk,
  Vk,
  LinkRss,
  Rss
} from "./styled";

export default () => (
  <Socials>
    <LinkTwitter href="#" target="_blank">
      <Twitter>
        <Icon icon="twitter-white" />
      </Twitter>
    </LinkTwitter>
    <LinkFacebook href="#" target="_blank">
      <Facebook>
        <Icon icon="fb-white" />
      </Facebook>
    </LinkFacebook>
    <LinkVk href="#" target="_blank">
      <Vk>
        <Icon icon="vk-white" />
      </Vk>
    </LinkVk>
    <LinkRss href="#" target="_blank">
      <Rss>
        <Icon icon="rss-white" />
      </Rss>
    </LinkRss>
  </Socials>
);
