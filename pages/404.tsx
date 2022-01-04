import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.background};
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  a {
    color: white;
  }
  h1 {
    font-weight: 400;
  }
  h2 {
    font-weight: 400;
    font-size: 2rem;
  }
`;

export default function Custom404() {
  return (
    <Wrapper>
      <h1>404 - You lost bud?</h1>
      <h2>it's probably on you, my website is like, pretty good</h2>
      <nav>
        <a href="/">Go Home</a>
      </nav>
    </Wrapper>
  );
}
