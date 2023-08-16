import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="/">
            HOME
          </Link>
          <Link className="navbar__link relative" href="/product">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="/product">
            MEN'S
          </Link>
          <Link className="navbar__link relative" href="/product">
            WOMEN'S
          </Link>
          <Link className="navbar__link relative" href="/product">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="/product">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="/product">
          HOT OFFERS
          </Link>
          <Link className="navbar__link relative" href="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
