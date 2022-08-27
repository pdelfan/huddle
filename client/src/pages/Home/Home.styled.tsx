import styled from "styled-components";
import { theme } from "../../theme/theme";

export const HomeContainer = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  max-width: 10rem;  
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: ${theme.spacing[24]};
  margin-top: ${theme.spacing[40]};
`;
