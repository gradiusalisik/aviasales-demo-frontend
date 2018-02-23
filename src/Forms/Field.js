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
  <Fields height={props.height}>
    <Input
      type="text"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    />
    {props.firstField && (
      <Info>
        <Text>{props.text}</Text>
        <ChangeCityArrows>
          <Icon icon="arrows" />
        </ChangeCityArrows>
      </Info>
    )}
  </Fields>
);

Field.propTypes = {
  firstField: pt.bool,
  height: pt.string,
  text: pt.string,
  defaultValue: pt.string,
  placeholder: pt.string
};

export default Field;
