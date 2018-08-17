import styled, {css} from 'styled-components';

const ColorButton = styled.a`
  background-color: #4caf50;
  border-radius: 50%;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;

  &:hover {
    opacity: .5;
  }

  ${props =>
    props.paleRed &&
    css`
      background: palevioletred;
      color: white;
    `};
  ${props =>
    props.red &&
    css`
      background: red;
      color: white;
    `};
  ${props =>
    props.blue &&
    css`
      background: blue;
      color: white;
    `};
  ${props =>
    props.green &&
    css`
      background: green;
      color: white;
    `};
  ${props =>
    props.orange &&
    css`
      background: orange;
      color: white;
    `};
`;

export default ColorButton;
