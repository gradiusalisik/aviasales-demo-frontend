import styled from "styled-components";
import media from "../utils/media";

// ** index.js
export const FormsStyled = styled.form`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;

  ${media.md`
    margin-bottom: 10px;
    font-size: 32px;
  `};

  ${media.xl`
    font-size: 40px;
  `};
`;

export const SubTitle = styled.h2`
  margin-bottom: 40px;
  display: none;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;

  ${media.md`
    display: block;
  `};

  ${media.xl`
    font-size: 24px;
  `};
`;

export const Content = styled.div`
  margin-bottom: 16px;
  border-radius: 6px;

  ${media.xl`
    margin-bottom: 48px;
    display: flex;
  `};
`;

export const Container = styled.div`
  position: relative;
`;

export const FieldContent = styled.div`
  margin-bottom: 2px;

  ${media.md`
    margin-left: 0;
    width: 100%;
  `};

  ${media.xl`
    margin-bottom: 0;
    min-width: 224px;
  `};
`;

export const From = FieldContent.extend`
  margin-bottom: 2px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  overflow: hidden;

  ${media.md`
    margin-left: 0;
    border-top-right-radius: 0;
    width: 100%;
  `};

  ${media.xl`
    margin-bottom: 0;
    border-bottom-left-radius: 6px;
    min-width: 224px;
  `};
`;

export const To = FieldContent.extend`
  ${media.md`
    margin-left: 2px;
    border-top-right-radius: 6px;
    overflow: hidden;
  `};

  ${media.xl`
    border-top-right-radius: 0;
  `};
`;

export const DatePicker = FieldContent.extend`
  ${media.md`
    margin-left: 0;
    margin-bottom: 0;
  `};

  ${media.xl`
    min-width: 370px;
    margin-left: 2px;
  `};
`;

export const Selects = styled.div`
  margin-bottom: 2px;
  min-width: 225px;

  ${media.md`
    margin-bottom: 0;
    margin-left: 2px;
  `};
`;

export const FormFields = styled.div`
  width: 100%;
  ${media.md`
    display: flex;
  `};

  ${media.xl`
    width: auto;
    &:last-child {
      width: 100%;
    }
  `};
`;

export const LinkContent = styled.div`
  ${media.xl`
    margin-left: auto;
    margin-right: auto;
    max-width: 308px;
  `};
`;

// ** Field.js
export const Fields = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Input = styled.input`
  padding: 16px;
  padding-right: 38px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #4a4a4a;
  text-overflow: ellipsis;
  overflow: hidden;
  border: none;
  transition: box-shadow 0.3s;

  &::placeholder {
    color: #a0b0b9;
  }
`;

export const InfoField = styled.div`
  position: absolute;
  padding-right: 16px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Text = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

export const ChangeCityArrows = styled.div`
  margin-left: 11px;
  width: 16px;
  height: 18px;
  color: #1ba6d2;
`;
