import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

interface IInfosContainer {
  bg: string;
}

export const InfosContainer = styled.section<IInfosContainer>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 3vh 8%;
  background-color: ${({ bg }) => `var(--${bg})`};
  transition: background-color 0.5s;

  h1 {
    font-size: 30px;
    font-weight: 700;
    color: var(--white);
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: var(--white);
  }
  span + span {
    font-size: 20px;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    padding: 8vh 5%;
    align-items: flex-start;
  }
`;

export const ResultsContainer = styled.section`
  flex: 1;
  padding: 3vh 8% 5vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: var(--gray900);

  ol {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    margin: auto 0;
  }

  p {
    text-align: center;
    font-size: 14px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

interface ISeparator {
  bg: string;
}

export const Separator = styled.div<ISeparator>`
  overflow: hidden;
  position: relative;
  height: 5vw;
  background-color: ${({ bg }) => `var(--${bg})`};
  transition: background-color 0.5s;
  flex-shrink: 0;

  div {
    background-color: var(--gray900);
    flex-shrink: 0;
    position: absolute;
    top: 0;
    left: 50%;
    height: 500vw;
    width: 500vw;
    border-radius: 20000px;
    transform: translateX(-50%);
  }

  @media (min-width: 1024px) {
    width: 9vh;
    height: 100%;

    div {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 300vh;
      width: 300vh;
    }
  }
`;
