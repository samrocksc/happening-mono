import styled, {css} from 'styled-components';
import colorScheme from '../color-scheme';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 1px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;

  &:hover {
    opacity: 0.5;
  }

  ${props =>
    props.primary &&
    css`
      background: ${colorScheme.primary};
      color: ${colorScheme.secondary};
      box-shadow: .5px .5px .5px ${colorScheme.primary};
    `};

  ${props =>
    props.secondary &&
    css`
      background: ${colorScheme.secondary};
      color: ${colorScheme.primary};
      box-shadow: .5px .5px .5px ${colorScheme.secondary};
    `};
`;

export default Button;
