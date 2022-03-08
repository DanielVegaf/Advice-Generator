import styled from 'styled-components'
import colors from './Colors'

const StyleButton = styled.button`
  background-color: ${colors.NeonGreen};
  padding: 1.25rem;
  border: none;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover{
    background-color: ${colors.NeonGreen};
    box-shadow: 0 0 30px ${colors.NeonGreen};
  }
`;

export default StyleButton