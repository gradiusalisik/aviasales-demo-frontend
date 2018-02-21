import styled from "styled-components";
import media from "../utils/media";

// ** index.js
export const Forms = styled.form`
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

export const WrapForm = styled.div`
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 6px;

  ${media.xl`
    margin-bottom: 48px;
    display: flex;
  `};
`;

export const WrapField = styled.div`
  margin-bottom: ${props => (props.noBottomIndent ? 0 : "2px")};

  ${media.md`
    margin-left: ${props => (props.noLeftIndentTablet ? 0 : "2px")};
    margin-bottom: ${props => (props.noBottomIndentTablet ? 0 : "2px")};
    width: 100%;
  `};

  ${media.xl`
    margin-bottom: 0;
    min-width: 224px;
    margin-left: ${props => (props.noLeftIndentDesktop ? 0 : "2px")};
  `};
`;

export const WrapDatePicker = WrapField.extend`
  ${media.xl`
    min-width: auto;
  `};
`;

export const Wrapper = styled.div`
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

export const ButtonWrap = styled.div`
  ${media.xl`
    margin-left: auto;
    margin-right: auto;
    max-width: 308px;
  `};
`;

// ** Field.js
export const FieldWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Input = styled.input`
  padding: 16px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #4a4a4a;
  border: none;

  ::placeholder {
    color: #a0b0b9;
  }
`;

export const WrapInfoField = styled.div`
  position: absolute;
  padding-right: 16px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Text = styled.div`
  margin-right: 11px;
  font-size: 16px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

export const ChangeCityArrows = styled.div`
  width: 16px;
  height: 18px;
  color: #1ba6d2;
`;
