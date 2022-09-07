import styled from 'styled-components';

export const StyledCaveEntrance = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: -10px;
`;

export const CaveLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  font-size: 1rem;
  line-height: 1rem;
  span {
    display: block;
    text-indent: -999999px;
  }
`;
