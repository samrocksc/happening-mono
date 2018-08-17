import styled, {css} from 'styled-components';
import {media} from '../style-utils';
import scheme from '../color-scheme';

const Navigation = styled.div`
  ${props =>
    props.container &&
    css`
      background-color: #46acc2;
      display: flex;
      padding: 16px;
      font-family: sans-serif;
      color: white;
      ${media.handheld`
        font-size: 14px;
        flex-direction: column;
      `};
    `};

  ${props =>
    props.box &&
    css`
      display: flex;
      padding-right: 8px;
      ${media.widescreen`
        display: none;
      `};
    `};

  ${props =>
    props.item &&
    css`
      display: flex;
      padding-right: 8px;
      ${media.handheld`
        font-size: 14px;
        flex-direction: column;
      `};
    `};

  ${props =>
    props.itemRight &&
    css`
      margin-left: auto;
    `};

  ${props =>
    props.linkToggle &&
    css`
      align-self: flex-end;
      display: initial;
      position: absolute;
      cursor: pointer;
    `};

  ${props =>
    props.itemRight &&
    css`
      margin-left: 0;
    `};

  ${props => props.link && css``};

  ${props =>
    props.toggleShow &&
    css`
      display: flex;
    `};
`;

const NavigationHeader = styled.span`
  font-size: 2em;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: ${scheme.accentDark};
`;

export {Navigation, NavigationHeader, NavigationLink};
