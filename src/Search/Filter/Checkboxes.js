import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../../UI/Checkbox';

const CheckboxesStyled = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Title = styled.h3`
  padding-left: 16px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #323333;
`;

const ContentList = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;

const Content = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: transparent;
  transiton: background-color 0.3s;

  &:hover {
    background-color: #f1fcff;
  }
`;

const Checkboxes = props => (
  <CheckboxesStyled>
    {!!props.title && <Title>{props.title}</Title>}
    <Content>
      <Checkbox
        id={props.id}
        label={props.label}
        checked={props.isAllChecked}
        onChange={props.handleChangeAllCheckbox}
      />
    </Content>
    <ContentList>
      {props.list.map(checkbox => (
        <Content key={checkbox.id}>
          <Checkbox
            id={checkbox.id}
            label={checkbox.label}
            price={checkbox.price}
            checked={props.checkedIds.includes(checkbox.id)}
            onChange={props.handleChangeFilter(checkbox.id)}
          />
        </Content>
      ))}
    </ContentList>
  </CheckboxesStyled>
);

Checkboxes.propTypes = {
  list: pt.arrayOf(pt.shape({})),
  id: pt.string,
  title: pt.string,
  label: pt.string,
  isAllChecked: pt.bool,
  checkedIds: pt.arrayOf(pt.node),
  handleChangeAllCheckbox: pt.func,
  handleChangeFilter: pt.func,
};

Checkboxes.defaultProps = {
  list: [],
  checkedIds: [],
  id: 'all',
  title: '',
  label: 'Все',
  isAllChecked: false,
  handleChangeAllCheckbox: () => {},
  handleChangeFilter: () => {},
};

export default Checkboxes;
