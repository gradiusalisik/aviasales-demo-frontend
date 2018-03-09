import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';
import Checkboxes from './Checkboxes';
import Accordion from '../../UI/Accordion';
import Icon from '../../Icon';

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

const quantityCheckedOptions = (isCheckedAll, checked, max) =>
  (isCheckedAll ? max : `${checked} / ${max}`);

const AccordionCheckboxes = (props) => {
  const isCheckedAll = props.list.length === props.checkedIds.length;
  const quantity = quantityCheckedOptions(isCheckedAll, props.checkedIds.length, props.list.length);

  return (
    <AccordionCheckboxesStyled>
      <Accordion text={props.text} open={props.open} quantity={props.isQuantity && quantity}>
        <Checkboxes
          list={props.list}
          id={props.id}
          handleChangeAllCheckbox={props.handleChangeAllCheckbox}
          handleChangeFilter={props.handleChangeFilter}
          checkedIds={props.checkedIds}
          isAllChecked={isCheckedAll}
        />
      </Accordion>
      {!isCheckedAll && (
        <Reset onClick={props.handleResetFilter}>
          <IconReset icon="clear" />
        </Reset>
      )}
    </AccordionCheckboxesStyled>
  );
};

AccordionCheckboxes.propTypes = {
  text: pt.string,
  open: pt.bool,
  isQuantity: pt.bool,
  id: pt.string,
  list: pt.arrayOf(pt.shape({})),
  checkedIds: pt.arrayOf(pt.node),
  handleChangeAllCheckbox: pt.func,
  handleChangeFilter: pt.func,
  handleResetFilter: pt.func,
};

AccordionCheckboxes.defaultProps = {
  text: '',
  open: false,
  id: '',
  list: [],
  isQuantity: false,
  checkedIds: [],
  handleChangeAllCheckbox: () => {},
  handleChangeFilter: () => {},
  handleResetFilter: () => {},
};

export default AccordionCheckboxes;
