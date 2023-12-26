import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  /**
   * If no dependency array => useEffect is called in every render
   * if there is empty dependency array ie. [] => useEffect is only called in initial render(just once)
   * if there is dependencies => useEffect is called only when dependencies change
   */
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
