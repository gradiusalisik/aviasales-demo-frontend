import React, { Component } from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';
import Checkboxes from './Checkboxes';
import Accordion from '../../UI/Accordion';
import Icon from '../../Icon';

const AccordionCheckboxesStyled = styled.div``;

const Reset = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 16px;
  background-color: transparent;
  border: none;
`;

const IconReset = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #dadada;
  transition: color 0.3s;

  ${Reset}:hover & {
    color: #ff6663;
  }
`;

export default class AccordionCheckboxes extends Component {
  static propTypes = {
    text: pt.string,
    open: pt.bool,
    list: pt.arrayOf(pt.shape({})),
  };

  static defaultProps = {
    text: '',
    open: false,
    list: [],
  };

  state = {
    checkboxFilter: this.props.list,
    checkedIds: [],
  };

  handleChangeFilter = (id, target) => {
    const { checked } = target;
    const { checkedIds } = this.state;

    if (checked) {
      checkedIds.push(id);
      this.setState({ checkedIds });
    } else {
      this.setState({
        checkedIds: checkedIds.filter(checkbox => checkbox !== id),
      });
    }
  };

  handleChangeAllCheckbox = (target) => {
    const { checkboxFilter } = this.state;
    const newCheckboxIds = target.checked ? checkboxFilter.map(checkbox => checkbox.id) : [];

    this.setState({
      checkedIds: newCheckboxIds,
    });
  };

  handleResetFilter = () => {
    const { checkboxFilter } = this.state;
    const newCheckboxIds = checkboxFilter.map(checkbox => checkbox.id);

    this.setState({
      checkedIds: newCheckboxIds,
    });
  };

  render() {
    const { checkboxFilter, checkedIds } = this.state;
    const isAllChecked = checkboxFilter.length === checkedIds.length;

    return (
      <AccordionCheckboxesStyled>
        <Accordion text={this.props.text} open={this.props.open} quantity={this.props.quantity}>
          <Checkboxes
            list={checkboxFilter}
            handleChangeAllCheckbox={this.handleChangeAllCheckbox}
            handleChangeFilter={this.handleChangeFilter}
            checkedIds={checkedIds}
            isAllChecked={isAllChecked}
          />
        </Accordion>
        {!isAllChecked && (
          <Reset onClick={this.handleResetFilter}>
            <IconReset icon="clear" />
          </Reset>
        )}
      </AccordionCheckboxesStyled>
    );
  }
}
