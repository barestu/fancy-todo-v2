import styled from 'styled-components/macro';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary };
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary }CC;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;

    &:active {
      transform: unset;
    }
  }
`;

export default Button;
