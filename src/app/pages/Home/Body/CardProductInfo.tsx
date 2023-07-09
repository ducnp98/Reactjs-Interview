import React from "react";
import { Typography } from "@mui/material";
import { Colors } from "../../../styles/theme";
import { Product } from "../data";
import {
  StyledCardInfoContainer,
  StyledCardInfoImageContainer,
  StyledTextContainer,
} from "../styles";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { styled } from "styled-components";

type Props = {
  item: Product;
};

const CardProductInfo: React.FC<Props> = ({ item }) => {
  return (
    <StyledCardInfoContainer>
      <StyledCardInfoImageContainer>
        <StyledCardInfoImage src={item.image} />
      </StyledCardInfoImageContainer>
      <StyledTextContainer padding={2}>
        <Typography
          gap={0.5}
          display="flex"
          fontWeight={600}
          alignItems="center"
          color={item.isPending ? Colors.gray3 : Colors.blueDark}
        >
          {item.isPending ? <WatchLaterIcon fontSize="small" /> : null}
          {`${item.coins} coins`}
        </Typography>
        <Typography fontWeight={400} color={Colors.gray4}>
          {item.description}
        </Typography>
        {item?.extra ? (
          <Typography variant="body2" color={Colors.blueDark}>
            {item.extra}
          </Typography>
        ) : null}
      </StyledTextContainer>
    </StyledCardInfoContainer>
  );
};


export const StyledCardInfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

export default CardProductInfo;
