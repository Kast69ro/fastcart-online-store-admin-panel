import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Schedule() {
  const series = [
    {
      name: "Orders",
      data: [20,18,30,30,20,4,50,70,100,80,90,10],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#2563EB"],
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#2563EB",
      strokeWidth: 3,
      hover: { size: 7 },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const orders = series[seriesIndex][dataPointIndex];
        const month = w.globals.labels[dataPointIndex];
        return `<div style="padding: 8px; font-weight: 600;">${orders} Orders<br /><span style="font-weight: 400">${month}</span></div>`;
      },
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      labels: {
        style: {
          fontSize: "13px",
          colors: "#6B7280",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "13px",
          colors: "#6B7280",
        },
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    title: {
      text: "Sales Revenue",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "600",
        color: "#111827",
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-2xl ">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}
