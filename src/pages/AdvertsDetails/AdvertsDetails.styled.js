import styled from "styled-components";

export const TopInnerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

export const TitleCamper = styled.h3`
  margin-bottom: 10px;
  color: #101828;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const InnerDetailRating = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const GalleryList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const GallreImg = styled.img`
  border-radius: 10px;
  /* display: block; */
  max-width: 260px;
  height: auto;
`;

export const DetailsDescription = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 44px;
`;

export const LictContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: rgba(16, 24, 40, 0.2);
  }
`;

export const ConteinerDetaliesFR = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 24px;
`;

export const ButtonStyled = styled.button`
  position: relative;
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  border: none;
  &:after {
    content: "";
    position: absolute;
    bottom: -27px;
    left: 0;
    height: 5px;
    width: 85px;
    background-color: #e44848;
    display: ${(props) => (props.active === "true" ? "block" : "none")};
  }
`;
