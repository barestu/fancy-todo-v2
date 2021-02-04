import styled from 'styled-components/macro';

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  height: 40px;
  border: 1.5px solid #7D8FA8;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary };
  }
`;

export default Input;
