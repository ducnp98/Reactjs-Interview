import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomePage from "../Home";
import NotificationPage from "../Notification";
import CreditPage from "../Credit";
import AccountPage from "../Account";
import HomeIcon from "../../assets/images/home.png";
import CreditCardIcon from "../../assets/images/credit-card.png";
import AccountIcon from "../../assets/images/account.png";
import NotificationIcon from "../../assets/images/notification.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={Number(value) !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {Number(value) === index && <Box>{children}</Box>}
    </Box>
  );
};

export default function TabNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NotificationPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreditPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountPage />
      </TabPanel>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 70 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={
              <img
                src={HomeIcon}
                className="logo-tab-navigation"
                alt="home-icon"
              />
            }
          />
          <BottomNavigationAction
            icon={
              <img
                src={NotificationIcon}
                className="logo-tab-navigation"
                alt="home-icon"
              />
            }
          />
          <BottomNavigationAction
            icon={
              <img
                src={CreditCardIcon}
                className="logo-tab-navigation"
                alt="home-icon"
              />
            }
          />
          <BottomNavigationAction
            icon={
              <img
                src={AccountIcon}
                className="logo-tab-navigation"
                alt="home-icon"
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
