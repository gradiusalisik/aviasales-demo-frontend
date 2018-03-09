import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import Field from './Field';
import airportsRu from '../utils/airportsRu.mock';

// const Container = styled.div`
//   position: relative;
// `;

const ChoiceAirports = styled.div`
  position: absolute;
  top: 54px;
  left: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const Content = styled.div`
  padding: 15px 16px;
  display: flex;
  align-items: center;
  background-color: #fff;

  &:nth-child(odd) {
    background-color: #f4f4f4;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const City = styled.span`
  font-size: 14px;
  color: #4a4a4a;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Country = City.extend`
  color: #a0b0b9;
`;

const Text = styled.span`
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const items = ['москва', 'питер', 'Берлин'];

const items1 = [
  {
    city: 'Москва',
  },
  {
    city: 'Питер',
  },
  {
    city: 'Берлин',
  },
];

export default () => (
  <Downshift
    onChange={selection => alert(`You selected ${selection}`)}
    render={({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div style={{ position: 'relative' }}>
        <Field placeholder="Город вылета" reverse {...getInputProps()} />
        {/* <input {...getInputProps()} /> */}
        {isOpen ? (
          <ChoiceAirports>
            {items
              .filter(content => console.log(inputValue) || !inputValue || content.includes(inputValue))
              .map((item, index) => (
                <Content key={item}>
                  <Info>
                    <City
                      {...getItemProps({ item })}
                      style={{
                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item.city ? 'bold' : 'normal',
                      }}
                    >
                      {item.city}
                    </City>
                    <Country>{item.country}</Country>
                  </Info>
                  <Text>{item.code}</Text>
                </Content>
              ))}
          </ChoiceAirports>
        ) : null}
      </div>
    )}
  />
);
