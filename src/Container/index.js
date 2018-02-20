import styled from "styled-components";
import media from "../utils/media";

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  ${media.tablet`
    max-width: 624px;
  `};
  ${media.desktop`
    max-width: 1030px;
  `};
`;
