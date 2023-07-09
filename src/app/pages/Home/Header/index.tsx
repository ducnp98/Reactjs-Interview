import React from "react";
import {
  StyledBackButton,
  StyledCardHeaderInformation,
  StyledFullWidthButton,
  StyledHeaderContainer,
  StyledTextContainer,
} from "../styles";
import { Box, Link, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProgressCard from "./ProgressCard";
import { Colors } from "../../../styles/theme";

const HeaderHome = () => {
  return (
    <>
      <StyledHeaderContainer>
        <StyledBackButton>
          <ArrowBackIosNewIcon />
        </StyledBackButton>
        <StyledTextContainer marginTop={2} marginBottom={4}>
          <Typography color="white" variant="h4" fontWeight='bold'>
            Silver Tier
          </Typography>
          <Typography fontWeight={400} color={Colors.gray5}>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </Typography>
        </StyledTextContainer>

        <StyledCardHeaderInformation>
          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" color={Colors.gray5} fontWeight='bold'>
              Available Coin balance
            </Typography>
            <Typography variant="h3" sx={{ mt: 1 }}>
              340
            </Typography>
          </Box>
          <ProgressCard value={80} />
          <Typography fontWeight={400} sx={{ mt: 3, mb: 2 }} color={Colors.gray4}>
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold
            Tier.
          </Typography>
          <Link href="#" underline="none" display="block">
            View tier benefits
          </Link>
          <StyledFullWidthButton variant="contained" sx={{ my: 3, p: 1.8 }}>
            My Coupons
          </StyledFullWidthButton>
          <Typography variant="body1" color={Colors.gray5} textAlign="center">
            Updated : 02/11/2021
          </Typography>
        </StyledCardHeaderInformation>
      </StyledHeaderContainer>
    </>
  );
};

export default HeaderHome;
