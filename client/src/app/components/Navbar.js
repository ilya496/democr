import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/images/logo.png";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/burgerStyle.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function DropdownMenu(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="nav-li" onClick={() => setOpen(!open)}>
        <button>Еще</button>
      </li>
      {open && (
        <>
          <div className="dropdown" onClick={() => setOpen(!open)}>
            <div className="dropdown-content">
              <Link className="dropdown-link" to="/suggest">
                <i className="fas fa-newspaper"></i> Предложить новость
              </Link>
              <Link className="dropdown-link" to="/chat">
                <i className="far fa-comments"></i> Общий Чат
              </Link>
              <Link className="dropdown-link" to="/minigames">
                <i className="fas fa-gamepad"></i> Мини Игры
              </Link>
            </div>
            <div className="cross" onClick={() => setOpen(false)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function NavItem({ text, url, nav, onClick }) {
  return (
    <>
      <li
        className={nav ? "nav-li" : "nav-li"}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <Link to={url}>{text}</Link>
      </li>
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "900px" });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogoutClick = () => {
    handleClose();
    handleLogout();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Navbar Logo" />
          </Link>
        </div>
        {user && user.data && (
          <div className="email">
            Signed as{" "}
            <Link to={`/account/${user.data.id}`} className="account-link">
              {user.data.email}
            </Link>
          </div>
        )}
        {isMobile ? (
          <>
            <Menu
              right
              styles={styles}
              isOpen={isOpen}
              onClose={handleClose}
              onOpen={handleOpen}
            >
              <Link to="/" onClick={handleClose}>
                Главная
              </Link>
              {user?.data ? (
                <Link to="/" onClick={handleClose}>
                  Общий Чат
                </Link>
              ) : (
                <Link to="/login" onClick={handleClose}>
                  Вход
                </Link>
              )}
              {!user?.data && (
                <Link to="/signup" onClick={handleClose}>
                  Регистрация
                </Link>
              )}
              {user?.data && (
                <Link to="/suggest" onClick={handleClose}>
                  Предложить новость
                </Link>
              )}
              {user?.data && (
                <Link to="/minigames" onClick={handleClose}>
                  Мини Игры
                </Link>
              )}
              {user?.data && (
                <a onClick={handleLogoutClick} href="/">
                  Выйти
                </a>
              )}
              {user?.data && user.data.roles.includes("admin") && (
                <Link to="/admin" onClick={handleClose}>
                  Admin Panel
                </Link>
              )}
            </Menu>
          </>
        ) : (
          <nav>
            <ul>
              <NavItem text="Главная" url="/" nav={true} />
              {user?.data ? (
                <>
                  {/* <NavItem text="Общий Чат" url="/chat" nav={true} /> */}
                  <DropdownMenu />
                  {user?.data && user.data.roles.includes("admin") && (
                    <NavItem text="Admin Panel" url="/admin" nav={true} />
                  )}
                  <NavItem
                    onClick={handleLogout}
                    text="Выйти"
                    url="/"
                    nav={true}
                  />
                </>
              ) : (
                <>
                  <NavItem text="Вход" url="/login" nav={true} />
                  <NavItem text="Регистрация" url="/signup" nav={true} />
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
