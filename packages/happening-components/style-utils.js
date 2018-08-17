// style-utils.js
import {css} from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `,

  tablet: (...args) => css`
    @media (min-width: 720px) {
      ${css(...args)};
    }
  `,

  widescreen: (...args) => css`
    @media (min-width: 900px) {
      ${css(...args)};
    }
  `,
};
