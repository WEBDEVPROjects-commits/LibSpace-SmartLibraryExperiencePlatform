import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex text-sm justify-around p-6 font-medium">
      <div>
        <img></img>
      </div>
      <div className="flex gap-6">
        <div className="p-3">
          <Link to="/">Home</Link>
        </div>
        <a className="p-3">About Us</a>
        <a className="p-3">Contact Us</a>
        <a className="p-3">Memberships</a>
        <a className="p-3"></a>
      </div>
      <div className="flex gap-6">
        <button className="p-3"><Link to="/Signup">SignUp</Link></button>
        <button className="p-3"><Link to="/Login">Login</Link></button>
      </div>
    </div>
  );
}

export default Header;
