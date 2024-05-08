import styled from "styled-components";

export const ContainerInfo = styled.div`
  padding-top: 44px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 44px;
  width: 430px;
`;

export const ListFeature = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const VehicleTitle = styled.h3`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  &:after {
    content: "";
    display: block;
    margin-top: 24px;
    margin-bottom: 24px;
    height: 1px;
    width: 100%;
    background-color: rgba(16, 24, 40, 0.1);
  }
`;

export const VehicleDetInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VehicleInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const VehicleText = styled.h4`
  color: #101828;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
`;
