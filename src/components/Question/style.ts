import styled from 'styled-components'

export const QuestionStyle = styled.div`
  background: ${({ theme }) => theme.textLight};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid ${({ theme }) => theme.primary};

    footer .user-info span {
      color: ${({ theme }) => theme.inverted};
    }
  }

  &.answered {
    background: ${({ theme }) => theme.mediumGrey};
  }

  p {
    color: ${({ theme }) => theme.inverted};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: ${({ theme }) => theme.grey};
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${({ theme }) => theme.grey};
        gap: 8px;

        &.liked {
          color: ${({ theme }) => theme.primary};

          svg path {
            stroke: ${({ theme }) => theme.primary};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`
