"use client";

import React from "react";
import CsvClassReader from "./csvParser";
import { promises as fs } from "fs";


const Main = () => {
  // Use the CsvClassReader hook to fetch and parse CSV data
 const jsonData = CsvClassReader();
  // Render your components with the parsed JSON data
  return <div> {JSON.stringify(jsonData)}</div>;
};

export default Main;
