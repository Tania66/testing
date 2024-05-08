import styled from "styled-components";
import { GrLocation } from "react-icons/gr";

export const SideBarInner = styled.aside`
  width: 360px;
  float: left;
  padding-top: 35px;
  padding-bottom: 100px;
`;

export const LocationLabel = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const LocationInputInner = styled.div`
  position: relative;
`;

export const LocationIcon = styled(GrLocation)`
  width: 18px;
  height: 20px;
  fill: #475467;
  position: absolute;
  top: 147px;
  left: 110px;
  &:hover {
    fill: #101828;
  }
`;

export const InputLocation = styled.input`
  margin-top: 8px;
  margin-bottom: 32px;
  padding: 18px 0 18px 44px;
  width: 100%;
  border-radius: 10px;
  background: #f7f7f7;
  border: none;
  outline: none;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const ButtonEquipmentInner = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  /* align-items: flex-start; */
`;

export const ButtonEquipment = styled.button`
  padding: 12px;
  width: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  color: #101828;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.25;
  background: transparent;
  &:hover {
    border: 1px solid #e44848;
  }
`;

export const IconButton = styled.img`
  width: 32px;
  height: 32px;
`;

export const Filter = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const Equipment = styled.h3`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;
  &:after {
  }
`;

export const VehicleTypeTitle = styled.h3`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const IconType = styled.img`
  width: 40px;
  height: 28px;
`;

export const ButtonType = styled.button`
  padding: 17px;
  width: 110px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  color: #101828;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.25;
  background: transparent;
  &:hover {
    border: 1px solid #e44848;
  }
`;

export const SearchButton = styled.button`
  margin-top: 64px;
  padding: 16px 60px;
  cursor: pointer;
  display: block;
  border-radius: 200px;
  background: #e44848;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  &:hover {
    background: #d84343;
  }
`;
