import styled from 'styled-components/macro';

export const Container = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 2.5px solid #E3EBF8;

  &:first-child {
    border-top: 2.5px solid #EBF1FB;
  }

  &:last-child {
    border-bottom: 2.5px solid #EBF1FB;
  }

  &:nth-child(odd) {
    background: #F7F9FB;
  }
`;

export const IconContainer = styled.div<{ indicatorColor: string }>`
  padding: 10px 30px;
  border-right: 2px dashed #EBF1FB;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ indicatorColor }) => indicatorColor };
  }
`;

export const IconButton = styled.button<{ isCompleted: boolean }>`
  background: ${({ isCompleted }) => isCompleted ? '#FDF2F8' : '#fff' };
  border: 1px solid ${({ theme, isCompleted }) => isCompleted ? theme.colors.secondary : '#E1E1E1' };
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.1);
  width: 28px;
  height: 28px;
  cursor: pointer;

  & > svg {
    color: ${({ theme, isCompleted }) => isCompleted ? theme.colors.secondary : '#E1E1E1' };
  }
`;

export const Name = styled.p`
  flex: 2;
  padding: 0 30px;
  color: #333333;
  font-weight: 400;
`;

export const DueDate = styled.p<{ bold?: boolean }>`
  flex: 1;
  padding: 0 30px;
  color: #7D8FA8;
  font-weight: ${({ bold }) => bold ? '700' : '400' };
`;

export const ShowMore = styled.div`
  padding: 0 30px;

  & > svg {
    cursor: pointer;
  }
`;
