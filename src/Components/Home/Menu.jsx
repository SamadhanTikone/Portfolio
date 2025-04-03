import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BadgeIcon from "@mui/icons-material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Theme } from "../Context/Context";

export default function Menu() {
  const { theme } = useContext(Theme);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ marginTop: 5 }}>

        <Link
          to={"/"}
          className="ld:text-lg text-md uppercase font-semibold"
        >
          <ListItem disablePadding sx={{ margin: "10px 0px" }}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: 28 }} />
              </ListItemIcon>


              {" "}
              Home{" "}

            </ListItemButton>
          </ListItem>

        </Link>

        <Link
          to={"/about"}
          className="ld:text-lg text-md uppercase font-semibold"
        >

          <ListItem disablePadding sx={{ margin: "10px 0px" }}>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>


              {" "}
              About{" "}

            </ListItemButton>
          </ListItem>

        </Link>

        <Link
          to={"/resume"}
          className="ld:text-lg text-md uppercase font-semibold"
        >
          <ListItem disablePadding sx={{ margin: "10px 0px" }}>
            <ListItemButton>
              <ListItemIcon sx={{ opacity: 100 }}>
                <FilePresentIcon />
              </ListItemIcon>


              {" "}
              Resume{" "}

            </ListItemButton>
          </ListItem>

        </Link>

        <Link
          to={"/portfolio"}
          className="ld:text-lg text-md uppercase font-semibold"
        >

          <ListItem disablePadding sx={{ margin: "10px 0px" }}>
            <ListItemButton>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>


              {" "}
              Portfolio{" "}

            </ListItemButton>
          </ListItem>

        </Link>

        <Link
          to={"/contact"}
          className="ld:text-lg text-md uppercase font-semibold"
        >
          <ListItem disablePadding sx={{ margin: "10px 0px" }}>
            <ListItemButton>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>


              {" "}
              Contact{" "}

            </ListItemButton>
          </ListItem>

        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <p className={` ${theme ? "text-white" : " text-black"}`}>
          {" "}
          <MenuIcon sx={{ fontSize: 36 }} />{" "}
        </p>{" "}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
