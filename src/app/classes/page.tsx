// Page where user can see a class's current reviews

'use client';
import React, { useEffect, useState } from "react";
import CsvClassReader from "../api/updateClassData/csvParser";
import { promises as fs } from "fs";

import RootLayout from "../layout";


const Main = () => {
  // Use the CsvClassReader hook to fetch and parse CSV data
  const [jsonData, setJsonData] = useState(String);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CsvClassReader();
      setJsonData(data);
    };

    fetchData();
  }, []);
  

  // Render your components with the parsed JSON data
  return (
    <>
    <div> 
    <RootLayout children={undefined}></RootLayout>
      <div> {JSON.stringify(jsonData)}</div>
    </div>
    </>
  );
};

export default Main
