import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 430px;
`;

export const UserWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

export const UserName = styled.p`
  color: #101828;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
`;

export const Coment = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const FirstLetterInner = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f2f4f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstLetter = styled.span`
  color: #e44848;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;
