import React from 'react';
import { PropTypes as pt } from 'prop-types';
import Icon from '../Icon';
import { Fields, Input, InfoField as Info, Text, ChangeCityArrows } from './styled';

const Field = props => (
  <Fields height={props.height} onClick={props.onClick}>
    <Input
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      kind={props.kind}
      {...props}
    />
    <Info>
      {!!props.destination && <Text>{props.destination}</Text>}
      {!!props.reverse && (
        <ChangeCityArrows onClick={props.onClickReverse}>
          <Icon icon="arrows" />
        </ChangeCityArrows>
      )}
    </Info>
  </Fields>
);

Field.propTypes = {
  destination: pt.string,
  height: pt.string,
  reverse: pt.bool,
  value: pt.string,
  placeholder: pt.string,
  onChange: pt.func,
  onClickReverse: pt.func,
  onClick: pt.func,
  kind: pt.string,
};

Field.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  onClickReverse: () => {},
  destination: '',
  height: '',
  reverse: false,
  value: undefined,
  placeholder: '',
  kind: '',
};

export default Field;
