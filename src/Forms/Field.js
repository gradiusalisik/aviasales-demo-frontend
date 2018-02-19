import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import {
  FieldWrap,
  Input,
  WrapInfoField,
  Text,
  ChangeCityArrows
} from "./styled";

const Field = props => (
  <FieldWrap height={props.height}>
    <Input
      type="text"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
    />
    {props.firstField && (
      <WrapInfoField>
        <Text>{props.text}</Text>
        <ChangeCityArrows>
          <Icon icon="arrows" />
        </ChangeCityArrows>
      </WrapInfoField>
    )}
  </FieldWrap>
);

Field.propTypes = {
  firstField: pt.bool,
  height: pt.string,
  text: pt.string,
  defaultValue: pt.string,
  placeholder: pt.string
};

export default Field;
