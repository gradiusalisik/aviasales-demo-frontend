import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import { TabsContent, Tab, Logo, LogoImage, Text } from "./styled";

const Tabs = props => (
  <TabsContent>
    {props.list.map((tab, key) => (
      <Tab active={tab.active} key={key}>
        <Logo>
          <LogoImage>
            <Icon icon={tab.icon} />
          </LogoImage>
        </Logo>
        <Text>{tab.text}</Text>
      </Tab>
    ))}
  </TabsContent>
);

Tabs.propTypes = {
  list: pt.array
};

export default Tabs;
