import styled from "styled-components";
import bg from "../../assets/van.png";
import { NavLink } from "react-router-dom";

export const HomeInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 320px) {
    padding-top: 60px;
    padding-bottom: 30px;
    background-position: right -11px bottom 40px;
  }
  @media screen and (min-width: 428px) {
    background-position: right -11px bottom -65px;
    padding-bottom: 255px;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 260px;
    background-position: right -11px bottom -60px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 0;
    background-position: right bottom -85px;
  }
  @media screen and (min-width: 1158px) {
    padding-top: 15px;
    background-position: right 304px bottom -56px;
    padding-bottom: 220px;
  }
`;

export const SupTitle = styled.p`
  color: #e44848;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  @media screen and (min-width: 320px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  color: #101828;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 14px;
  max-width: 300px;
  @media screen and (min-width: 320px) {
    margin-bottom: 10px;
  }
`;

export const SpanTitle = styled.span`
  color: #ffc531;
`;

export const Text = styled.p`
  color: #101828;
  font-weight: 500;
  line-height: 1.5;
  max-width: 375px;
  margin-bottom: 34px;
  @media screen and (min-width: 320px) {
    margin-bottom: 0;
    font-size: 15px;
    padding-bottom: 212px;
  }
  @media screen and (min-width: 428px) {
    margin-bottom: 12px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 1158px) {
    font-size: 16px;
  }
`;

export const GetStared = styled(NavLink)`
  border: 1px solid #e44848;
  font-size: 16px;
  color: #101828;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(233, 95, 42, 0.8);
  }
  @media screen and (min-width: 320px) {
    border-radius: 100px;
    padding: 8px 16px;
    align-self: center;
  }
  @media screen and (min-width: 428px) {
    align-self: start;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 16px;
  }
  @media screen and (min-width: 1158px) {
    padding: 16px 32px;
  }
`;
