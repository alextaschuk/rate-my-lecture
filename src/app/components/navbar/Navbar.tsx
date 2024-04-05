import Link from "next/link";
import Image from "next/image";
import React from "react";
import podium from "/public/assets/podium.png";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="bg-yellowish flex items-center justify-between">
        <div className="ml-3.5"> { /* div for logo in top left */}
          <Link href={`./`}> {/* when logo is clicked, user is returned to homepage */}
            {" "}
            <Image alt="Logo" src={podium} width={50} height={75} />{" "}
          </Link>
        </div>

        <div className="flex">
          <div className="mr-4 order-2"> {/* div for account icon in top right */}
            <img
              src="/icons/account_icon.svg"
              alt="Account Icon"
              width="50px"
              height="50px"
            />
          </div>
          <div className="mr-4 order-1"> {/* div for waffle menu in top right */}
            <img
              src="/icons/menu.svg"
              alt="Menu icon"
              width="50px"
              height="50px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
