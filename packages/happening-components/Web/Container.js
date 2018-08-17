import styled, {css} from 'styled-components';

const Container = styled.div`

  // centerWrap - flexbox centerWrap
  ${props =>
    props.centerWrap &&
    css`
      margin: 5px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      border: 1px dotted blue;
    `};

  ${props =>
    props.subItems &&
    css`
      margin: 5px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      border: 1px dotted orange;
    `};

  // centeredBox
  ${props =>
    props.stackableBox &&
    css`
      width: 100%;
      border: 1px solid red;
      margin: 5px;
    `};

  // centerAlign
  ${props =>
    props.paddedBox &&
    css`
      width: 100%;
      max-width: 90vw;
      height: 95vh;
      border: 1px solid red;
      margin: 5px;
    `};

  ${props => {
    return (
      props.bottomed &&
      css`
        margin-bottom: 0 auto;
        height: props.height;
      `
    );
  }};
`;

export default Container;
