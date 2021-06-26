import styled from 'styled-components'

export const ContainerPageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  & aside {
    flex: 7;

    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textLight};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    & img {
      max-width: 320px;
      position: relative;
      top: 0;
      animation-name: animationOpacity;
      animation-duration: 1s;
    }

    & strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
      position: relative;
      top: 0;
      animation-name: animationOpacity;
      animation-duration: 1s;
    }

    & p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${({ theme }) => theme.smothWhite};
      position: relative;
      top: 0;
      animation-name: animationOpacity;
      animation-duration: 1s;
    }
  }

  @keyframes animationOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  top: 0;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
  opacity: 1;
  overflow-y: hidden;

  @keyframes animationDownToPosition {
    0% {
      top: 100vw;
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }

  & > img {
    align-self: center;
    position: relative;
    top: 0;
    animation-name: animationDownToPosition;
    animation-duration: 1s;
  }

  & h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
    position: relative;
    top: 0;
    animation-name: animationDownToPosition;
    animation-duration: 1s;
    color: ${({ theme }) => theme.strongTextColor};
  }

  & form {
    position: relative;
    top: 0;
    animation-name: animationDownToPosition;
    animation-duration: 1s;
    & input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid ${({ theme }) => theme.lightGrey};
      position: relative;
      top: 0;
      animation-name: animationDownToPosition;
      animation-duration: 1.2s;
    }

    & button {
      margin-top: 16px;
      position: relative;
      top: 0;
      animation-name: animationDownToPosition;
      animation-duration: 1.3s;
    }

    & button,
    input {
      width: 100%;
    }
  }

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.grey};
    margin-top: 16px;
    position: relative;
    top: 0;
    animation-name: animationDownToPosition;
    animation-duration: 1.4s;

    & a {
      color: ${({ theme }) => theme.highlightedPrimary};
    }
  }
`
