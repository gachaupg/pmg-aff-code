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
            <div className="logo">
              <Link style={{ cursor: "pointer" }} className="link" to="/">
                <img
                  width={100}
                  src="https://res.cloudinary.com/pitz/image/upload/v1703157970/WhatsApp_Image_2023-12-21_at_13.34.14_mcsjd2.jpg"
                  alt=""
                />
              </Link>
            </div>
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
            <Link style={{ cursor: "pointer" }} className="link" to="/">
              <img
                src="https://res.cloudinary.com/pitz/image/upload/v1703157970/WhatsApp_Image_2023-12-21_at_13.34.14_mcsjd2.jpg"
                alt=""
              />
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
          {width <= 800 ? (
            <a href="https://backend.zintle-aff.com/register.php">
              <button style={{marginRight:'0.5rem'}} className="btn1">Affiliate join</button>
            </a>
          ) : (
            <>
             <a href="https://backend.zintle-aff.com/register.php">
              <button style={{marginRight:'0.5rem'}} className="btn1">Affiliate join</button>
            </a>
                        <button className="btn2">Advertiser join</button>

            </>
          )}
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
