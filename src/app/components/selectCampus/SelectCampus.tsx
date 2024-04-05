// Component for users to select their respective campus when searching reviews/ leaving a review
import { useState } from "react";
import app from "../../api/firebase/firebase";
import { db } from "../../api/firebase/firebase";
import { auth } from "../../api/firebase/firebase";

// just use the fucking select tag from barebones basic ass html

// https://www.w3schools.com/tags/tag_select.asp
const CampusDropdown: React.FC = () => {

  const [campus, setCampus] = useState("Okanagan");


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative">
        <select onChange={(e) => setCampus(e.target.value)} className="appearance-none rounded-md px-4 py-2 border border-gray-300 shadow-sm text-base focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
          <option value="Okanagan">Okanagan</option>
          <option value="Vancouver">Vancouver</option>
        </select>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-t-lg"></div>
      </div>
    </div>
  );
};

export { CampusDropdown };
