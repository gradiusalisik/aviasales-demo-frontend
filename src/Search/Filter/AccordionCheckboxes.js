import React from 'react';
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

const AccordionCheckboxes = props => (
  <AccordionCheckboxesStyled>
    <Accordion text={props.text} open={props.open} quantity={props.quantity}>
      <Checkboxes
        list={props.list}
        handleChangeAllCheckbox={props.handleChangeAllCheckbox}
        handleChangeFilter={props.handleChangeFilter}
        checkedIds={props.checkedIds}
        isAllChecked={props.list.length === props.checkedIds.length}
      />
    </Accordion>
    {!(props.list.length === props.checkedIds.length) && (
      <Reset onClick={props.handleResetFilter}>
        <IconReset icon="clear" />
      </Reset>
    )}
  </AccordionCheckboxesStyled>
);

AccordionCheckboxes.propTypes = {
  text: pt.string,
  open: pt.bool,
  list: pt.arrayOf(pt.shape({})),
  handleChangeAllCheckbox: pt.func,
  handleChangeFilter: pt.func,
  handleResetFilter: pt.func,
};

AccordionCheckboxes.defaultProps = {
  text: '',
  open: false,
  list: [],
  handleChangeAllCheckbox: () => {},
  handleChangeFilter: () => {},
  handleResetFilter: () => {},
};

export default AccordionCheckboxes;
