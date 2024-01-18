"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { promises as fs } from "fs";


const url =
  "https://raw.githubusercontent.com/DonneyF/ubc-pair-grade-data/0e40aa0b80210d0a53e86e15bdc066995a176cab/tableau-dashboard-v2/UBCO/2022W/UBCO-2022W-COSC.csv";

const CsvClassReader = () => {
  // State to store the parsed JSON data
  const [jsonData, setJsonData] = useState(0);

  // useEffect hook runs when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch CSV data
    const fetchCsvData = async () => {
      try {
        // Use the Fetch API to get the remote CSV file
        const response = await fetch(url);

        // Get the text content of the CSV file
        const csvData = await response.text();

        // Use PapaParse to parse the CSV data
        Papa.parse(csvData, {
          // Assuming the first row contains headers, set header to true
          header: true,

          // Convert numeric values to numbers if possible
          dynamicTyping: true,

          // Callback function called when parsing is complete
          complete: (result: any) => {
            // result.data contains the parsed JSON data
            setJsonData(result.data);
          },

          // Callback function called in case of parsing error
          error: (error: any) => {
            console.error("Error with PapaParse:", error.message);
          },
        });
      } catch (e: any) {
        // Handle errors that might occur during fetching or parsing
        console.error("Error fetching CSV data:", e.message);
      }
    };

    // Call the fetchCsvData function when the component mounts
    fetchCsvData();
  }, []); // The empty dependency array ensures the effect runs only once

  // Render your components with the parsed JSON data
  return JSON.stringify(jsonData);
};

export default CsvClassReader;
