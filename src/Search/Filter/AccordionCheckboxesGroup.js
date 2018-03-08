import React, { Component } from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';
import Checkboxes from './Checkboxes';
import Accordion from '../../UI/Accordion';
import Icon from '../../Icon';
import Checkbox from '../../UI/Checkbox';

const AccordionCheckboxesStyled = styled.div`
  position: relative;
`;

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

const Info = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #323333;
`;

export default class AccordionCheckboxesGroup extends Component {
  static propTypes = {
    text: pt.string,
    open: pt.bool,
    listFirst: pt.arrayOf(pt.shape()),
    listSecond: pt.arrayOf(pt.shape()),
  };

  static defaultProps = {
    text: '',
    open: false,
    listFirst: [],
    listSecond: [],
  };

  state = {
    checkboxFilterFirst: this.props.listFirst,
    checkboxFilterSecond: this.props.listSecond,
    checkedIdsFirst: [],
    checkedIdsSecond: [],
    isAllChecked: false,
  };

  handleChangeFilter = checkedIds => (id, target) => {
    const { checked } = target;

    if (checked) {
      this.state[checkedIds].push(id);
      this.setState(state => ({ [checkedIds]: state[checkedIds] }));
    } else {
      this.setState(state => ({
        [checkedIds]: state[checkedIds].filter(checkbox => checkbox !== id),
      }));
    }
  };

  handleChangeAllCheckbox = (checkboxFilter, checkedIds) => (target) => {
    const newCheckboxIds = target.checked
      ? this.state[checkboxFilter].map(checkbox => checkbox.id)
      : [];

    this.setState({
      [checkedIds]: newCheckboxIds,
    });
  };

  handleResetFilter = () => {
    const { checkboxFilterFirst, checkboxFilterSecond } = this.state;
    const newCheckboxIdsFirst = checkboxFilterFirst.map(checkbox => checkbox.id);
    const newCheckboxIdsSecond = checkboxFilterSecond.map(checkbox => checkbox.id);

    this.setState({
      checkedIdsFirst: newCheckboxIdsFirst,
      checkedIdsSecond: newCheckboxIdsSecond,
    });
  };

  render() {
    const {
      checkboxFilterFirst,
      checkedIdsFirst,
      checkboxFilterSecond,
      checkedIdsSecond,
    } = this.state;
    const isAllCheckedFirst = checkboxFilterFirst.length === checkedIdsFirst.length;
    const isAllCheckedSecond = checkboxFilterSecond.length === checkedIdsSecond.length;

    return (
      <AccordionCheckboxesStyled>
        <Accordion text={this.props.text} open={this.props.open} quantity={this.props.quantity}>
          <Info>
            <Checkbox id="several-company" label="Несколько авиакомпаний" />
            <Description>
              Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая
              выбранную
            </Description>
          </Info>
          <Checkboxes
            list={checkboxFilterFirst}
            handleChangeAllCheckbox={this.handleChangeAllCheckbox(
              'checkboxFilterFirst',
              'checkedIdsFirst',
            )}
            id={this.props.idFirstAll}
            handleChangeFilter={this.handleChangeFilter('checkedIdsFirst')}
            checkedIds={checkedIdsFirst}
            title={this.props.titleFirst}
            isAllChecked={isAllCheckedFirst}
          />
          <Checkboxes
            list={checkboxFilterSecond}
            handleChangeAllCheckbox={this.handleChangeAllCheckbox(
              'checkboxFilterSecond',
              'checkedIdsSecond',
            )}
            id={this.props.idSecondAll}
            handleChangeFilter={this.handleChangeFilter('checkedIdsSecond')}
            checkedIds={checkedIdsSecond}
            title={this.props.titleSecond}
            isAllChecked={isAllCheckedSecond}
          />
        </Accordion>
        {(!isAllCheckedFirst || !isAllCheckedSecond) && (
          <Reset onClick={this.handleResetFilter}>
            <IconReset icon="clear" />
          </Reset>
        )}
      </AccordionCheckboxesStyled>
    );
  }
}
