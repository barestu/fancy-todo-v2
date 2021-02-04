import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 100px auto;
  box-shadow: 0 4px 12px 2px rgba(0,0,0,0.1);
  position: relative;
`;

export const Head = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

export const HeadTitle = styled.h3`
  text-transform: uppercase;
  margin: 0;
`;

export const ToggleShow = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
`;

export const ToggleShowText = styled.p`
  font-style: italic;
  font-size: 12px;
  margin: 0;
  margin-right: 6px;
`;

export const CreateButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: ${({ theme }) => theme.colors.secondary };
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  cursor: pointer;
  transition: all .2s ease-in;

  &:hover {
    box-shadow: 0 0 8px 2px ${({ theme }) => theme.colors.secondary }8A;
  }
`;
