import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="main-navbar">
      <div className="navbar">
        {width <= 800 ? (
          <>
            {menu ? (
              <ImCross
                size={36}
                style={{ cursor: "pointer" }}
                onClick={showMenu}
              />
            ) : (
              <GiHamburgerMenu
                style={{ cursor: "pointer" }}
                onClick={showMenu}
                size={36}
              />
            )}
          </>
        ) : (
          <div className="logo">
            <Link style={{cursor:'pointer'}} className="link" to="/">
              <h4>
                PMG{" "}
                <span className="span" style={{ color: "brown" }}>
                  AFF
                </span>
              </h4>
            </Link>
          </div>
        )}
        {width <= 800 ? (
          ""
        ) : (
          <div className="nav-links">
            <Link className="link" to="/about">
              About us
            </Link>
            <Link className="link" to="/events">
              Events
            </Link>
            <Link className="link" to="/contact">
              Contact us
            </Link>
          </div>
        )}

        <div className="buttons">
          {width <= 800 ? "" :
          <Link to='/register'>
          <button className="btn1">Affiliate join</button>

</Link>}
          <button className="btn2">Advertiser join</button>
        </div>
      </div>
      {width <= 800 ? (
        <div className={`sidebar ${menu ? "show" : ""}`}>
          {menu && (
            <div className="side-items">
              <Link className="link" to="/">
                Home
              </Link>
              <br />
              <Link className="link" to="/about">
                About us
              </Link>
              <br />
              <Link className="link" to="/about">
                Events
              </Link>
              <br />
              <Link className="link" to="/contact">
                Contact us
              </Link>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
