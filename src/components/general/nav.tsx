import { useLocation } from "wouter";
import { Fragment, useEffect, useRef, useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { Navigation, IconButton, Menu, Absolute } from "../styled";
import { useMediaQuery } from "../../utils";
import { NavLinks } from "./nav-links";

export function Nav() {
  const showMenu = useMediaQuery("(max-width: 750px)");
  const menuRef = useRef<HTMLElement | null>(null);
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (event: globalThis.MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [menuOpen]);

  if (showMenu) {
    const handleMenuClick = () => {
      setMenuOpen(true);
    };

    return (
      <Fragment>
        <Absolute right={24} top={18}>
          <IconButton onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        </Absolute>
        <Menu ref={menuRef} expanded={menuOpen} count={5}>
          <NavLinks />
        </Menu>
      </Fragment>
    );
  }

  return (
    <Navigation>
      <NavLinks />
    </Navigation>
  );
}
