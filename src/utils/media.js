import { css } from "styled-components";
const sizes = {
  xl: 1200,
  md: 768
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
