import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled, { css } from 'styled-components';
import Downshift from 'downshift';
import Highlighter from 'react-highlight-words';
import Field from './Field';
import airportsRu from '../utils/airportsRu.mock';

const ChoiceAirports = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const City = styled(Highlighter)`
  font-size: 14px;
  overflow: hidden;
  max-width: 105px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4a4a4a;
  transition: color 0.3s;
`;

const Country = styled.span`
  font-size: 14px;
  overflow: hidden;
  max-width: 105px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #a0b0b9;
  transition: color 0.3s;
`;

const Comma = styled(Country)`
  color: #4a4a4a;
`;

const Text = styled.span`
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
  transition: color 0.3s;
`;

const Content = styled.div`
  padding: 15px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #20a6cb;

      ${City},
      ${Country},
      ${Comma},
      ${Text} {
        color: #fff;
      }
  }

  &:nth-child(even) {
    background-color: #f4f4f4;

    &:hover {
      background-color: #20a6cb;
    }

    ${props =>
    props.select &&
      css`
      background-color: #20a6cb;

      ${City},
      ${Country},
      ${Comma},
      ${Text} {
        color: #fff;
      }
    `};
  }

  ${props =>
    props.select &&
    css`
    background-color: #20a6cb;

    ${City},
    ${Country},
    ${Comma},
    ${Text} {
      color: #fff;
    }
  `};
`;

const queryText = styled.span`
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const toLowerCaseCustom = name => name.toString().toLowerCase();

const DownshiftAirports = props => (
  <Downshift
    onChange={selection => props.handleSelection(props.id, selection)}
    itemToString={i => (i !== null ? i.city : '')}
    render={({
 getInputProps, getItemProps, isOpen, inputValue, highlightedIndex,
}) => (
  <div style={{ position: 'relative' }}>
    <Field
      placeholder={props.placeholder}
      reverse={props.reverse}
      kind={props.kind}
      {...getInputProps({
            destination: props.destination,
            onChange: event => props.handleChangeInput(props.id, event.target.value),
            onClickReverse: props.onClickReverse,
            value: props.value,
          })}
    />
    {isOpen && props.value !== '' ? (
      <ChoiceAirports>
        {airportsRu
              .filter(content =>
                  toLowerCaseCustom(content.city) === toLowerCaseCustom(inputValue) ||
                  toLowerCaseCustom(content.city).includes(toLowerCaseCustom(inputValue)))
              .slice(0, 6)
              .map((content, index) => (
                <Content
                  key={content.code}
                  select={highlightedIndex === index}
                  {...getItemProps({
                    item: content,
                    index,
                  })}
                >
                  <Info>
                    <City
                      searchWords={[props.value]}
                      autoEscape
                      textToHighlight={content.city}
                      highlightTag={queryText}
                    />
                    <Comma>,&nbsp;</Comma>
                    <Country>{content.country}</Country>
                  </Info>
                  <Text>{content.code}</Text>
                </Content>
              ))}
      </ChoiceAirports>
        ) : null}
  </div>
    )}
  />
);

DownshiftAirports.propTypes = {
  value: pt.string,
  placeholder: pt.string,
  id: pt.string,
  reverse: pt.bool,
  kind: pt.string,
  destination: pt.string,
  handleSelection: pt.func,
  handleChangeInput: pt.func,
  onClickReverse: pt.func,
};

DownshiftAirports.defaultProps = {
  value: '',
  placeholder: '',
  id: '',
  kind: '',
  reverse: false,
  destination: '',
  handleSelection: () => {},
  handleChangeInput: () => {},
  onClickReverse: () => {},
};

export default DownshiftAirports;
