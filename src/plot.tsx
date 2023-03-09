import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";

type Options = {
  scales?: {
    y: {
      min: number;
      max: number;
      stepSize: number;
    };
  };
  responsive: boolean;
  plugins: {
    legend: {
      position: string;
    };
    title: {
      display: boolean;
      text?: string;
    };
  };
};
const defaultOptions: Options = {
  scales: {
    y: {
      min: -1,
      max: 1,
      stepSize: 0.1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      // text: "",
    },
  },
};

export type vendor = "Fox" | "CNN";

export type dataset = {
  vendor: vendor;
  data: number[];
  labels: string[];
};

// export const sampleData = {
//   labels,
//   datasets: [
//     {
//       label: "Fox News",
//       data: [],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "CNN",
//       data: [],
//       borderColor: "rgb(53, 162, 235, 0.5)",
//       backgroundColor: "rgba(53, 162, 235)",
//     },
//   ],
// };

const Colors = {
  CNN: {
    border: "rgb(53, 162, 235, 0.5)",
    background: "rgba(53, 162, 235)",
  },
  Fox: {
    border: "rgb(255, 99, 132)",
    background: "rgba(255, 99, 132, 0.5)",
  },
};

export function Plot(props: {
  objectName: string;
  datasets: dataset[];
  pointDescriptors: any;
  style: any;
}) {
  const data = useMemo(() => {
    var data = {
      datasets: [] as any[],
      labels: [] as string[],
    };
    var all_labels: string[] = [];

    for (let i = 0; i < props.datasets.length; i++) {
      // all_labels = all_labels.concat(props.datasets[i].labels);
      data.datasets.push({
        label: props.datasets[i].vendor,
        data: props.datasets[i].data,
        borderColor: Colors[props.datasets[i].vendor].border,
        backgroundColor: Colors[props.datasets[i].vendor].background,
      });
      all_labels.sort();
    }
    if (props.datasets[0].labels.length > props.datasets[1].labels.length) {
      all_labels = props.datasets[0].labels;
    } else {
      all_labels = props.datasets[1].labels;
    }
    data.labels = all_labels;

    return data;
  }, [props.datasets]);

  const options = useMemo(() => {
    var options = {
      ...defaultOptions,
    };
    options.plugins.title.text = props.objectName;
    return options;
  }, [props.objectName]);

  return (
    <div
      style={{
        flex: 3,
        width: 600,
        height: 600,
      }}
    >
      <Line options={options as any} data={data} />
    </div>
  );
}
