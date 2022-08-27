import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledBoard = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.gray[10]};
`;

export const TransformWrapper = styled.div`
  position: fixed;  
`;