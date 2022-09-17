import { useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { UserContext } from "./context";

export function NavBar() {
  const ctx = useContext(UserContext);
  const { users } = ctx;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none mx-2 text-white">
            <img src="/logo_bad-bank.png" alt="logo" height="60" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Main Page </Tooltip>}
            >
              <NavLink
                to="/"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Home
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="home-tooltip">Create your Account </Tooltip>
              }
            >
              <NavLink
                to="/CreateAccount"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Create Account
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Make a Deposit </Tooltip>}
            >
              <NavLink
                to="/deposit"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Deposit
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Withdraw Funds </Tooltip>}
            >
              <NavLink
                to="/withdraw"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Withdraw
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">View User Data </Tooltip>}
            >
              <NavLink
                to="/alldata"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                All Data
              </NavLink>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Select Account"
            menuVariant="dark"
          >
            {users.map((user, i) => (
              <NavDropdown.Item
                key={user.email}
                onClick={() => ctx.setSelectedUser(i)}
                style={{
                  color: user.selected ? "rgb(185, 243, 137)" : "gray",
                  fontWeight: user.selected ? "bold" : "normal",
                }}
              >
                {user.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
