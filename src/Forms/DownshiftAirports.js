import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Downshift from 'downshift';
import Field from './Field';
import airportsRu from '../utils/airportsRu.mock';
import Highlighter from 'react-highlight-words';

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

const City = styled(Highlighter)`
  font-size: 14px;
  overflow: hidden;
  max-width: 105px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4a4a4a;
  transition: color 0.3s;

  ${Content}:hover & {
    color: #fff;
  }
`;

const Country = styled.span`
  font-size: 14px;
  overflow: hidden;
  max-width: 105px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #a0b0b9;
  transition: color 0.3s;

  ${Content}:hover & {
    color: #fff;
  }
`;

const Comma = styled(Country)`
  color: #4a4a4a;
`;

const Text = styled.span`
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
  transition: color 0.3s;

  ${Content}:hover & {
    color: #fff;
  }
`;

const toLowerCaseCustom = name => name.toString().toLowerCase();

export default class DownshiftAirports extends Component {
  state = {
    value: '',
    destination: '',
  };

  handleChange = (selection) => {
    this.setState({
      value: selection.city,
      destination: selection.code,
    });
  };

  handleChangeInput = (event) => {
    const { value } = event.target;
    if (value === '') {
      this.setState({
        destination: '',
      });
    }
    this.setState({
      value,
    });
  };

  render() {
    console.log(this.state.destination, 'destination');
    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={i => (i !== null ? i.city : '')}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div style={{ position: 'relative' }}>
            <Field
              placeholder={this.props.placeholder}
              reverse={this.props.reverse}
              kind={this.props.kind}
              {...getInputProps({
                destination: this.state.destination,
                onChange: this.handleChangeInput,
                value: this.state.value,
              })}
            />
            {isOpen && this.state.value !== '' ? (
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
                          searchWords={[this.state.value]}
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
  }
}
