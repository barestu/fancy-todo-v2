import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 600px;
  max-width: 100%;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 0 8px 2px rgba(0,0,0,0.1);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #7D8FA8;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 700;
`;

export const Close = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  padding-top: 4px;
  cursor: pointer;
`;

export const Body = styled.div`
  padding: 20px;

  & form {
    display: flex;

    & input {
      margin-right: 10px;

      &:first-child {
        flex: 1;
      }
    }

    .react-datepicker-wrapper input {
      box-sizing: border-box;
      padding: 10px;
      height: 40px;
      border: 1.5px solid #7D8FA8;
      border-radius: 4px;
      width: 130px;
      text-align: center;

      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary };
      }
    }
  }
`;
