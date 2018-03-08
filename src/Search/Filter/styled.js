import styled from 'styled-components';
import Icon from '../../Icon';

export const AccordionsStyled = styled.div``;

export const Clear = styled.button`
  position: relative;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: #00bde4;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ff9d1b;
    background-color: #f1fcff;
  }
`;

export const TextClear = styled.span`
  font-size: 12px;
`;

export const IconClear = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #dadada;
  transition: color 0.3s;

  ${Clear}:hover & {
    color: #ff6663;
  }
`;

export const AccordionGroup = styled.div`
  position: relative;
`;

export const Reset = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 16px;
  background-color: transparent;
  border: none;
`;

export const IconReset = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #dadada;
  transition: color 0.3s;

  ${Reset}:hover & {
    color: #ff6663;
  }
`;

export const Info = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #323333;
`;
