import styled from "styled-components";
import bg from "../../assets/camperVan.png";
import { NavLink } from "react-router-dom";

export const HomeInner = styled.div`
  padding-top: 100px;
  padding-bottom: 250px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: right -98px bottom -130px;
  background-size: cover;
`;

export const SupTitle = styled.p`
  color: #e44848;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  color: #101828;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 14px;
  max-width: 300px;
`;

export const SpanTitle = styled.span`
  color: #ffc531;
`;

export const Text = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  max-width: 375px;
  margin-bottom: 34px;
`;

export const GetStared = styled(NavLink)`
  border-radius: 200px;
  border: 1px solid #e44848;
  padding: 16px 32px;
  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(233, 95, 42, 0.8);
  }
`;
