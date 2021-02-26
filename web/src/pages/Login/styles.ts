import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;

  margin: 0 auto;

  & > h1 {
    font-size: 3.5vw;
    font-weight: 300;
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > img {
    max-width: 200px;
    min-width: 80px;
    max-height: 200px;
    min-height: 80px;
    width: 8vw;
    height: 8vw;

    border: 2px solid transparent;
    border-radius: 4px;

    overflow: hidden;

    cursor: pointer;
    &:hover {
      border-color: var(--white);
    }
  }

  & > span {
    min-height: 1.5rem;
    font-size: 1.4vw;
  }
`;
