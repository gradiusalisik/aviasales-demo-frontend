import React, { Component } from 'react';
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

const Content = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: transparent;
  transiton: background-color 0.3s;

  &:hover {
    background-color: #f1fcff;
  }
`;

export default class Checkboxes extends Component {
  static propTypes = {
    list: pt.arrayOf(pt.shape({})),
    id: pt.string,
    label: pt.string,
    checkedIds: pt.arrayOf(pt.node),
  };

  static defaultProps = {
    list: [],
    checkedIds: [],
    id: 'all',
    label: 'Все',
  };

  handleChangeFilter = id => ({ target }) => {
    this.props.handleChangeFilter(id, target);
  };

  handleChangeAllCheckbox = ({ target }) => {
    this.props.handleChangeAllCheckbox(target);
  };

  render() {
    return (
      <CheckboxesStyled>
        {!!this.props.title && <Title>{this.props.title}</Title>}
        <Content>
          <Checkbox
            id={this.props.id}
            label={this.props.label}
            checked={this.props.isAllChecked}
            onChange={this.handleChangeAllCheckbox}
          />
        </Content>
        {this.props.list.map(checkbox => (
          <Content key={checkbox.id}>
            <Checkbox
              id={checkbox.id}
              label={checkbox.label}
              price={checkbox.price}
              checked={this.props.checkedIds.includes(checkbox.id)}
              onChange={this.handleChangeFilter(checkbox.id)}
            />
          </Content>
        ))}
      </CheckboxesStyled>
    );
  }
}
