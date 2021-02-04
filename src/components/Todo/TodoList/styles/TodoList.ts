import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 10px;
  padding: 0 30px;
`;

export const Title = styled.h4`
  flex: 2;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const DueDate = styled.p`
  flex: 1.05;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: #B9CAE0;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NotFound = styled.div`
  padding: 30px;
  text-align: center;
`;

export const NotFoundText = styled.p`
  color: #7D8FA8;
  font-size: 14%px;
  font-style: italic;
`;
