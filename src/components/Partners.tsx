import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="relative z-50 grid items-center justify-center gap-2">
      <p className="text-center font-extralight">Our partners</p>

      <div className="flex gap-6">
        <Image
          src="https://www.freepnglogos.com/uploads/company-logo-png/raise-company-logo-digital-product-demo-9.png"
          alt=""
          width={100}
          height={100}
        />
        <Image
          src="https://jazz.org/wp-content/uploads/2024/01/corporate_sponsors_jalc_footer_nike.png"
          alt=""
          width={100}
          height={100}
        />
        <Image
          src="https://coworking.com/wp-content/uploads/2018/09/visa-logo-white-1024x452.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Partners;
