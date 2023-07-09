import { Box, Button, IconButton } from "@mui/material";
import CardHeaderBackground from "../../assets/images/card-header-background.png";
import { Colors } from "../../styles/theme";
import { styled } from "@mui/system";

export const StyledBackButton = styled(IconButton)`
  background: white !important;
`;

export const StyledHeaderContainer = styled(Box)`
  background: linear-gradient(
    to bottom,
    ${Colors.gray1} 0%,
    ${Colors.gray1} 60%,
    white 40%,
    white 100%
  );
  padding: 1.5rem;
`;

export const StyledTextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledCardHeaderInformation = styled(Box)`
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid var(--grey-09, ${Colors.gray9});
  background-image: url(${CardHeaderBackground});
  background-size: cover;
`;

export const StyledFullWidthButton = styled(Button)`
  width: 100%;
  font-size: 1.125rem;
  text-transform: initial;
  &.MuiButton-contained {
    background: ${Colors.gray1};
    font-weight: bold
  }
  &.MuiButton-contained:hover {
    background: ${Colors.gray1};
  }
`;

export const StyledCardInfoContainer = styled(Box)`
  width: 12.5rem;
  min-height: 15rem;
  display: inline-block;
  border-radius: 0.25rem;
  background-color: white;
  border: 1px solid ${Colors.gray8};
  box-shadow: 0px 12px 18px 0px rgba(23, 23, 37, 0.04);
`;

export const StyledCardInfoImageContainer = styled(Box)`
  width: 12.5rem;
  height: 6.24rem;
`;

export const StyledBodyContainer = styled(Box)`
  padding: 0 1.5rem;
`;


export const StyledHorizontalScroll = styled(Box)`
  display: flex;
  overflow: auto;
  gap: 3;
  padding: 1.5rem 0 3rem 0;
  ::-webkit-scrollbar {
    display: none;
  }
`
