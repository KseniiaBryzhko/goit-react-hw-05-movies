import styled from 'styled-components';

export const CastList = styled.ul`
  justify-content: space-between;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CastItem = styled.li`
  max-width: 150px;
`;

export const CastImage = styled.img`
  border-radius: 5px;
  width: 150px;
`;

export const CastText = styled.p`
  margin-top: 4px;
  font-size: 16px;
`;
