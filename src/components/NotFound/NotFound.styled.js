import styled from "styled-components";
export const NotFoundContainer = styled.div`
  padding: 30px 0 45px 0;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const Text = styled.p`
  color: #101828;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  width: 300px;
  text-align: center;
`;

export const Span = styled.span`
  color: #d84343;
  font-style: italic;
`;
