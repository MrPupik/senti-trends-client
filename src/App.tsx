import React, { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { dataset, Plot, vendor } from "./plot";
import TopStrip from "./top-strip";
import { Button, Input, Typography, useTheme } from "@mui/material";
import { Data, RawData } from "./utils";
import { read } from "fs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const sampleData = {
//   labels,
//   datasets: [
//     {
//       label: "Fox News",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "CNN",
//       data: [28, 48, 40, 19, 86, 27, 90],
//       borderColor: "rgb(53, 162, 235, 0.5)",
//       backgroundColor: "rgba(53, 162, 235)",
//     },
//   ],
// };

type sentiTrendObject = "netanyahu" | "trump";

const objectNames: sentiTrendObject[] = ["netanyahu", "trump"];

export const sampleData = {
  labels,
  datasets: [
    {
      label: "Fox News",
      data: [],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "CNN",
      data: [],
      borderColor: "rgb(53, 162, 235, 0.5)",
      backgroundColor: "rgba(53, 162, 235)",
    },
  ],
};

export function App() {
  const theme = useTheme();
  const [serachTerm, setSerachTerm] = useState<sentiTrendObject | string>();

  const [load, setLoad] = useState(false);
  const [data, setData] = useState<dataset[]>();
  const [vendors, setVendors] = useState<vendor[]>(["Fox", "CNN"]);
  const [lastSerched, setLastSerched] = useState<string>();

  const updateDataset = (name: string) => {
    const newData: dataset[] = [];
    vendors.forEach((vendor) => {
      newData.push({
        vendor: vendor as vendor,
        data: Data[name][vendor]["data"],
        labels: Data[name][vendor]["labels"],
      });
    });
    console.log(`newData: ${newData}`);

    setData(newData);
  };

  // const { read } = useCSV({ doSomethingWithData: addDataset });

  // useEffect(() => {
  //   if (load) {
  //     vendors.forEach((vendor) => {
  //       read(serachTerm as sentiTrendObject, vendor);
  //     });
  //     setLoad(false);
  //   }
  // }, [load, read, serachTerm, vendors]);

  return (
    <header className="App-header">
      <TopStrip />
      <div
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            flexDirection: "column",
            flex: 1,
            verticalAlign: "center",
            textAlign: "center",
          }}
        >
          <Typography fontSize={25}>Search for an entity:</Typography>
          <Input
            color={"primary"}
            style={{
              marginTop: 15,
              width: 400,
              height: 20,
              backgroundColor: theme.palette.background.paper,
            }}
            onChange={(e) => {
              if (objectNames.includes(e.target.value as sentiTrendObject)) {
                setSerachTerm(e.target.value);
                updateDataset(e.target.value);
              } else {
                setData(undefined);
                // setSerachTerm(undefined)
              }
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Button
              onClick={() => setLoad(true)}
              variant="contained"
              size="medium"
            >
              Trend Away !
            </Button>
          </div>
        </div>
        <div
          style={{
            flex: 3,
            width: 600,
            height: 600,
          }}
        >
          {data && serachTerm && (
            <Plot
              objectName={serachTerm}
              datasets={data}
              pointDescriptors={[]}
              style={{}}
            />
          )}
        </div>
      </div>
    </header>
  );
}
