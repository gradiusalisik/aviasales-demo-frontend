import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import {
  Fields,
  Input,
  InfoField as Info,
  Text,
  ChangeCityArrows
} from "./styled";

const Field = props => (
  <Fields height={props.height} onClick={props.onClick}>
    <Input
      type="text"
      defaultValue={props.defaultValue}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
    {!!props.destination && (
      <Info>
        <Text>{props.destination}</Text>
        {!!props.reverse && (
          <ChangeCityArrows>
            <Icon icon="arrows" />
          </ChangeCityArrows>
        )}
      </Info>
    )}
  </Fields>
);

Field.propTypes = {
  destination: pt.string,
  height: pt.string,
  reverse: pt.bool,
  defaultValue: pt.string,
  placeholder: pt.string,
  value: pt.string,
  onChange: pt.func,
  onClick: pt.func
};

Field.defaultProps = {
  onChange: () => {},
  onClick: () => {}
};

export default Field;
