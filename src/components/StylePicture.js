import styled from 'styled-components'
import colors from './Colors'

const StylePicture = styled.picture`
  &::before {
    content: "";
    width: 40%;
    height: 1px;
    background-color: ${colors.LightCyan};
    right: 1.25rem;
    bottom: 3.8rem;
    position: absolute;
    display: block;
    z-index: 99;
  }

  &::after{
    content: "";
    width: 45%;
    height: 1px;
    background-color: ${colors.LightCyan};
    left: 0;
    bottom: 0.74rem;
    position: relative;
    display: block;
  }
`;

export default StylePicture