import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { TabsContent, Tab, Logo, LogoImage, Text } from './styled';

const Tabs = props => (
  <TabsContent>
    {props.list.map(tab => (
      <Tab active={tab.active} key={tab.id}>
        <Logo>
          <LogoImage icon={tab.icon} />
        </Logo>
        <Text>{tab.text}</Text>
      </Tab>
    ))}
  </TabsContent>
);

Tabs.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

Tabs.defaultProps = {
  list: [],
};

export default Tabs;
