"use client";
import { CampusDropdown } from "./components/selectCampus/SelectCampus";
import "../styles/globals.css";
import RootLayout from "./layout";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <CampusDropdown />
    </div>
  );
};

export default page;
