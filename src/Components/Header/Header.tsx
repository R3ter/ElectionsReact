import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { getUserData, logOut } from "../../Data/ModifyData";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import "./style.scss";
import { useNavigate } from "react-router-dom";
export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <div className="Header">
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: deepPurple[500] }}>
          {getUserData().name[0]}
        </Avatar>
        <p>{getUserData().name}</p>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {getUserData().type == "admin" && (
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/dashboard");
            }}
          >
            Go to Dashboard
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/VotingPage");
          }}
        >
          Vote page
        </MenuItem>
        <MenuItem
          onClick={() => {
            logOut();
            navigate("/");
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
