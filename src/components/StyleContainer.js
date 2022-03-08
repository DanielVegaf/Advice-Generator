import styled from 'styled-components'
import colors from './Colors'

const StyleContainer = styled.div`
  background-color: ${colors.grayishBlue};
  padding: 1.25rem 1.25rem 3rem;
  color: #ffffff;
  border-radius: 1.25rem;
  position: relative;

  @media (min-width: 375px) {
    max-width: 480px;
  }
`;

export default StyleContainer