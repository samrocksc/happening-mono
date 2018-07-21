import styled, {keyframes} from 'styled-components';

const FancyH1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  animation: ${keyframes`from { opacity: 0; }`} 1s both;
`;

export default FancyH1;
