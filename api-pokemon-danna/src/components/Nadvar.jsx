import React from "react";

const Navbar = () => {
  let imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokemon-logo" className="navbar-image" />
      </div>
    </nav>
  );
};

export default Navbar;
