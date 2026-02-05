import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex text-sm text-zinc-600 justify-around p-3 font-medium">
      <div>
        <img></img>
      </div>
      <div className="flex gap-6">
        <a className="p-3">
          <Link to="/">Home</Link>
        </a>
        <a className="p-3">About Us</a>
        <a className="p-3">Contact Us</a>
        <a className="p-3">Memberships</a>
        <a className="p-3"></a>
      </div>
      <div className="flex gap-6">
        <button className="p-3">SignUp</button>
        <button className="p-3">Login</button>
      </div>
    </div>
  );
}

export default Header;
