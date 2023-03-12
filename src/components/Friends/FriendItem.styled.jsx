import styled from 'styled-components';

const Span = styled.span`
  &::after {
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ props }) => (props ? 'palevioletred' : 'red')};
  }
`;

export { Span };
