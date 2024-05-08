import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export const Stars = styled(FaStar)`
  width: 16px;
  height: 16px;
  fill: #ffc531;
`;

export const Button = styled.button`
  display: block;
  border: none;
  background: transparent;
`;

export const FavoriteButton = styled(FaHeart)`
  fill: #e44848;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const ShowMoreButton = styled.button`
  padding: 16px 40px;
  border-radius: 200px;
  background: #e44848;
  color: #fff;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  letter-spacing: -0.08px;
  &:hover {
    background: #d84343;
  }
`;

export const AdvertsInner = styled.div`
  margin-left: 377px;
`;

export const AdvertList = styled.ul`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 840px;
  padding-top: 35px;
  padding-bottom: 50px;
`;

export const AdvertItem = styled.li`
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const AdvertItemContent = styled.div`
  gap: 24px;
  display: flex;
  padding: 24px;
`;

export const AdvertContent = styled.div`
  max-width: 475px;
`;

export const TopAdvertContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  border-radius: 10px;
  display: block;
  width: 290px;
  height: auto;
`;

export const AdvertName = styled.h1`
  color: #101828;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const PriceInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Price = styled.p`
  color: #101828;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const RatingInner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const LocationText = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Review = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ItemCategory = styled.p`
  padding: 12px 18px;
  border-radius: 100px;
  background: #f2f4f7;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #101828;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
`;

export const IconCategory = styled.img`
  width: 20px;
  height: 20px;
`;
