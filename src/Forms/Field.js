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
        <ChangeCityArrows>
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
  onClick: pt.func,
};

Field.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  destination: '',
  height: '',
  reverse: false,
  value: undefined,
  placeholder: '',
};

export default Field;
