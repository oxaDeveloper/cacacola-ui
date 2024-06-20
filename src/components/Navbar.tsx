import React from "react";
import Image from "next/image";
// Icons
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      <div className="flex cursor-pointer items-center gap-2">
        <BlurOnIcon sx={{ color: "#c80000", fontSize: 40 }} />
        <p className="font-semibold uppercase tracking-[0.3em] text-[#c80000]">
          Menu
        </p>
      </div>

      <div className="cursor-pointer">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <div className="cursor-pointer">
        <ShoppingCartIcon sx={{ color: "#c80000", fontSize: 30 }} />
      </div>
    </nav>
  );
};

export default Navbar;
