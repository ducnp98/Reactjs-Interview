import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import React from "react";

type Props = {
  value: number;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ProgressCard = React.memo<Props>(({ value }) => {
  return <BorderLinearProgress variant="determinate" value={value} />;
});

export default ProgressCard;
