import styled from "styled-components";

export const CatalogInner = styled.div``;

export const LoadMore = styled.button`
  padding: 16px 32px;
  display: block;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  cursor: pointer;
  color: #101828;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.08px;
  background: #fff;
  &:hover {
    border: 1px solid var(--Button, #e44848);
  }
  margin: 0 auto 50px auto;
`;
