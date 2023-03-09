import { useCallback, useEffect, useState } from "react";

export type RawData = { data: number[]; labels: string[] };

type csv = Record<string, Record<string, RawData>>;

export const Data: csv = {
  netanyahu: {
    Fox: {
      data: [
        0.1855528813522021, -0.18709830336716632, -0.06892491552866384,
        -0.6201859631302119, 0.0, -0.602099316801603, -0.6104426473585631,
        -0.44772111907418183, -0.3435644545870111, 0.0190861175538099,
        -0.3142477111666817, -0.0034749308322214, -0.12310441101485564,
        -0.21122599174252815, -0.0911545431575617, 0.1210504398169022,
        0.17430828562153056,
      ],
      labels: [
        "2021-01",
        "2021-02",
        "2021-03",
        "2021-04",
        "2021-05",
        "2021-06",
        "2021-07",
        "2021-11",
        "2021-12",
        "2022-03",
        "2022-04",
        "2022-06",
        "2022-07",
        "2022-08",
        "2022-10",
        "2022-11",
        "2022-12",
      ],
    },
    CNN: {
      data: [
        0.2754525314954136, -0.4792804863478841, -0.693728644833599,
        0.4364552621646959, -0.9038461538461539, 0.12949541484929256,
        -0.8248027379809321, -0.7401998472468982, 0.0035244145236706,
        -0.005024752536460897, -0.0883381099103367, -0.6239156209942611,
        -0.2058562920663099, 0.0322918885612628, 0.0206066726199688,
        -0.0831798124666919, 0.1892765050815265,
      ],
      labels: [
        "2021-02",
        "2021-06",
        "2021-09",
        "2021-10",
        "2021-11",
        "2021-12",
        "2022-01",
        "2022-02",
        "2022-04",
        "2022-06",
        "2022-07",
        "2022-08",
        "2022-10",
        "2022-11",
        "2022-12",
        "2023-01",
        "2023-02",
      ],
    },
  },
  trump: {
    CNN: {
      data: [
        0.5576097863443311, 0.2237066479406411, -5.556791008475223e-6,
        -0.3163031615983668, -0.9878048780436008, -0.519597553692163,
        -0.4526346544188446, -0.4245046753780763, -0.4196597867897884,
        -0.6206324693177208, -0.5088877839106272, -0.3986204208468717,
        -0.32676779922688803,
      ],
      labels: [
        "2021-02",
        "2021-05",
        "2022-01",
        "2022-03",
        "2022-05",
        "2022-08",
        "2022-09",
        "2022-10",
        "2022-11",
        "2022-12",
        "2023-01",
        "2023-02",
        "2023-03",
      ],
    },
    Fox: {
      data: [],
      labels: [],
    },
  },
};

// export function useCSV({
//   doSomethingWithData,
// }: {
//   doSomethingWithData: (data: RawData, vendor: string) => void;
// }) {
//   console.log("useCSV");
//   const [info, setInfo] = useState<any>([
//     {
//       data: [],
//       labels: [],
//     },
//     "",
//   ]);

//   useEffect(() => {
//     const [data, vendor] = info;
//     if (vendor !== "") {
//       console.log(`useCSV: ${vendor}`);
//       doSomethingWithData(data, vendor);
//     }
//   }, [info, doSomethingWithData]);

//   const headers = ["month", "score"];

//   const read = useCallback(async (objectName: string, vendor: string) => {
//     const rawdata = await (
//       await fetch(`data/${objectName}/${vendor}.csv`)
//     ).text();

//     const lines = rawdata.split("\n");
//     const result: RawData = {
//       data: [],
//       labels: [],
//     };
//     var value;
//     var currentline;
//     var date;
//     // const headers = lines[0].split(",");
//     for (let i = 1; i < lines.length; i++) {
//       currentline = lines[i].split(",");
//       value = parseFloat(currentline[1]);
//       date = currentline[0];

//       result.data.push(value);
//       result.labels.push(date);
//     }

//     console.log(result);

//     setInfo([result, vendor]);
//   }, []);

//   return { read };
// }
