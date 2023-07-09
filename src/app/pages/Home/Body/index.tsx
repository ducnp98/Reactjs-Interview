import React from "react";
import { Box, Typography } from "@mui/material";
import CardProductInfo from "./CardProductInfo";
import { ProductSessions } from "../data";
import { Colors } from "../../../styles/theme";
import { StyledBodyContainer, StyledHorizontalScroll } from "../styles";

const BodyHome = () => {
  return (
    <StyledBodyContainer>
      {ProductSessions.map((session) => (
        <Box key={session.id}>
          <Typography fontSize={18} color={Colors.gray1} fontWeight='bold'>
            {session.title}
          </Typography>
          <StyledHorizontalScroll display="flex" overflow="auto" gap={3} paddingBottom={6} paddingTop={3}>
            {session.products.map((product) => (
              <CardProductInfo
                key={product.id}
                item={product}
              />
            ))}
          </StyledHorizontalScroll>
        </Box>
      ))}
    </StyledBodyContainer>
  );
};

export default BodyHome;
