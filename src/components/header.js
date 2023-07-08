import Logo from "../assets/logo.png";
import MemoIcon from "../assets/icons/icon_memo.png";
import ChallengeIcon from "../assets/icons/icon_challenge.png";
import InfoIcon from "../assets/icons/icon_info.png";
import MenuIcon from "../assets/icons/icon_menu.png";
import CloseIcon from "../assets/icons/icon_close.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleChangeRoute = (path) => {
    navigate(path);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuList = [
    {
      text: "自分の記録",
      path: "/",
    },
    {
      text: "体重グラフ",
      path: "",
    },
    {
      text: "目標",
      path: "",
    },
    {
      text: "選択中のコース",
      path: "",
    },
    {
      text: "コラム一覧",
      path: "/column",
    },
    {
      text: "設定",
      path: "",
    },
  ];
  const renderedMenu = menuList.map((menu, index) => {
    return (
      <MenuItem
        onClick={() => {
          handleClose();
          handleChangeRoute(menu.path);
        }}
        key={index}
        divider
      >
        <span className="text-light py-3 px-5">{menu.text}</span>
      </MenuItem>
    );
  });

  return (
    <>
      <div className="bg-dark-600">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div className="cursor-pointer" onClick={handleLogoClick}>
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex flex-row gap-x-10 text-light">
            <div
              className="flex flex-row cursor-pointer items-center"
              onClick={() => handleChangeRoute("/my-record")}
            >
              <img
                className="w-[32px] h-[32px] mr-4"
                src={MemoIcon}
                alt="Memo"
              />
              <div>自分の記録</div>
            </div>
            <div className="flex flex-row cursor-pointer items-center">
              <img
                className="w-[32px] h-[32px] mr-4"
                src={ChallengeIcon}
                alt="Challenge"
              />
              <div>チャレンジ</div>
            </div>
            <div className="flex flex-row cursor-pointer items-center">
              <div className="relative">
                <img
                  className="w-[32px] h-[32px] mr-4"
                  src={InfoIcon}
                  alt="Info"
                />
                <div className="bg-primary-400 w-[16px] h-[16px] rounded-full absolute top-0 right-[8px] text-center text-xs">
                  1
                </div>
              </div>
              <div>自分の記録</div>
            </div>
            <div onClick={handleClick}>
              {!open ? (
                <img
                  className="w-[32px] h-[32px]"
                  src={MenuIcon}
                  alt="Challenge"
                />
              ) : (
                <img
                  className="w-[32px] h-[32px]"
                  src={CloseIcon}
                  alt="Close"
                />
              )}
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  backgroundColor: "#777777",
                  width: "240px",
                },
              }}
              MenuListProps={{ sx: { py: 0 } }}
            >
              {renderedMenu}
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
